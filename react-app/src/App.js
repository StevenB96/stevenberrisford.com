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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  };

  const textStyle = {
    textAlign: 'center',
    whiteSpace: 'nowrap',
  }

  return (
    <div>
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
            maxWidth: 1200,
          }}
        >
          <h1 style={{
            ...textStyle,
            marginLeft: 20,
            marginRight: 20,
            userSelect: 'none',
          }}>Steven Berrisford</h1>
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
      </Tabs>
    </div>
  );
}

export default App;
