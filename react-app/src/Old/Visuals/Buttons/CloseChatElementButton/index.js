import React, { useState } from 'react';
import { MdCloseFullscreen } from 'react-icons/md';

const CloseChatElementButton = React.memo(({ onClick }) => {
  const [isHighlighted, setIsHighlighted] = useState(false);

  const containerStyle = {
    // Positioning Properties
    position: 'absolute',
    top: 0,
    left: 0,
    transform: 'translate(-50%, -50%)',
    // Sizing Properties
    width: 'calc(max(3vw, 30px) + 10px)',
    aspectRatio: 1,
    // Background and Appearance
    backgroundColor: 'whitesmoke',
    borderStyle: 'solid',
    borderWidth: 'max(0.3vw, 2.25px)',
    borderColor: 'black',
    borderRadius: '50%',
    // Layout Properties
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // Box Model Properties
    padding: 0,
  };

  return (
    <button
      onClick={onClick}
      onMouseOver={() => setIsHighlighted(true)}
      onMouseOut={() => setIsHighlighted(false)}
      style={containerStyle}
    >
      <MdCloseFullscreen size={'65%'} color={isHighlighted ? 'black' : '#555555'} />
    </button>
  );
});

export default CloseChatElementButton;