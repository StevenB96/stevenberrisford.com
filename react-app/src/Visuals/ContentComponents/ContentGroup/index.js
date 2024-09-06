import { forwardRef } from 'react';
import { FaArrowTurnDown } from "react-icons/fa6";

const ContentGroup = forwardRef(({
  children,
  backgroundImageUrl,
  title,
  blur,
}, ref) => {
  
  // Styles
  const headerStyle = {
    backgroundColor: 'whitesmoke',
    width: '100%',
    boxSizing: 'border-box',
    borderTop: 'solid',
    borderBottom: 'solid',
    borderWidth: 'max(0.4vw, 3px)',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
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
        <h2 style={{}}>{title}</h2>
        <FaArrowTurnDown size={'max(2vw, 20px)'} />
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