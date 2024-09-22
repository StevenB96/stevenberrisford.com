import React, { 
  useMemo,
  memo 
} from 'react';
import useResponsive from '../../../Hooks/useResponsive';


const BaseContentElement = ({ children }) => {
  const { isMobile, isTablet, width } = useResponsive();
  const isMax = width > 1400;

  const adjustedWidth = useMemo(() => {
    if (isMax) {
      return 1400 / 4 - 20;
    }

    return width / (isMobile ? 2 : (isTablet ? 3 : 4)) - 20;
  }, [isMax, isMobile, isTablet, width]);

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
    borderStyle: 'solid',
    borderWidth: 'max(0.4vw, 3px)',
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