import {
  useEffect,
  useState,
  useRef,
  forwardRef,
} from 'react';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import Nav from 'react-bootstrap/Nav';
import {
  useWindowSize,
} from '@react-hook/window-size';
import useScrollPosition from '@react-hook/window-scroll';
import {
  PiArrowFatDownFill
} from "react-icons/pi";
import {
  ToastContainer,
  toast
} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import env from './env';

import ProjectComponent from './Visuals/ContentComponents/ProjectComponent';
import PdfComponent from './Visuals/ContentComponents/PdfComponent';
import YoutubeComponent from './Visuals/ContentComponents/YoutubeComponent';
import Profile from './Visuals/ContentComponents/Profile';
import ContactComponent from './Visuals/ContentComponents/ContactComponent';

import NavBarColumn from './Visuals/AppComponents/NavBarColumn';
import NavBarRow from './Visuals/AppComponents/NavBarRow';
import ProfilePictureElement from './Visuals/AppComponents/ProfilePictureElement';
import TopScrollElement from './Visuals/AppComponents/TopScrollElement';

import {
  getProfileRequest,
  getContentRequest
} from './Redux/Actions/appActions';

const ContentGroup = forwardRef(({ children, backgroundImageUrl, text }, ref) => {
  const contentGroupLabelStyle = {
    backgroundColor: 'lightgrey',
    width: '100%',
    paddingLeft: 20,
    boxSizing: 'border-box',
    borderTop: 'solid',
    borderBottom: 'solid',
    textAlign: 'center',
    height: 150,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <>
      <div
        ref={ref}
        style={{ ...contentGroupLabelStyle }}
      >
        <h2 style={{ margin: 5, marginTop: 0, }}>{text}</h2><PiArrowFatDownFill size={25} />
      </div>
      <div style={{
        backgroundImage: backgroundImageUrl,
        width: '100%',
        objectFit: 'cover',
        backgroundSize: '100% auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          width: '100%',
          maxWidth: 1400,
        }}>
          {children}
        </div>
      </div>
    </>
  );
});

function GeneralComponent({ item }) {
  if (item.content_type === 1) {
    return <ProjectComponent key={item.id} project={item} />;
  }
  if (item.content_type === 2) {
    return <PdfComponent key={item.id} article={item} />;
  }
  if (item.content_type === 3) {
    return <YoutubeComponent key={item.id} hobby={item} />;
  }
  return null;
}

function ToastContent() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '5%',
      }}
    >
      <h3
        style={{
          whiteSpace: 'pre-wrap',
          color: 'black',
          fontFamily: 'Quicksand',
          textAlign: 'left',
        }}
      >
        <div>
          <h2
            style={{
              textAlign: 'center',
            }}>Welcome to my website!
          </h2>
        </div><br />
        <div>Here you can learn more about me.</div><br />
        <div>By navigating through the various sections you can discover:</div>
        <div>
          <ol style={{ paddingLeft: '10%', }}>
            <li>Projects and prototypes</li>
            <li>Articles and notes</li>
            <li>Hobbies</li>
          </ol>
        </div>
      </h3>
    </div>
  );
};

function App() {
  const dispatch = useDispatch();

  const {
    profile,
    projects,
    articles,
    hobbies,
  } = useSelector(state => state.app);

  const flashWelcomeToast = () => {
    toast(<ToastContent />);
  }

  useEffect(() => {
    dispatch(getProfileRequest());
    dispatch(getContentRequest());
    flashWelcomeToast();
  }, []);

  const [width, height] = useWindowSize();
  const scrollY = useScrollPosition(30);
  const profileSectionRef = useRef(null);
  const projectsSectionRef = useRef(null);
  const articlesSectionRef = useRef(null);
  const hobbiesSectionRef = useRef(null);
  const contactSectionRef = useRef(null);

  const contactItems = [
    { iconName: 'phone', text: profile?.phone },
    { iconName: 'email', text: profile?.email },
    { iconName: 'address', text: profile?.address },
  ];

  const navInputMap = [
    {
      title: 'Profile',
      ref: profileSectionRef,
    },
    {
      title: 'Projects',
      ref: projectsSectionRef,
    },
    {
      title: 'Articles',
      ref: articlesSectionRef,
    },
    {
      title: 'Hobbies',
      ref: hobbiesSectionRef,
    },
    {
      title: 'Contact Info',
      ref: contactSectionRef,
    }
  ];

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop - 20,
      behavior: "smooth",
    });
  };

  const navBarIsRow = width > (env.WIDTH_LIMIT || 1000);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        backgroundImage: `url(${profile?.profile_background_link})`,
        objectFit: 'cover',
        backgroundSize: '100% auto',
      }}>
        <h1 style={{
          width: '100%',
          padding: 40,
          textAlign: 'center',
          margin: 0,
          backgroundColor: 'silver',
          color: 'black',
        }}>
          Hi, I'm Steven Berrisford.<br></br>This is my website / portfolio.
        </h1>
        <Nav
          style={{
            width: '100%',
            borderBottom: 'solid',
          }}
        >
          {
            navBarIsRow ?
              <NavBarRow
                navInputMap={navInputMap}
                scrollToSection={scrollToSection} /> :
              <NavBarColumn
                navInputMap={navInputMap}
                scrollToSection={scrollToSection} />
          }
        </Nav>
        <div ref={profileSectionRef}>
          {profile &&
            <Profile profile={profile} />
          }
        </div>
      </div>
      <ContentGroup
        text={'Projects'}
        ref={projectsSectionRef}
        backgroundImageUrl={`url(${profile?.projects_background_link})`}>
        {projects && projects.map(item =>
          <GeneralComponent item={item} key={item.id} />
        )}
      </ContentGroup>
      <ContentGroup
        text={'Articles'}
        ref={articlesSectionRef}
        backgroundImageUrl={`url(${profile?.articles_background_link})`}>
        {articles && articles.map(item =>
          <GeneralComponent item={item} key={item.id} />
        )}
      </ContentGroup>
      <ContentGroup
        text={'Hobbies'}
        ref={hobbiesSectionRef}
        backgroundImageUrl={`url(${profile?.hobbies_background_link})`}>
        {hobbies && hobbies.map(item =>
          <GeneralComponent item={item} key={item.id} />
        )}
      </ContentGroup>
      <ContentGroup
        text={'Contact Info'}
        ref={contactSectionRef}
        backgroundImageUrl={`url(${profile?.profile_background_link})`}>
        {contactItems.map(item =>
          <ContactComponent contactMethod={item} />
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
        style={{ width: '50%', maxWidth: (env.WIDTH_LIMIT || 1000) / 2, }}
      />
    </div>
  );
}

export default App;
