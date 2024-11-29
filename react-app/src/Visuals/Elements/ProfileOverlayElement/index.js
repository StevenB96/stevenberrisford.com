import {
  forwardRef,
} from 'react';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import useResponsive from '../../../Hooks/useResponsive';
import { CloseOverlayButton } from '../../Buttons';

import {
  setAppModalOpenRequest,
} from '../../../Redux/Actions/appActions';

const ProfileOverlayElement = forwardRef(({ }, ref) => {
  // Hook to access Redux dispatch function
  const dispatch = useDispatch();

  // Accessing application state from Redux store
  const {
    profile,
    appModalOpen
  } = useSelector(state => state.app);
  const { isMobile, isTablet, isHandHeld } = useResponsive();

  if (appModalOpen !== 'profile') return null;

  const handleOnClick = () => {
    dispatch(
      setAppModalOpenRequest(null)
    );
  }

  const containerStyle = {
    position: 'absolute',
    top: 100,
    left: '50%',
    transform: 'translate(-50%, 0%)',
    zIndex: 2,
    display: 'flex',
    borderRadius: 20,
    borderStyle: 'solid',
    borderWidth: 'max(0.3vw, 2.25px)',
    boxSizing: 'border-box',
    width: `calc(${isMobile ? 80 : isTablet ? 60 : 70}%)`,
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
    marginTop: isHandHeld ? undefined : 'max(4.5vw, 45px)',
  }

  return (
    <div
      ref={ref}
      style={containerStyle}>
      <CloseOverlayButton
        onClick={handleOnClick}
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: isHandHeld ? 'center' : 'flex-start',
          flexDirection: isHandHeld ? 'column' : 'row',
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
            width: isHandHeld ? '100%' : '70%',
            textAlign: 'left',
            color: 'black',
            marginTop: isHandHeld ? undefined : 'max(4.5vw, 45px)',
          }}
        >
          {profile.description}
        </h3>
      </div>
    </div>
  );
});

export default ProfileOverlayElement;