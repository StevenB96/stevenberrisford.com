import Profile from './Profile';
import Tab from './Tab';
import {
  TabPanel,
} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function Tabs({
  activeTab
}) {
  const contentTypes = [
    'projects',
    'articles',
    'hobbies'
  ];

  return (
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
              <Tab
                contentType={contentType}
              />
            </TabPanel>
          )
        })
      }
    </div>
  );
}

export default Tabs;
