import {
  useEffect,
  useState,
} from 'react';
import {
  useDispatch,
  useSelector
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
  const [activeTab, setActiveTab] = useState(0);
  const profile = useSelector(state => state.app.profile);

  const handleTabSelect = (index) => {
    setActiveTab(index);
  };

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
    bottom: -3,
    boxSizing: 'border-box',
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
        justifyContent: 'flex-start',
        flexDirection: 'column',
        backgroundImage: `url("${profile?.background_image_link}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}>
      <Tabs
        onSelect={(index) => handleTabSelect(index)}
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
            justifyContent: 'center',
            flexDirection: 'row',
            width: '100%',
            position: 'relative',
            userSelect: 'none',
            borderBottom: 'solid',
            boxSizing: 'border-box',
            backgroundColor: '#2B61AA',
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
              <u>Steven Berrisford</u>
            </h1>
          </div>
          <Tab
            style={{
              ...tabStyle,
              border: 'solid',
              borderBottom: 'none',
              borderColor: activeTab === 0 ? '#000000' : 'transparent',
              backgroundColor: activeTab === 0 ? '#FFFFFF' : 'initial',
            }}
          >
            <h2 style={textStyle}>Profile</h2>
          </Tab>
          <Tab
            style={{
              ...tabStyle,
              border: 'solid',
              borderBottom: 'none',
              borderColor: activeTab === 1 ? '#000000' : 'transparent',
              backgroundColor: activeTab === 1 ? '#FFFFFF' : 'initial',
            }}
          >
            <h2 style={textStyle}>Projects</h2>
          </Tab>
          <Tab
            style={{
              ...tabStyle,
              border: 'solid',
              borderBottom: 'none',
              borderColor: activeTab === 2 ? '#000000' : 'transparent',
              backgroundColor: activeTab === 2 ? '#FFFFFF' : 'initial',
            }}
          >
            <h2 style={textStyle}>Articles</h2>
          </Tab>
          <Tab
            style={{
              ...tabStyle,
              border: 'solid',
              borderBottom: 'none',
              borderColor: activeTab === 3 ? '#000000' : 'transparent',
              backgroundColor: activeTab === 3 ? '#FFFFFF' : 'initial',
            }}
          >
            <h2 style={textStyle}>Hobbies</h2>
          </Tab>
        </TabList>
        <div style={{
          width: '100%',
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
      <div style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: 'min(100px, 5vw)',
        textAlign: 'left',
        whiteSpace: 'pre-wrap',
        userSelect: 'none',
        borderTop: 'solid',
        backgroundColor: '#2B61AA',
        flex: 1,
      }}>
        <h3>{'Email:\n'}{profile?.email}</h3>
        <h3>{'Phone number:\n'}{profile?.phone}</h3>
        <h3>{'Address:\n'}{profile?.address}</h3>
      </div>
    </div>
  );
}

export default App;
