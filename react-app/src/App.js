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
import {
  useWindowSize,
} from '@react-hook/window-size';
import useScrollPosition from '@react-hook/window-scroll';
import ClockLoader from "react-spinners/FadeLoader";
import {
  ToastContainer,
  toast
} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ProjectComponent from './Visuals/ContentComponents/ProjectComponent';
import PdfComponent from './Visuals/ContentComponents/PdfComponent';
import YoutubeComponent from './Visuals/ContentComponents/YoutubeComponent';
import Contact from './Visuals/ContentComponents/Contact';
import ContentGroup from './Visuals/ContentComponents/ContentGroup';
import BaseComponent from './Visuals/ContentComponents/BaseComponent';
import ProfilePictureElement from './Visuals/AppComponents/ProfilePictureElement';
import ToastContent from './Visuals/AppComponents/ToastContent';
import TopScrollElement from './Visuals/AppComponents/TopScrollElement';
import SiteHeader from './Visuals/AppComponents/SiteHeader';

import {
  getProfileRequest,
  getContentRequest
} from './Redux/Actions/appActions';

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
  const dispatch = useDispatch();

  const [width, height] = useWindowSize();
  const scrollY = useScrollPosition(30);
  const projectsSectionRef = useRef(null);
  const articlesSectionRef = useRef(null);
  const hobbiesSectionRef = useRef(null);
  const contactSectionRef = useRef(null);

  const {
    profile,
    projects,
    articles,
    hobbies,
  } = useSelector(state => state.app);

  const [content, setContent] = useState([
    {
      backgroundImageUrl: profile?.projects_background_link,
      items: projects,
      ref: projectsSectionRef,
      title: 'Projects',
      text: 'projects',
      contentLoaded: false,
    },
    {
      backgroundImageUrl: profile?.articles_background_link,
      items: articles,
      ref: articlesSectionRef,
      title: 'Articles',
      text: 'articles',
      contentLoaded: false,
    },
    {
      backgroundImageUrl: profile?.hobbies_background_link,
      items: hobbies,
      ref: hobbiesSectionRef,
      title: 'Hobbies',
      text: 'hobbies',
      contentLoaded: false,
    },
  ]);

  useEffect(() => {
    // Step A: Update content state
    const updatedContent = [
      {
        backgroundImageUrl: profile?.projects_background_link,
        items: projects,
        ref: projectsSectionRef,
        title: 'Projects',
        text: 'projects',
        contentLoaded: false,
      },
      {
        backgroundImageUrl: profile?.articles_background_link,
        items: articles,
        ref: articlesSectionRef,
        title: 'Articles',
        text: 'articles',
        contentLoaded: false,
      },
      {
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
        // console.log('Loading image:', value.backgroundImageUrl);
        const image = new Image();
        image.src = value.backgroundImageUrl;

        const handleLoad = () => {
          // console.log('Image loaded:', value.backgroundImageUrl);
          setContent(prevState =>
            prevState.map(prevValue =>
              prevValue.text === value.text
                ? { ...prevValue, contentLoaded: true }
                : prevValue
            )
          );
        };

        const handleError = () => {
          // console.log('Image failed to load:', value.backgroundImageUrl);
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

  const allContentLoaded = content.length > 0 && Object.values(content).every((value) => value.contentLoaded);


  useEffect(() => {
    if (allContentLoaded) {
      flashWelcomeToast();
    }
  }, [allContentLoaded]);

  const navInputMap = [...content.map(value => {
    return {
      title: value.title,
      ref: value.ref,
    }
  }),
  {
    title: 'Contact Information',
    ref: contactSectionRef,
  }];

  const flashWelcomeToast = () => {
    toast(<ToastContent />);
  }

  const scrollToSection = useCallback((elementRef) => {
    if (elementRef.current) {
      window.scrollTo({
        top: elementRef.current.offsetTop - 20,
        behavior: "smooth",
      });
    }
  }, []);

  useEffect(() => {
    dispatch(getProfileRequest());
    dispatch(getContentRequest());
  }, []);

  const contactItems = [
    { iconName: 'phone', text: profile?.phone },
    { iconName: 'email', text: profile?.email },
    { iconName: 'address', text: profile?.address },
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

              {content.map(value => (
                <ContentGroup
                  title={value.title}
                  text={value.text}
                  ref={value.ref}
                  backgroundImageUrl={value.backgroundImageUrl}
                  blur={4}
                  >
                  {value.items && value.items.map((item, index) => {
                    return <MultiTypeComponent
                      item={item}
                      key={item.id + value.text}
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
                blur={4}
              >
                {contactItems.map(item =>
                  <Contact contactMethod={item} />
                )}
              </ContentGroup>

              {scrollY > 20 && (
                <TopScrollElement />
              )}
              <ProfilePictureElement
                profile={profile}
                onClick={flashWelcomeToast}
              />
              <ToastContainer
                position="top-center"
                autoClose={10000}
                style={{ width: '50%', maxWidth: 600, zIndex: 2, }}
              />
            </>
          ) :
          (
            <div
              style={{
                width,
                height,
                position: 'absolute',
                zIndex: 2,
                backgroundColor: 'black',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
              }}
            >
              <h2 style={{ color: 'white', }}>Loading Site Content</h2>
              <ClockLoader color={'white'} />
            </div>
          )
      }
    </div>
  );
}

export default App;
