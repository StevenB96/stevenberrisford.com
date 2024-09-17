import {
  memo,
} from 'react';
import useResponsive from '../../../Hooks/useResponsive';

const BaseOptionsButton = ({
  children,
  onClick,
}) => {
  const { width, isTablet, isMobile } = useResponsive();

  return (
    <button
      onClick={onClick}
      style={{
        padding: width * ((isTablet || isMobile) ? 0.015 : 0.01),
        borderRadius: 15,
        borderStyle: 'solid',
        borderWidth: 'max(0.4vw, 3px)',
        backgroundColor: 'whitesmoke',
      }}
    >
      {children}
    </button>
  );
};

export default BaseOptionsButton;