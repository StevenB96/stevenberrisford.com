import {
  useEffect,
  useState,
} from 'react';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import Profile from './Visuals/Profile';
import Header from './Visuals/Header';
import Footer from './Visuals/Footer';
import ContentTab from './Visuals/ContentTab';
import {
  Tabs,
  TabPanel,
} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {
  getProfileRequest,
  getContentRequest
} from './Redux/Actions/appActions';

function App() {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState(0);
  const profile = useSelector(state => state.app.profile);

  const contentTypes = [
    'projects',
    'articles',
    'hobbies'
  ];

  const handleTabSelect = (index) => {
    setActiveTab(index);
  };

  useEffect(() => {
    dispatch(getProfileRequest());
    dispatch(getContentRequest());
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        backgroundImage: `url("${profile?.background_image_link}")`,
        backgroundSize: 'cover',
        backgroundRepeat: 'repeat-y',
        backgroundPosition: 'center top',
        minHeight: '100vh',
      }} >
      <Tabs
        selectedIndex={activeTab}
        onSelect={(index) => handleTabSelect(index)}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          width: '100%',
          minHeight: '70vh',
        }}>
        <Header
          activeTab={activeTab}
          handleTabSelect={handleTabSelect}
        />
        <div style={{
          width: '100%',
        }}>
          <TabPanel selected={activeTab === 0}>
            <Profile />
          </TabPanel>
          {
            contentTypes.map((contentType, index) => {
              return (
                <TabPanel
                  selected={activeTab === index + 1}
                  key={index}
                >
                  <ContentTab
                    contentType={contentType}
                  />
                </TabPanel>
              )
            })
          }
        </div>
      </Tabs>
      <Footer />
    </div>
  );
}

export default App;
