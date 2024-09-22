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
  const { isTablet, isMobile, width } = useResponsive();

  return (
    <div
      style={{
        top: 10,
        left: 10,
        position: 'fixed',
        zIndex: 3,
        display: 'flex',
        flexDirection: (isTablet || isMobile) ? 'column' : 'row',
        gap: width * 0.01,
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
