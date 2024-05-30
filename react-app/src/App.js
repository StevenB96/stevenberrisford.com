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
import {
  PiListBold
} from "react-icons/pi";
import {
  FaArrowTurnUp
} from "react-icons/fa6";
import ProjectComponent from './Visuals/ProjectComponent';
import PdfComponent from './Visuals/PdfComponent';
import YoutubeComponent from './Visuals/YoutubeComponent';
import Profile from './Visuals/Profile';
import {
  getProfileRequest,
  getContentRequest
} from './Redux/Actions/appActions';

const ListToggle = ({ }) => {
  return (
    <div style={{
      aspectRatio: 1,
      height: 25,
      backgroundColor: 'grey',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '25%',
      border: 'solid',
      marginLeft: 10,
    }} >
      <PiListBold />
    </div>
  );
};

const NavBarRow = ({ navInputMap, scrollToSection }) => {
  const [highlightedItem, setHighlightedItem] = useState(null);

  return (
    <div
      style={{
        border: 'solid',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'lightgrey',
        borderRadius: 20,
        overflow: 'hidden',
      }}>
      {navInputMap.map((item, index) => (
        <Nav.Item
          onMouseOver={() => setHighlightedItem(index)}
          style={{
            display: 'flex',
            flex: 1,
            justifyContent: 'center',
            textDecoration: highlightedItem === index ?
              'underline' :
              'none',
            backgroundColor: highlightedItem === index ?
              'white' :
              'lightgrey',
          }}
          onClick={() => scrollToSection(item.ref)}>
          <h2>{item.title}</h2>
        </Nav.Item>
      ))}
    </div>
  );
}

const NavBarColumn = ({ navInputMap, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [highlightedItem, setHighlightedItem] = useState(null);
  const navItemStyle = { paddingLeft: 20, };

  return (
    <div
      style={{
        width: '100%',
        position: 'relative',
      }}>
      <Nav.Item
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          backgroundColor: 'lightgrey',
          border: 'solid',
          padding: 10,
          paddingRight: 20,
          paddingLeft: 20,
          boxSizing: 'border-box',
          borderRadius: 20,
          overflow: 'hidden',
        }}
      >
        <h2>Menu</h2>
        <div onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <ListToggle/>
        </div>
      </Nav.Item>
      {
        isMenuOpen &&
        (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            position: 'absolute',
            top: 'calc(100% - 2px)',
            left: '20px',
            width: 'calc(100% - 40px)',
            border: 'solid',
            boxSizing: 'border-box',
            borderRadius: 20,
            borderTopRightRadius: 0,
            borderTopLeftRadius: 0,
            overflow: 'hidden',
          }}>
            {
              navInputMap.map((item, index) => (
                <Nav.Item
                  onMouseOver={() => setHighlightedItem(index)}
                  style={{
                    ...navItemStyle,
                    backgroundColor: highlightedItem === index ?
                      'white' :
                      'lightgrey',
                    textDecoration: highlightedItem === index ?
                      'underline' :
                      'none'
                  }}
                  onClick={() => scrollToSection(item.ref)}>
                  <h2>{item.title}</h2>
                </Nav.Item>
              ))
            }
          </div>
        )
      }
    </div>
  );
}

const TopScrollElement = () => {
  return (
    <div
      onClick={
        () => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
      }
      style={{
        top: 0,
        position: 'fixed',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        backgroundColor: 'lightgrey',
        border: 'solid',
        borderTop: 0,
        borderBottomLeftRadius: '50%',
        borderBottomRightRadius: '50%',
      }}>
      <h6 style={{ margin: 5, }}>Scroll to top</h6><FaArrowTurnUp />
    </div>
  );
}

const ProfilePictureElement = ({ profile }) => {
  return (
    <img
      src={profile?.profile_picture_link}
      alt={profile?.profile_picture_link}
      style={{
        top: '1vw',
        left: '1vw',
        position: 'fixed',
        display: 'flex',
        height: 'min(150px, 20vw)',
        aspectRatio: 1,
        objectFit: 'cover',
        borderRadius: '50%',
        backgroundColor: '#FFFFFF',
        border: 'solid',
        boxShadow: '1px 1px 1px rgba(0, 0, 0, 0.08), 2px 2px 2px rgba(0, 0, 0, 0.08), 3px 3px 3px rgba(0, 0, 0, 0.08), 4px 4px 4px rgba(0, 0, 0, 0.08), 16px 16px 16px rgba(0, 0, 0, 0.08)',
      }} />
  );
}

function App() {
  const profileSectionRef = useRef(null);
  const projectsSectionRef = useRef(null);
  const articlesSectionRef = useRef(null);
  const hobbiesSectionRef = useRef(null);

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
    }
  ];

  const [width, height] = useWindowSize();
  const scrollY = useScrollPosition(5);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop - 20,
      behavior: "smooth",
    });
  };

  const dispatch = useDispatch();

  const {
    profile,
    projects,
    articles,
    hobbies,
  } = useSelector(state => state.app);

  useEffect(() => {
    dispatch(getProfileRequest());
    dispatch(getContentRequest());
  }, []);

  const contentGroupStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
  };

  const contentGroupLabelStyle = {
    backgroundColor: 'lightgrey',
    width: '100%',
    paddingLeft: 20,
    boxSizing: 'border-box',
    borderTop: 'solid',
    borderBottom: 'solid',
  };

  const navBarIsRow = width > 600;

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
        // backgroundColor: 'yellow',
      }}>
        <h1>My name is Steven Berrisford, <br></br>this is my website / portfolio</h1>
        <Nav
          style={{
            width: 'calc(100% - 40px)',
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
      <div style={{ ...contentGroupStyle, backgroundColor: 'green', }}>
        {projects && projects.map(item =>
          <ProjectComponent key={item.id} project={item} />
        )}
      </div>
      <div ref={articlesSectionRef} style={{ ...contentGroupLabelStyle }}>
        <h2>Articles</h2>
      </div>
      <div style={{ ...contentGroupStyle, backgroundColor: 'blue', }}>
        {articles && articles.map(item =>
          <PdfComponent key={item.id} article={item} />
        )}
      </div>
      <div ref={hobbiesSectionRef} style={{ ...contentGroupLabelStyle }}>
        <h2>Hobbies</h2>
      </div>
      <div style={{ ...contentGroupStyle, backgroundColor: 'orange', }}>
        {hobbies && hobbies.map(item =>
          <YoutubeComponent key={item.id} hobby={item} />
        )}
      </div>
      {scrollY > 20 && (
        <TopScrollElement />
      )}
      <ProfilePictureElement profile={profile} />
    </div>
  );
}

export default App;
