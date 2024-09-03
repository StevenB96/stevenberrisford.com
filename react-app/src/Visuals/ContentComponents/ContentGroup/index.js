import {
  forwardRef,
} from 'react';
import {
  FaArrowTurnDown,
} from "react-icons/fa6";

const ContentGroup = forwardRef(({
  children,
  backgroundImageUrl,
  title,
}, ref) => {

  const contentGroupLabelStyle = {
    backgroundColor: 'lightgrey',
    width: '100%',
    paddingLeft: 20,
    boxSizing: 'border-box',
    borderTop: 'solid',
    borderBottom: 'solid',
    textAlign: 'center',
    height: 150,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <>
      <div
        ref={ref}
        style={{ ...contentGroupLabelStyle }}
      >
        <h2 style={{ margin: 5, marginTop: 0, }}>{title}</h2><FaArrowTurnDown />
      </div>
      <div style={{
        backgroundImage: backgroundImageUrl,
        width: '100%',
        objectFit: 'cover',
        backgroundSize: '100% auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          width: '100%',
          maxWidth: 1400,
        }}>
          {children}
        </div>
      </div>
    </>
  );
});

export default ContentGroup;