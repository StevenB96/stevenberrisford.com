import {
  useEffect,
  useState,
  useRef,
  memo,
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
import useCommonFunctions from './Hooks/useCommonFunctions';

import {
  ProjectComponent,
  PdfComponent,
  YoutubeComponent,
  Contact,
  ContentGroup,
  BaseComponent
} from './Visuals/ContentComponents';

import {
  AboutMeOverlay,
  AboutMeSection,
  CVDownloadButton,
  TopScrollElement,
  SiteHeader
} from './Visuals/AppComponents';

import {
  getProfileRequest,
  getContentRequest
} from './Redux/Actions/appActions';

const OptionsMenu = ({
  profile,
  userSetIsAboutModalOpen,
  isAboutModalOpen
}) => {
  const { isTablet, isMobile, width } = useResponsive();

  return (
    <div
      style={{
        top: 10,
        left: 10,
        position: 'fixed',
        zIndex: 3,
        display: 'flex',
        flexDirection: (isTablet || isMobile) ? 'column' : 'row',
        gap: width * 0.01,
      }}>
      <AboutMeSection
        userSetIsAboutModalOpen={userSetIsAboutModalOpen}
        isAboutModalOpen={isAboutModalOpen}
      />
      <CVDownloadButton
        fileName="CV"
        fileUrl={profile?.cv_link}
      />
    </div>
  );
};

const MultiTypeComponent = memo(({ item }) => {
  let content = null;
  if (item.content_type === 1) {
    content = <ProjectComponent key={item.id} project={item} />;
  }
  else if (item.content_type === 2) {
    content = <PdfComponent key={item.id} article={item} />;
  }
  else if (item.content_type === 3) {
    content = <YoutubeComponent key={item.id} hobby={item} />;
  }
  return (
    <BaseComponent>
      <div>
        <h3>{item.title}</h3>
        <p
          style={{
            textAlign: 'left',
            margin: 0,
            whiteSpace: 'pre-wrap',
            marginBottom: 10,
          }}
        >{item.text}</p>
      </div>
      {content}
    </BaseComponent>
  );
});

function App() {
  const commonFunctions = useCommonFunctions();
  // Hook to access Redux dispatch function
  const dispatch = useDispatch();

  // Custom hooks to get window size and scroll position
  const { width, height } = useResponsive();
  const scrollY = useScrollPosition(30);

  // References for different sections of the page
  const projectsSectionRef = useRef(null);
  const articlesSectionRef = useRef(null);
  const hobbiesSectionRef = useRef(null);
  const contactSectionRef = useRef(null);
  const aboutOverlayRef = useRef(null);

  // Accessing application state from Redux store
  const {
    profile,
    projects,
    articles,
    hobbies,
  } = useSelector(state => state.app);

  // Local state to manage various content and modal visibility
  const [content, setContent] = useState([]);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);

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
      },
      {
        id: 2,
        backgroundImageUrl: profile?.articles_background_link,
        items: articles,
        ref: articlesSectionRef,
        title: 'Articles',
        text: 'articles',
        contentLoaded: false,
      },
      {
        id: 3,
        backgroundImageUrl: profile?.hobbies_background_link,
        items: hobbies,
        ref: hobbiesSectionRef,
        title: 'Hobbies',
        text: 'hobbies',
        contentLoaded: false,
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
      }
    }),
    {
      id: 4,
      title: 'Contact Information',
      ref: contactSectionRef,
    }
  ];

  // Function to smoothly scroll to a section
  const scrollToSection = useCallback((elementRef) => {
    if (elementRef.current) {
      window.scrollTo({
        top: elementRef.current.offsetTop - 20,
        behavior: "smooth",
      });
    }
  }, []);

  const userSetIsAboutModalOpen = (isOpen) => {
    if (isOpen === false && scrollY > height) {
      commonFunctions.scrollToTop();
    }
    setIsAboutModalOpen(isOpen);
  }

  // useEffect to fetch profile and content when component mounts
  useEffect(() => {
    dispatch(getProfileRequest());
    dispatch(getContentRequest());
  }, [dispatch]);

  // useEffect to close modal if scroll position is greater than height
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (scrollY > height) {
        setIsAboutModalOpen(false);
      }
    }, 1000);

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
    if (isAboutModalOpen) {
      scrollToSection(aboutOverlayRef);
    }
  }, [isAboutModalOpen, scrollToSection]);

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
                profile={profile}
                navInputMap={navInputMap}
                scrollToSection={scrollToSection}
              />

              {content.map((value, indexA) => (
                <ContentGroup
                  title={value.title}
                  text={value.text}
                  ref={value.ref}
                  backgroundImageUrl={value.backgroundImageUrl}
                  blur={3}
                  key={`${value.id}}`}
                >
                  {value.items && value.items.map((item, indexB) => {
                    return <MultiTypeComponent
                      item={item}
                      key={`${value.id}_${item.id}`}
                    />;
                  }
                  )}
                </ContentGroup>
              ))}

              <ContentGroup
                title={'Contact Info'}
                text={'contactInfo'}
                ref={contactSectionRef}
                backgroundImageUrl={profile?.profile_background_link}
                blur={3}
              >
                {contactItems.map(item =>
                  <Contact contactMethod={item} />
                )}
              </ContentGroup>

              {scrollY > height &&
                (
                  <TopScrollElement />
                )
              }
              <OptionsMenu
                profile={profile}
                isAboutModalOpen={isAboutModalOpen}
                userSetIsAboutModalOpen={userSetIsAboutModalOpen}
              />
              {isAboutModalOpen &&
                (
                  <AboutMeOverlay
                    ref={aboutOverlayRef}
                    userSetIsAboutModalOpen={userSetIsAboutModalOpen}
                    profile={profile}
                  />
                )
              }
            </>
          ) :
          (
            <div
              style={{
                width,
                height,
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
