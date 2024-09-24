import React, { 
  useMemo,
  memo 
} from 'react';
import useResponsive from '../../../Hooks/useResponsive';


const BaseContentElement = ({ children }) => {
  const { isMobile, isTablet, width } = useResponsive();
  const isMax = width > 1400;

  const adjustedWidth = useMemo(() => {
    let adjustedWidth = null;

    if (isMax) {
      adjustedWidth = 1400 / 4 - 20;
    } else {
      adjustedWidth = width / (isMobile ? 2 : (isTablet ? 3 : 4)) - 20;
    }

    return Math.min(adjustedWidth - 1);
  }, [isMax, isMobile, isTablet, width]);

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
    borderStyle: 'solid',
    borderWidth: 'max(0.3vw, 2.25px)',
    borderRadius: 20,
    backgroundColor: 'whitesmoke',
    width: adjustedWidth,
    padding: 10,
    margin: 10,
  };

  return (
    <div style={containerStyle}>
      {children}
    </div>
  );
};

export default memo(BaseContentElement);