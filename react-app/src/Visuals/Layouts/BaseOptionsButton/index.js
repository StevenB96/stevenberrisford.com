import React, {
  memo,
} from 'react';


const BaseOptionsButton = ({ 
  children, 
  onClick,
  setIsHighlighted,
  bgColour = false,
  padding = false,
}) => {
  const handleMouseOver = () => setIsHighlighted(true);
  const handleMouseOut = () => setIsHighlighted(false);

  return (
    <button
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={onClick}
      style={{
        padding: !!padding ? padding : 10,
        borderRadius: 15,
        borderStyle: 'solid',
        borderWidth: 'max(0.3vw, 2.25px)',
        boxSizing: 'border-box',
        backgroundColor: !!bgColour ? bgColour : 'whitesmoke',
      }}
    >
      {children}
    </button>
  );
};

export default memo(BaseOptionsButton);

