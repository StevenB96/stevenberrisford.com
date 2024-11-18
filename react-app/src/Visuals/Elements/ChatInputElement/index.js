import React, { useRef } from 'react';
import { SubmitChatMessageButton } from '../../Buttons';

function ChatInputElement({
  currentInput,
  setMessages,
  setCurrentInput
}) {
  const textareaRef = useRef(null);
  const lineHeightString = 'max(3vw, 20px)';

  function calculateLineHeight(computedStyle) {
    let lineHeight = computedStyle.lineHeight;
    lineHeight = parseFloat(lineHeight);
    return lineHeight;
  }

  function calculateNumLines(textarea, lineHeight, value) {
    const scrollHeight = textarea.scrollHeight;
    let numberOfLines = Math.floor(scrollHeight / lineHeight);
    // Check the conditions for modifying the scrollHeight
    if (value.includes('\n')) {
      numberOfLines += 1;
    }
    return numberOfLines < 2 ? 2 : numberOfLines;
  }

  const autoResize = () => {
    const textarea = textareaRef.current;
    const value = textarea.value;
    textarea.style.height = 'auto';

    const textareaComputedStyle = window.getComputedStyle(textarea);
    const lineHeight = calculateLineHeight(textareaComputedStyle);
    const numLines = calculateNumLines(textarea, lineHeight, value);

    if (textarea) {
      textarea.style.height = `calc(${lineHeightString} * ${numLines} + 4px)`;
    }
  };

  const handleSetMessages = () => {
    setMessages();
    textareaRef.current.style.height = `calc(${lineHeightString} * 2 + 4px)`
  };

  const containerStyle = {
    // Background and Appearance
    backgroundColor: 'silver',
    // Border Properties
    borderTopStyle: 'solid',
    borderWidth: 'max(0.3vw, 2.25px)',
    // Box Model Properties
    boxSizing: 'border-box',
    // Layout Properties
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    // Spacing Properties
    padding: 10,
    gap: 10,
    // Size Properties
    width: '100%',
  };

  const textareaStyle = {
    // Flexbox Layout Properties
    flex: 1,
    // Size Properties
    height: `calc(${lineHeightString} * 2 + 4px)`,
    maxHeight: `calc(${lineHeightString} * 5 + 4px)`,
    // Box Model Properties
    boxSizing: 'border-box',
    // Border Properties
    borderStyle: 'solid',
    borderWidth: 'max(0.3vw, 2.25px)',
    borderColor: 'black',
    borderRadius: 10,
    // Text Properties
    lineHeight: lineHeightString,
    fontSize: 'calc(max(calc(4vw / (3 / 1.5)), calc(1.5 * 10px)) / 1.2)',
    fontWeight: 700,
    fontFamily: 'inherit',
    // Overflow and Resizing
    overflow: 'hidden',
    resize: 'none',
    // Text Wrapping
    whiteSpace: 'pre-wrap',
    wordWrap: 'break-word',
    // User Interaction
    userSelect: 'none',
  };

  return (
    <div style={containerStyle}>
      <textarea
        ref={textareaRef}
        style={textareaStyle}
        onInput={(e) => setCurrentInput(e)}
        onKeyDown={autoResize}
        value={currentInput}
      />
      <SubmitChatMessageButton
        currentInput={currentInput}
        setMessages={handleSetMessages}
      />
    </div>
  );
}

export default ChatInputElement;