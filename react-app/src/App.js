import {
  useEffect
} from 'react';
import {
  useDispatch,
} from 'react-redux';
import Profile from './Visuals/Profile';
import Articles from './Visuals/Articles';
import Hobbies from './Visuals/Hobbies';
import Projects from './Visuals/Projects';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {
  getProfileRequest,
  getContentRequest
} from './Redux/Actions/appActions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfileRequest());
    dispatch(getContentRequest());
  }, []);

  const tabStyle = {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 'min(6px, 0.5vw) 12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0,
  };

  const textStyle = {
    textAlign: 'center',
    whiteSpace: 'nowrap',
  }

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Tabs
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
        }}>
        <TabList
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            flexDirection: 'row',
            width: '100%',
            position: 'relative',
            bottom: 1,
          }}
        >
          <div
            style={{
              padding: '6px min(48px, 3vw)',
            }}
          >
            <h1
              style={{
                textAlign: 'center',
                whiteSpace: 'nowrap',
              }} >
              Steven Berrisford
            </h1>
          </div>
          <Tab style={tabStyle}>
            <h2 style={textStyle}>Profile</h2>
          </Tab>
          <Tab style={tabStyle}>
            <h2 style={textStyle}>Projects</h2>
          </Tab>
          <Tab style={tabStyle}>
            <h2 style={textStyle}>Articles</h2>
          </Tab>
          <Tab style={tabStyle}>
            <h2 style={textStyle}>Hobbies</h2>
          </Tab>
        </TabList>
        <div style={{
          width: '100%',
          backgroundColor: '#2B61AA'
        }}>
          <TabPanel>
            <Profile />
          </TabPanel>
          <TabPanel>
            <Projects />
          </TabPanel>
          <TabPanel>
            <Articles />
          </TabPanel>
          <TabPanel>
            <Hobbies />
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
}

export default App;
