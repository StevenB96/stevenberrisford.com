import React, { useMemo } from 'react';
import {
  useWindowSize,
} from '@react-hook/window-size';
import env from '../../../env';

const BaseComponent = ({ children }) => {
  const [width] = useWindowSize();

  // Destructure environment variables if necessary
  const mobileBreakpoint = env.MOBILE_WIDTH_BREAKPOINT || 1000;

  // Check device conditions
  const isMobile = width > mobileBreakpoint;
  const isMax = width > 1400;

  // Calculate adjusted width
  const adjustedWidth = useMemo(() => {
    if (isMax) {
      return 1400 / 3 - 40;
    }

    return width / (isMobile ? 3 : 2) - 40;
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