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
      return 1400 / 4 - 40;
    }

    return width / (isMobile ? 2 : (isTablet ? 3 : 4)) - 40 - 1;
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
    padding: 20,
    margin: 20,
  };

  return (
    <div style={containerStyle}>
      {children}
    </div>
  );
};

export default memo(BaseContentElement);