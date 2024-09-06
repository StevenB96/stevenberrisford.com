import { forwardRef } from 'react';
import {
  useWindowSize,
} from '@react-hook/window-size';
import {
  IoCloseCircleOutline
} from "react-icons/io5";

import env from '../../../env';

const AboutMeOverlay = forwardRef(({
  setIsAboutModalOpen,
  profile,
}, ref) => {
  const [width] = useWindowSize();
  const isMobile = width < (env.MOBILE_WIDTH_BREAKPOINT || 600);
  const isTablet = !isMobile && width < (env.TABLET_WIDTH_BREAKPOINT || 1000);

  return (
    <div
      ref={ref}
      style={{
        position: 'absolute',
        top: '6vw',
        left: '50%',
        transform: 'translate(-50%, 0%)',
        zIndex: 2,
        display: 'flex',
        borderRadius: 20,
        border: 'solid',
        borderWidth: 'max(0.4vw, 3px)',
        width: width / 1.2,
        maxWidth: 1400 / 1.2,
        flexDirection: 'column',
        backgroundColor: 'whitesmoke',
        padding: 10,
      }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        <button
          onClick={() => setIsAboutModalOpen(false)}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '50%',
          }}>
          <IoCloseCircleOutline size={'max(5vw, 50px)'} />
        </button>

      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: isMobile ? 'center' : 'flex-start',
          flexDirection: isMobile ? 'column' : 'row',
          gap: 20,
          padding: 20,
        }}
      >
        <img
          src={profile?.profile_picture_link}
          alt={profile?.profile_picture_link}
          style={{
            width: '30%',
            aspectRatio: 1,
            objectFit: 'cover',
            borderRadius: '50%',
            backgroundColor: '#FFFFFF',
            border: 'solid',
            borderWidth: 'max(0.4vw, 3px)',
            boxShadow:
              `1px 1px 1px rgba(0,0,0,0.08),` +
              `2px 2px 2px rgba(0,0,0,0.08),` +
              `3px 3px 3px rgba(0,0,0,0.08),` +
              `4px 4px 4px rgba(0,0,0,0.08),` +
              `16px 16px 16px rgba(0,0,0,0.08)`,
          }}
        />
        <h3
          style={{
            whiteSpace: 'pre-wrap',
            wordWrap: 'break-word',
            width: isMobile ? '100%' : '70%',
            textAlign: 'left',
          }}
        >
          {profile.description}
        </h3>
      </div>
    </div>
  );
});

export default AboutMeOverlay;