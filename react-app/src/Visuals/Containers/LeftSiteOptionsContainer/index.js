import {
  memo
} from 'react';
import {
  useSelector
} from 'react-redux';
import {
  ProfileButton,
  DownloadCVButton,
} from '../../Buttons';
import useResponsive from '../../../Hooks/useResponsive';

const LeftSiteOptionsContainer = ({
  handleSetModal,
  modalOpen
}) => {
  // Accessing application state from Redux store
  const {
    profile,
  } = useSelector(state => state.app);

  const {
    isTablet,
    isMobile
  } = useResponsive();

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
        onClick={() => handleSetModal(modalOpen === 'profile' ? null : 'profile')}
      />
      <DownloadCVButton
        fileName="CV"
        fileUrl={profile?.cv_link}
      />
    </div>
  );
};

export default memo(LeftSiteOptionsContainer);
