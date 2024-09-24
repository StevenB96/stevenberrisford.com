import {
  memo
} from 'react';
import {
  SupportButton,
} from '../../Buttons';
import useResponsive from '../../../Hooks/useResponsive';

const RightSiteOptionsContainer = ({
  modalOpen,
  handleSetModal
}) => {
  const {
    isTablet,
    isMobile
  } = useResponsive();

  return (
    <div
      style={{
        top: 5,
        right: 5,
        position: 'fixed',
        zIndex: 3,
        display: 'flex',
        flexDirection: (isTablet || isMobile) ? 'column' : 'row',
        gap: 5,
      }}>
      <SupportButton
        onClick={() => handleSetModal(modalOpen === 'support' ? null : 'support')}
      />
    </div>
  );
};

export default memo(RightSiteOptionsContainer);
