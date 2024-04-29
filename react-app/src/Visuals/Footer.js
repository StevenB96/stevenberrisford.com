import {
  useSelector,
} from 'react-redux';

function Footer() {
  const profile = useSelector(state => state.app.profile);

  const sections = [
    {
      title: 'Email:\n',
      value: profile?.email,
    },
    {
      title: 'Phone number:\n',
      value: profile?.phone,
    },
    {
      title: 'Address:\n',
      value: profile?.address,
    },
  ];

  const footerContainerStyles = {
    width: '100%',
    maxWidth: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: 'min(116px, 6vw)',
    textAlign: 'left',
    whiteSpace: 'pre-wrap',
    userSelect: 'none',
    borderTop: 'solid',
    backgroundColor: '#2B61AA',
    flex: 1,
    padding: 'min(30px, 3vw)',
    boxShadow: 'rgba(0, 0, 0, 0.09) 0px -2px 1px, rgba(0, 0, 0, 0.09) 0px -4px 2px, rgba(0, 0, 0, 0.09) 0px -8px 4px, rgba(0, 0, 0, 0.09) 0px -16px 8px, rgba(0, 0, 0, 0.09) 0px -32px 16px',
  }

  return (
    <div style={footerContainerStyles}>
      {
        sections.map((item, index) => {
          return (
            <div
              key={index}
              style={{
                borderLeft: 'solid',
                padding: '0px min(10px, 1vw) 0px  min(10px, 1vw)',
                borderWidth: 3,
              }}>
              <h2 style={{ margin: 0, }}>
                {item.title}
              </h2>
              <h3 style={{ margin: 0, }}>
                {item.value}
              </h3>
            </div>
          );
        })
      }
    </div>
  );
}

export default Footer;
