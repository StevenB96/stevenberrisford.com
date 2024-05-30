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
import {
  PiListBold
} from "react-icons/pi";
import ProjectComponent from './Visuals/ProjectComponent';
import PdfComponent from './Visuals/PdfComponent';
import YoutubeComponent from './Visuals/YoutubeComponent';
import Profile from './Visuals/Profile';
import {
  getProfileRequest,
  getContentRequest
} from './Redux/Actions/appActions';

function App() {
  const profileSectionRef = useRef(null);
  const projectsSectionRef = useRef(null);
  const articlesSectionRef = useRef(null);
  const hobbiesSectionRef = useRef(null);

  const [width, height] = useWindowSize();

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
    minWidth: 500,
    width: '70%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  }

  const navBarIsRow = width > 600;

  const ListToggle = ({ }) => {
    return (
      <div style={{
        aspectRatio: 1,
        height: 50,
        backgroundColor: 'lightGrey',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        border: 'solid',
      }} >
        <PiListBold />
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', }}>
      <h1>My name is Steven Berrisford, <br></br>this is my website / portfolio</h1>
      {
        navBarIsRow ?
          <Nav
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              width: '70%',
              minWidth: 'calc(100% - 80px)',
            }}
          >
            <Nav.Item onClick={() => scrollToSection(profileSectionRef)}>
              <h2>Profile</h2>
            </Nav.Item>
            <Nav.Item onClick={() => scrollToSection(projectsSectionRef)}>
              <h2>Projects</h2>
            </Nav.Item>
            <Nav.Item onClick={() => scrollToSection(articlesSectionRef)}>
              <h2>Articles</h2>
            </Nav.Item>
            <Nav.Item onClick={() => scrollToSection(hobbiesSectionRef)}>
              <h2>Hobbies</h2>
            </Nav.Item>
          </Nav>
          :
          <Nav
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
              width: '70%',
              minWidth: 'calc(100% - 80px)',
            }}
          >
            {
              !navBarIsRow &&
              (
                <Nav.Item
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}
                  onClick={() => scrollToSection(profileSectionRef)}
                >
                  <ListToggle />
                </Nav.Item>
              )
            }
            <Nav.Item onClick={() => scrollToSection(profileSectionRef)}>
              <h2>Profile</h2>
            </Nav.Item>
            <Nav.Item onClick={() => scrollToSection(projectsSectionRef)}>
              <h2>Projects</h2>
            </Nav.Item>
            <Nav.Item onClick={() => scrollToSection(articlesSectionRef)}>
              <h2>Articles</h2>
            </Nav.Item>
            <Nav.Item onClick={() => scrollToSection(hobbiesSectionRef)}>
              <h2>Hobbies</h2>
            </Nav.Item>
          </Nav>
      }
      <div ref={profileSectionRef} style={{ ...contentGroupStyle }}>
        {profile &&
          <Profile profile={profile} />
        }
      </div>
      <h2 ref={projectsSectionRef}>Projects</h2>
      <div style={{ ...contentGroupStyle }}>
        {projects && projects.map(item =>
          <ProjectComponent key={item.id} project={item} />
        )}
      </div>
      <h2 ref={articlesSectionRef}>Articles</h2>
      <div style={{ ...contentGroupStyle }}>
        {articles && articles.map(item =>
          <PdfComponent key={item.id} article={item} />
        )}
      </div>
      <h2 ref={hobbiesSectionRef}>Hobbies</h2>
      <div style={{ ...contentGroupStyle }}>
        {hobbies && hobbies.map(item =>
          <YoutubeComponent key={item.id} hobby={item} />
        )}
      </div>
    </div>
  );
}

export default App;
