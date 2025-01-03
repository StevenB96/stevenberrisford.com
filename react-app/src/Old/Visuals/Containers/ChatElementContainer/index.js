import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useResponsive } from '../../../Hooks';
import {
  CloseChatElementButton,
  OpenChatElementButton,
} from '../../Buttons';
import {
  ChatInputElement,
  ChatMessageListElement
} from '../../Elements';
import { getChatbotResponseRequest } from '../../../Redux/Actions/appActions';


const elementOffset = 10;

function ChatElementContainer() {
  const { isMobile, isTablet } = useResponsive();
  const dispatch = useDispatch();
  const { chatbotMessages } = useSelector(state => state.app);

  const [currentInput, setCurrentInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    dispatch(getChatbotResponseRequest('Clear chat history'));
  }, [isOpen]);

  const containerStyle = {
    // Box Model Properties
    boxSizing: 'border-box',
    // Border Properties
    borderStyle: 'solid',
    borderWidth: 'max(0.3vw, 2.25px)',
    // Positioning Properties
    position: 'fixed',
    bottom: elementOffset,
    right: elementOffset,
    zIndex: 3,
    // Size-related Properties
    width: `calc(${isMobile ? 80: isTablet ? 70 : 60 }% - ${elementOffset}px)`,
  };

  return (
    <div>
      {(!isOpen) ? (
        <OpenChatElementButton onClick={() => setIsOpen(true)} />
      ) : (
        <div style={containerStyle}>
          <CloseChatElementButton onClick={() => setIsOpen(false)} />
          <ChatMessageListElement messages={chatbotMessages} />
          <ChatInputElement
            currentInput={currentInput}
            setMessages={() => {
              if (currentInput) {
                dispatch(getChatbotResponseRequest(currentInput));
                setCurrentInput('');
              }
            }}
            setCurrentInput={(e) => setCurrentInput(e.target.value)}
          />
        </div>
      )}
    </div>
  )
};

export default ChatElementContainer;