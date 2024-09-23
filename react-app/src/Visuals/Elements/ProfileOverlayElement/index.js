import { 
  forwardRef,
} from 'react';
import useResponsive from '../../../Hooks/useResponsive';
import {CloseProfileButton} from '../../Buttons';

const ProfileOverlayElement = forwardRef(({
  userSetIsAboutModalOpen,
  profile,
}, ref) => {
  const { isMobile, width } = useResponsive();

  const containerStyle = {
    position: 'absolute',
    top: '6vw',
    left: '50%',
    transform: 'translate(-50%, 0%)',
    zIndex: 2,
    display: 'flex',
    borderRadius: 20,
    borderStyle: 'solid',
    borderWidth: 'max(0.3vw, 2.25px)',
    boxSizing: 'border-box',
    width: width / 1.2,
    maxWidth: 1400 / 1.2,
    flexDirection: 'column',
    backgroundColor: 'whitesmoke',
    padding: 10,
  }

  const imageStyle = {
    width: '25%',
    minWidth: 150,
    aspectRatio: 1,
    objectFit: 'cover',
    borderRadius: '50%',
    backgroundColor: '#FFFFFF',
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 'max(0.3vw, 2.25px)',
    boxSizing: 'border-box',
    boxShadow:
      `1px 1px 1px rgba(0,0,0,0.08),` +
      `2px 2px 2px rgba(0,0,0,0.08),` +
      `3px 3px 3px rgba(0,0,0,0.08),` +
      `4px 4px 4px rgba(0,0,0,0.08),` +
      `16px 16px 16px rgba(0,0,0,0.08)`,
  }

  return (
    <div
      ref={ref}
      style={containerStyle}>
      <CloseProfileButton 
        onClick={userSetIsAboutModalOpen}
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: isMobile ? 'center' : 'flex-start',
          flexDirection: isMobile ? 'column' : 'row',
          gap: 10,
          padding: 10,
        }}
      >
        <img
          src={profile?.profile_picture_link}
          alt={profile?.profile_picture_link}
          style={imageStyle}
        />
        <h3
          style={{
            whiteSpace: 'pre-wrap',
            wordWrap: 'break-word',
            width: isMobile ? '100%' : '70%',
            textAlign: 'left',
            color: 'black',
            marginTop: isMobile ? undefined : 'max(4vw, min(40px))',
          }}
        >
          {profile.description}
        </h3>
      </div>
    </div>
  );
});

export default ProfileOverlayElement;