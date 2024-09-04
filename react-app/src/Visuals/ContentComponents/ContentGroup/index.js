import { forwardRef } from 'react';
import { FaArrowTurnDown } from "react-icons/fa6";
import env from '../../../env';

const ContentGroup = forwardRef(({
  children,
  backgroundImageUrl,
  title,
  blur,
}, ref) => {
  
  // Styles
  const headerStyle = {
    backgroundColor: 'white',
    width: '100%',
    padding: '20px 0',
    boxSizing: 'border-box',
    borderTop: 'solid',
    borderBottom: 'solid',
    textAlign: 'center',
    height: env.MENU_HEIGHT * 1 || 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    filter: blur ? `blur(${blur}px)` : 'none',
    zIndex: 0,
  };

  const contentContainerStyle = {
    width: '100%',
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const childrenContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    width: '100%',
    maxWidth: 1400,
  };

  return (
    <>
      <div ref={ref} style={headerStyle}>
        <h2 style={{ margin: 5, marginTop: 0 }}>{title}</h2>
        <FaArrowTurnDown />
      </div>

      <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
        <div style={backgroundStyle} />
        
        {/* Content Wrapper */}
        <div style={contentContainerStyle}>
          <div style={childrenContainerStyle}>
            {children}
          </div>
        </div>
      </div>
    </>
  );
});

export default ContentGroup;