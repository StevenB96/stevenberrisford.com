import React, { useRef, useEffect } from 'react';

function ChatMessageElement({ message }) {
  const containerStyle = {
    // Layout Properties
    display: 'flex',
    flexDirection: 'row',
    justifyContent: message.author === 'chatbot' ? 'flex-start' : 'flex-end',
    // Box Model Properties
    boxSizing: 'border-box',
  };
  
  const textContainerStyle = {
    // Appearance Properties
    backgroundColor: 'silver',
    borderStyle: 'solid',
    borderWidth: 'max(0.3vw, 2.25px)',
    borderRadius: 10,
    // Box Model Properties
    boxSizing: 'border-box',
    padding: 5,
    // Sizing Properties
    maxWidth: '80%',
  };
  
  const textStyle = {
    // Text Properties
    margin: 0,
    wordWrap: 'break-word',
    whiteSpace: 'pre-wrap',
  };

  return (
    <div style={containerStyle}>
      <div style={textContainerStyle}>
        {message.author === 'chatbot' && <h2 style={textStyle}>My Bot</h2>}
        <h3 style={textStyle}>{message.text}</h3>
      </div>
    </div>
  );
}

function ChatMessageListElement({ messages }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const containerStyle = {
    // Flexbox Layout Properties
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    // Size Properties
    minWidth: '25vw',
    minHeight: `calc(25vh - 10px)`,
    maxHeight: `calc(50vh - 10px)`,
    // Overflow Management
    overflowY: 'scroll',
    overflowX: 'hidden',
    // Padding
    padding: messages.length > 0 ? '10px' : 0,
    // Appearance
    backgroundColor: 'whitesmoke',
  };

  return (
    <div style={containerStyle} ref={scrollRef}>
      {messages.map((message, index) => (
        <ChatMessageElement key={index} message={message} />
      ))}
    </div>
  );
}

export default ChatMessageListElement;