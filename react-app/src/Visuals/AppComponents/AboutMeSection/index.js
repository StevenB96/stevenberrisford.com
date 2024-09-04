import {
  useState,
} from 'react';
import {
  useWindowSize,
} from '@react-hook/window-size';
import {
  CgProfile
} from "react-icons/cg";
import {
  IoCloseCircleOutline
} from "react-icons/io5";

import env from '../../../env';

const AboutMeOverlay = ({ setIsOverlayOpen, profile }) => {
  const [width] = useWindowSize();
  const isMobile = width < (env.MOBILE_WIDTH_BREAKPOINT || 600);
  const isTablet = !isMobile && width < (env.TABLET_WIDTH_BREAKPOINT || 1000);

  return (
    <div style={{
      position: 'fixed',
      top: '6vw',
      left: '50%',
      transform: 'translate(-50%, 0%)',
      zIndex: 3,
      display: 'flex',
      borderRadius: 20,
      border: 'solid',
      width: width / 1.5,
      maxWidth: 1400 / 1.5,
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
          onClick={() => setIsOverlayOpen(false)}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '50%',
          }}>
          <IoCloseCircleOutline size={Math.min(60, width / 20)} />
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
        onClick={() => setIsOverlayOpen(true)}
      >
        <img
          src={profile?.profile_picture_link}
          alt={profile?.profile_picture_link}
          style={{
            width: '35%',
            aspectRatio: 1,
            objectFit: 'cover',
            borderRadius: '50%',
            backgroundColor: '#FFFFFF',
            border: 'solid',
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
            width: isMobile ? '100%' : '65%',
            textAlign: 'left',
          }}
        >
          {profile.description}
        </h3>
      </div>
    </div>
  );
}

const AboutMeSection = ({ profile }) => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [width] = useWindowSize();
  const isMobile = width < (env.MOBILE_WIDTH_BREAKPOINT || 600);

  return (
    <>
      <button
        style={{
          top: '1vw',
          left: '1vw',
          position: 'fixed',
          zIndex: 2,
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          gap: isMobile ? 0 : 20,
          paddingLeft: 15,
          paddingRight: 15,
          paddingBottom: isMobile ? 15 : 0,
          borderRadius: 15,
          border: 'solid',
          backgroundColor: 'whitesmoke',
        }}
        onClick={() => setIsOverlayOpen(true)}
      >
        <h3>About Me</h3>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '50%',
        }}>
          <CgProfile size={Math.min(40, width / 30)} />
        </div>
      </button>
      {isOverlayOpen && (
        <AboutMeOverlay
          setIsOverlayOpen={setIsOverlayOpen}
          profile={profile}
        />
      )}
    </>
  );
};

export default AboutMeSection;