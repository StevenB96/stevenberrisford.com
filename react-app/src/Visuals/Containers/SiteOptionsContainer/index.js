import {
  memo
} from 'react';
import {
  ProfileButton,
  DownloadCVButton,
} from '../../Buttons';
import useResponsive from '../../../Hooks/useResponsive';

const SiteOptionsContainer = ({
  profile,
  userSetIsAboutModalOpen,
  isAboutModalOpen
}) => {
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
        onClick={userSetIsAboutModalOpen}
        isAboutModalOpen={isAboutModalOpen}
      />
      <DownloadCVButton
        fileName="CV"
        fileUrl={profile?.cv_link}
      />
    </div>
  );
};

export default memo(SiteOptionsContainer);
