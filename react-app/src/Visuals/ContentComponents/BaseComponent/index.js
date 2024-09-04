import React, { useMemo } from 'react';
import {
  useWindowSize,
} from '@react-hook/window-size';
import env from '../../../env';

const BaseComponent = ({ children }) => {
  const [width] = useWindowSize();

  // Destructure environment variables if necessary
  const mobileBreakpoint = env.MOBILE_WIDTH_BREAKPOINT || 600;

  // Check device conditions
  const isMobile = width < mobileBreakpoint;
  const isTablet = !isMobile && width < (env.TABLET_WIDTH_BREAKPOINT || 1000);
  const isMax = width > 1400;

  // Calculate adjusted width
  const adjustedWidth = useMemo(() => {
    if (isMax) {
      return 1400 / 3 - 40;
    }

    return width / (isMobile ? 1 : (isTablet ? 2 : 3)) - 40;
  }, [isMax, isMobile, width]);

  // Define styles
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
    border: 'solid',
    borderRadius: 20,
    backgroundColor: 'white',
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

export default BaseComponent;