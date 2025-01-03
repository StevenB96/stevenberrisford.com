import {
  memo
} from 'react';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import {
  ProfileButton,
  DownloadCVButton,
} from '../../Buttons';
import useResponsive from '../../../Hooks/useResponsive';

import {
  setAppModalOpenRequest,
} from '../../../Redux/Actions/appActions';

const LeftSiteOptionsContainer = ({}) => {
  // Hook to access Redux dispatch function
  const dispatch = useDispatch();

  // Accessing application state from Redux store
  const {
    profile,
    appModalOpen
  } = useSelector(state => state.app);

  const {
    isTablet,
    isMobile
  } = useResponsive();

  const handleOnClick = () => {
    dispatch(
      setAppModalOpenRequest(appModalOpen === 'profile' ? null : 'profile')
    );
  }

  return (
    <div
      style={{
        top: 5,
        left: 5,
        position: 'fixed',
        zIndex: 3,
        display: 'flex',
        flexDirection: (isTablet || isMobile) ? 'column' : 'row',
        gap: 5,
      }}>
      <ProfileButton
        onClick={handleOnClick}
      />
      <DownloadCVButton
        fileName="CV"
        fileUrl={profile?.cv_link}
      />
    </div>
  );
};

export default memo(LeftSiteOptionsContainer);
