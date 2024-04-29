import {
  useSelector
} from 'react-redux';


function Header({
  activeTab,
  handleTabSelect,
}) {
  const profile = useSelector(state => state.app.profile);

  const tabs = [
    'Profile',
    'Projects',
    'Articles',
    'Hobbies'
  ];

  const headerContainerStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    userSelect: 'none',
    borderBottom: 'solid',
    boxSizing: 'border-box',
    backgroundColor: '#2B61AA',
    minHeight: '10vh',
    boxShadow: 'rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px',
  }

  const headerLineStyles = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 'min(30px, 3vw)',
  }

  const tabLabelsStyles = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    boxSizing: 'border-box',
    width: 'min(900px, 90vw)',
    padding: 'min(30px, 3vw)',
    gap: 'min(30px, 3vw)',
    flex: 1,
  }

  const headerNameStyles = {
    padding: '6px min(68px, 3vw)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

  const tabLabelStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    border: 'solid',
    borderRadius: 'min(30px, 3vw)',
    paddingLeft: 'min(10px, 1vw)',
    paddingRight: 'min(10px, 1vw)',
    flex: 1,
  };

  const textStyle = {
    textAlign: 'center',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  }

  return (
    <div
      style={headerContainerStyles}
    >
      <div
        style={headerLineStyles}
      >
        <img
          src={profile?.profile_picture_link}
          alt={profile?.profile_picture_link}
          style={{
            height: 'min(150px, 15vw)',
            aspectRatio: 1,
            objectFit: 'cover',
            borderRadius: '50%',
            backgroundColor: '#FFFFFF',
            border: 'solid',
          }} />
        <div
          style={{
            ...headerNameStyles,
          }}
        >
          <h1
            style={{
              textAlign: 'center',
              whiteSpace: 'pre-wrap',
              textDecoration: 'underline',
              margin: 0,
            }} >
            {profile?.name}
          </h1>
        </div>
      </div>
      <div
        style={tabLabelsStyles}
      >
        {
          tabs.map((item, index) => {
            return (
              <div
                key={index}
                style={{
                  ...tabLabelStyles,
                  transitionProperty: 'background-color',
                  transitionDuration: '0.5s',
                  backgroundColor: '#FFFFFF',
                  textDecoration: activeTab === index ? 'underline' : null,
                }}
                onClick={() => handleTabSelect(index)}
              >
                <h2 style={{
                  ...textStyle,
                }}>
                  {item}
                </h2>
              </div>
            );
          }
          )
        }
      </div>
    </div>
  );
}

export default Header;
