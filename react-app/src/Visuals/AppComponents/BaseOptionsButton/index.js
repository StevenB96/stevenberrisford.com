import React from 'react';
import useResponsive from '../../../Hooks/useResponsive';


const BaseOptionsButton = ({ 
  children, 
  onClick,
  isHighlighted = false,
  setIsHighlighted = (isHighlighted) => {},
}) => {
  const { width, isTablet, isMobile } = useResponsive();

  const handleMouseOver = () => setIsHighlighted(true);
  const handleMouseOut = () => setIsHighlighted(false);

  return (
    <button
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={onClick}
      style={{
        padding: width * (isTablet || isMobile ? 0.015 : 0.01),
        borderRadius: 15,
        borderStyle: 'solid',
        borderWidth: 'max(0.4vw, 3px)',
        borderColor: isHighlighted ? 'black' : 'darkgrey',
        backgroundColor: 'whitesmoke',
      }}
    >
      {children}
    </button>
  );
};

export default BaseOptionsButton;

