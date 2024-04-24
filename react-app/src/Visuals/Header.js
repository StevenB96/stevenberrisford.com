import {
  Tab,
  TabList,
} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function Header({
  activeTab,
  handleTabSelect,
}) {
  const tabs = [
    'Profile',
    'Projects',
    'Articles',
    'Hobbies'
  ];

  const tabStyle = {
    justifyContent: 'center',
    alignItems: 'center',
    padding: '6px min(68px, 3vw)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0,
    boxSizing: 'border-box',
    border: 'solid',
    borderBottom: 'none',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  };

  const textStyle = {
    textAlign: 'center',
    whiteSpace: 'nowrap',
  }

  return (
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
        minHeight: '10vh',
        boxShadow: 'rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px',
      }}
    >
      <div
        style={{
          padding: '6px min(68px, 3vw)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1
          style={{
            textAlign: 'center',
            whiteSpace: 'pre-wrap',
          }} >
            {'Steven\nBerrisford'}
        </h1>
      </div>
      {
        tabs.map((item, index) => {
          return (
            <Tab
              key={index}
              style={{
                ...tabStyle,
                borderColor: activeTab === index ? '#000000' : 'transparent',
                backgroundColor: activeTab === index ? '#FFFFFF' : 'initial',
              }}
              onClick={() => handleTabSelect(index)}
            >
              <h2 style={textStyle}>{item}</h2>
            </Tab>
          );
        }
        )
      }
    </TabList>
  );
}

export default Header;
