import {
  useEffect,
  useState,
  useRef,
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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  HiOutlinePhoneIncoming
} from "react-icons/hi";
import {
  MdOutlineEmail
} from "react-icons/md";
import {
  PiAddressBook
} from "react-icons/pi";

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

function ContentGroup({ children, backgroundImageUrl }) {
  return (
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
        justifyContent: 'center',
        width: '100%',
        maxWidth: 1400,
      }}>
        {children}
      </div>
    </div>
  );
};

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

function App() {
  const dispatch = useDispatch();

  const {
    profile,
    projects,
    articles,
    hobbies,
  } = useSelector(state => state.app);

  const flashWelcomeToast = () => {
    toast(
      <h3
        style={{
          whiteSpace: 'pre-wrap',
          color: 'black',
          fontFamily: 'Quicksand'
        }}
      >
        <div style={{ textAlign: 'center', }}>Welcome to my website!</div><br/>
        <div>Here you can learn more about me.</div><br/>
        <div>By navigating through the various sections you can discover:</div>
        <div style={{ textAlign: 'center', }}></div>
        <ol>
          <li>Projects and prototypes</li>
          <li>Articles and notes</li>
          <li>Hobbies</li>
        </ol>
      </h3>
    );
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

  const contactMap = [
    {
      text: profile?.phone,
      icon: <HiOutlinePhoneIncoming size={Math.min(width, 1400) * 0.04} />,
    },
    {
      text: profile?.email,
      icon: <MdOutlineEmail size={Math.min(width, 1400) * 0.04} />,
    },
    {
      text: profile?.address,
      icon: <PiAddressBook size={Math.min(width, 1400) * 0.04} />,
    },
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

  const contentGroupLabelStyle = {
    backgroundColor: 'lightgrey',
    width: '100%',
    paddingLeft: 20,
    boxSizing: 'border-box',
    borderTop: 'solid',
    borderBottom: 'solid',
    textAlign: 'center',
    height: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const navBarIsRow = width > 1000;

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
          padding: 20,
          textAlign: 'center',
          margin: 0,
          backgroundColor: 'silver',
        }}>Hi, I'm Steven Berrisford, <br></br>this is my website / portfolio.</h1>
        <Nav
          style={{
            width: '100%',
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
      <div ref={projectsSectionRef} style={{ ...contentGroupLabelStyle }}>
        <h2>Projects</h2>
      </div>
      <ContentGroup backgroundImageUrl={`url(${profile?.projects_background_link})`}>
        {projects && projects.map(item =>
          <GeneralComponent item={item} key={item.id} />
        )}
      </ContentGroup>
      <div ref={articlesSectionRef} style={{ ...contentGroupLabelStyle }}>
        <h2>Articles</h2>
      </div>
      <ContentGroup backgroundImageUrl={`url(${profile?.articles_background_link})`}>
        {articles && articles.map(item =>
          <GeneralComponent item={item} key={item.id} />
        )}
      </ContentGroup>
      <div ref={hobbiesSectionRef} style={{ ...contentGroupLabelStyle }}>
        <h2>Hobbies</h2>
      </div>
      <ContentGroup backgroundImageUrl={`url(${profile?.hobbies_background_link})`}>
        {hobbies && hobbies.map(item =>
          <GeneralComponent item={item} key={item.id} />
        )}
      </ContentGroup>
      <div ref={contactSectionRef} style={{ ...contentGroupLabelStyle }}>
        <h2>Contact Info</h2>
      </div>
      <ContentGroup backgroundImageUrl={`url(${profile?.profile_background_link})`}>
        {contactMap.map(item =>
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
      />
    </div>
  );
}

export default App;
