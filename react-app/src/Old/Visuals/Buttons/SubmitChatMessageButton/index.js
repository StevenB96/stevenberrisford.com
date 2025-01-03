import React, { useState } from 'react';
import { MdSend } from 'react-icons/md';

const SubmitChatMessageButton = React.memo(({ currentInput, setMessages }) => {
  const [isHighlighted, setIsHighlighted] = useState(false);
  const handleMouseOver = () => setIsHighlighted(true);
  const handleMouseOut = () => setIsHighlighted(false);

  const isClickable = isHighlighted && currentInput;

  const buttonStyle = {
    // Background and Appearance
    backgroundColor: 'whitesmoke',
    borderStyle: 'solid',
    borderWidth: 'max(0.3vw, 2.25px)',
    borderColor: isClickable ? 'black' : '#555555',
    borderRadius: '50%',
    // Layout Properties
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // Sizing Properties
    height: 'max(3vw, 20px)',
    aspectRatio: 1,
    // Box Model Properties
    boxSizing: 'border-box',
    cursor: isClickable ? undefined : 'not-allowed'
  };

  return (
    <button
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      style={buttonStyle}
      onClick={setMessages}
    >
      <MdSend
        size={'max(1.5vw, 10px)'}
        color={isClickable ? 'black' : '#555555'}
      />
    </button>
  );
});

export default SubmitChatMessageButton;