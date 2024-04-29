import {
  useEffect,
  useState,
} from 'react';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import Header from './Visuals/Header';
import Tabs from './Visuals/Tabs';
import Footer from './Visuals/Footer';
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

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'column',
        backgroundImage: `url("${profile?.background_image_link}")`,
        backgroundSize: 'cover',
        backgroundRepeat: 'repeat-y',
        backgroundPosition: 'center top',
        minHeight: '100vh',
      }} >
      <Header
        activeTab={activeTab}
        handleTabSelect={handleTabSelect}
      />
      <Tabs activeTab={activeTab} />
      <Footer />
    </div>
  );
}

export default App;
