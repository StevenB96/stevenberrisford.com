import React, { useState } from 'react';
import { MdOpenInFull } from 'react-icons/md';
import BaseOptionsButton from '../../Layouts/BaseOptionsButton';
import useResponsive from '../../../Hooks/useResponsive';

const OpenChatElementButton = React.memo(({ onClick }) => {
  const [isHighlighted, setIsHighlighted] = useState(false);
  const { isTablet, isMobile } = useResponsive();

  const containerStyle = {
    // Flex Container Properties
    display: 'flex',
    flexDirection: (isTablet || isMobile) ? 'row-reverse' : 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    // Layout Spacing
    gap: 5,
  };

  const textStyle = {
    margin: 0,
    color: isHighlighted ? 'black' : '#555555',
    transition: 'color 0.1s ease-in-out',
  };

  return (
    <BaseOptionsButton
      onClick={onClick}
      setIsHighlighted={setIsHighlighted}
      styleOveride={{
        position: 'fixed',
        bottom: 10,
        right: 10,
        zIndex: 3,
      }}
    >
      <div style={containerStyle}>
        <h3 style={textStyle}>Ask My Bot</h3>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%' }}>
          <MdOpenInFull size={'max(3vw, 30px)'} color={isHighlighted ? 'black' : '#555555'} />
        </div>
      </div>
    </BaseOptionsButton>
  );
});

export default OpenChatElementButton;