import {
  useEffect,
  useState,
  useRef,
  useCallback,
} from 'react';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import useScrollPosition from '@react-hook/window-scroll';
import ClockLoader from "react-spinners/FadeLoader";
import tabIcon from './Assets/tab_icon.png';
import useResponsive from './Hooks/useResponsive';
import { commonFunctions } from './Hooks';
import ContentContainer from './Visuals/Containers/ContentContainer'

import {
  ProfileOverlayElement,
  ReferenceOverlayElement,
  SupportOverlayElement,
  TopScrollElement,
  Contact,
} from './Visuals/Elements';
import {
  ContentGroup,
  SiteHeader,
} from './Visuals/Layouts';
import {
  LeftSiteOptionsContainer,
  RightSiteOptionsContainer,
  ChatElementContainer
} from './Visuals/Containers';

import {
  getProfileRequest,
  getContentRequest,
  getReferencesRequest,
  setAppModalOpenRequest,
} from './Redux/Actions/appActions';

function App() {
  // Hook to access Redux dispatch function
  const dispatch = useDispatch();

  // Custom hooks to get window size and scroll position
  const { width, height } = useResponsive();
  const scrollY = useScrollPosition(0);

  // References for different sections of the page
  const projectsSectionRef = useRef(null);
  const articlesSectionRef = useRef(null);
  const hobbiesSectionRef = useRef(null);
  const contactSectionRef = useRef(null);

  // Accessing application state from Redux store
  const {
    profile,
    projects,
    articles,
    hobbies,
    appModalOpen,
  } = useSelector(state => state.app);

  // Local state to manage various content and modal visibility
  const [content, setContent] = useState([]);

  // useEffect to handle content updates and image loading
  useEffect(() => {
    // Step A: Build updatedContent array with sections' details
    const updatedContent = [
      {
        id: 1,
        backgroundImageUrl: profile?.projects_background_link,
        items: projects,
        ref: projectsSectionRef,
        title: 'Projects',
        text: 'projects',
        contentLoaded: false,
        icon: 'MdOutlineComputer',
      },
      {
        id: 2,
        backgroundImageUrl: profile?.articles_background_link,
        items: articles,
        ref: articlesSectionRef,
        title: 'Articles',
        text: 'articles',
        contentLoaded: false,
        icon: 'MdNewspaper',
        contrast: 0.5,
        brightness: 1.2,
      },
      {
        id: 3,
        backgroundImageUrl: profile?.hobbies_background_link,
        items: hobbies,
        ref: hobbiesSectionRef,
        title: 'Hobbies',
        text: 'hobbies',
        contentLoaded: false,
        icon: 'MdOutlineSportsKabaddi',
      },
    ];

    setContent(updatedContent);

    // Step B: Load images right after updating content
    updatedContent.forEach(value => {
      if (value.backgroundImageUrl) {
        const image = new Image();
        image.src = value.backgroundImageUrl;

        // Handler for successful image load
        const handleLoad = () => {
          setContent(prevState =>
            prevState.map(prevValue =>
              prevValue.text === value.text
                ? { ...prevValue, contentLoaded: true } // Mark content as loaded
                : prevValue
            )
          );
        };

        // Handler for error while loading image
        const handleError = () => {
          // Handle error if needed
        };

        image.onload = handleLoad;
        image.onerror = handleError;

        // Cleanup function to prevent memory leaks
        return () => {
          image.onload = null;
          image.onerror = null;
        };
      }
    });
  }, [profile, projects, articles, hobbies]);

  // Check if all content has been loaded
  const allContentLoaded = content.length > 0 && Object.values(content).every((value) => value.contentLoaded);

  // Create a mapping for navigation
  const navInputMap = [
    ...content.map(value => {
      return {
        id: value.id,
        title: value.title,
        ref: value.ref,
        icon: value.icon
      }
    }),
    {
      id: 4,
      title: 'Contact Information',
      ref: contactSectionRef,
      icon: 'MdOutlineContactPhone',
    }
  ];

  // Function to smoothly scroll to a section
  const scrollToSection = useCallback((elementRef) => {
    dispatch(setAppModalOpenRequest(null));
    
    if (elementRef.current) {
      window.scrollTo({
        top: elementRef.current.offsetTop - 20,
        behavior: "smooth",
      });
    }
  }, []);

  // useEffect to fetch profile and content when component mounts
  useEffect(() => {
    dispatch(getProfileRequest());
    dispatch(getContentRequest());
    dispatch(getReferencesRequest());
  }, [dispatch]);

  // useEffect to close modal if scroll position is greater than height
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (scrollY > height) {
        dispatch(setAppModalOpenRequest(null));
      }
    }, 100);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [scrollY, height]);

  // useEffect to set and clean up a favicon
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'icon';
    link.href = tabIcon;
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  // useEffect to scroll to the about modal
  useEffect(() => {
    if (appModalOpen) {
      commonFunctions.scrollToTop();
    }
  }, [appModalOpen, scrollToSection]);

  // Contact items that will be displayed, with their icons
  const contactItems = [
    { iconName: 'phone', text: profile?.phone }, // Phone contact
    { iconName: 'email', text: profile?.email }, // Email contact
    { iconName: 'address', text: profile?.address }, // Address contact
  ];

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
    }}>
      {
        allContentLoaded ?
          (
            <>
              <SiteHeader
                navInputMap={navInputMap}
                scrollToSection={scrollToSection}
                blur={3}
              />
              {content.map((value, indexA) => (
                <ContentGroup
                  value={value}
                  ref={value.ref}
                  key={`${value.id}}`}
                  contrast={value?.contrast}
                  brightness={value?.brightness}
                  blur={value?.blur}
                >
                  {value.items && value.items.map((item, indexB) => {
                    return <ContentContainer
                      item={item}
                      key={`${value.id}_${item.id}`}
                    />;
                  }
                  )}
                </ContentGroup>
              ))}

              <ContentGroup
                ref={contactSectionRef}
                value={{
                  title: 'Contact Info',
                  text: 'contactInfo',
                  icon: 'MdOutlineContactPhone',
                  backgroundImageUrl: profile?.profile_background_link,
                }}
                blur={3}
              >
                {contactItems.map(item =>
                  <Contact contactMethod={item} />
                )}
              </ContentGroup>

              {
                (scrollY > height) ?
                  (
                    <TopScrollElement />
                  )
                  :
                  (
                    <>
                      <LeftSiteOptionsContainer />
                      <RightSiteOptionsContainer />
                    </>
                  )
              }
              <ProfileOverlayElement/>
              <SupportOverlayElement />
              <ChatElementContainer />
              <ReferenceOverlayElement />
            </>
          ) :
          (
            <div
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                zIndex: 5,
                backgroundColor: 'black',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
              }}
            >
              <h2 style={{ color: 'whitesmoke', }}>Loading Site Content</h2>
              <ClockLoader color={'whitesmoke'} />
            </div>
          )
      }
    </div>
  );
}

export default App;
