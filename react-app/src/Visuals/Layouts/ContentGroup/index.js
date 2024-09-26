import {
  memo,
  forwardRef
} from 'react';
import { commonFunctions } from '../../../Hooks';

const ContentGroup = forwardRef(({
  children,
  value,
  blur = 2,
  contrast,
  brightness,
}, ref) => {
  const headerStyle = {
    backgroundColor: 'whitesmoke',
    width: '100%',
    boxSizing: 'border-box',
    borderTopStyle: 'solid',
    borderBottomStyle: 'solid',
    borderWidth: 'max(0.3vw, 2.25px)',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  };

  const filter = [];
  if (blur) {
    filter.push(`blur(${blur}px)`)
  }
  if (contrast) {
    filter.push(`contrast(${contrast})`)
  }
  if (brightness) {
    filter.push(`brightness(${brightness})`)
  }

  const backgroundStyle = {
    backgroundImage: `url(${value?.backgroundImageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    filter: filter.join(' '),
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
        <h2 style={{}}>{value?.title}</h2>
        {
          commonFunctions.getMenuIcon({
            iconName: value?.icon,
            isHighlighted: true
          })
        }
      </div>

      <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
        <div style={backgroundStyle} />

        <div style={contentContainerStyle}>
          <div style={childrenContainerStyle}>
            {children}
          </div>
        </div>
      </div>
    </>
  );
});

export default memo(ContentGroup);