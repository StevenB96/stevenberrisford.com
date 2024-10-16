import {
  useEffect,
  useState,
  useRef
} from 'react';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import {
  MdSend,
  MdOpenInFull,
  MdCloseFullscreen,
} from "react-icons/md";
import useResponsive from '../../../Hooks/useResponsive';
import BaseOptionsButton from '../../Layouts/BaseOptionsButton';
import {
  getChatbotResponseRequest,
} from '../../../Redux/Actions/appActions';

const elementOffset = 10;

function Message({
  message
}) {
  const containerStyle = {
    // Layout Properties
    display: 'flex',
    flexDirection: 'row',
    justifyContent: message.author === 'chatbot' ? 'flex-start' : 'flex-end',
    // Box Model Properties
    boxSizing: 'border-box',
  }

  const textContainerStyle = {
    // Background and Appearance
    backgroundColor: 'silver',
    borderStyle: 'solid',
    borderWidth: 'max(0.3vw, 2.25px)',
    borderRadius: 10,
    // Box Model
    boxSizing: 'border-box',
    padding: 5,
    // Size Constraints
    maxWidth: '80%',
  }

  const textStyle = {
    margin: 0,
    wordWrap: 'break-word',
  }

  return (
    <div style={containerStyle}>
      <div style={textContainerStyle}>
        {(message.author === 'chatbot') && (
          <h2 style={textStyle}>Query Assistant</h2>
        )}
        <h3 style={textStyle}>{message.text}</h3>
      </div>
    </div>
  );
}

function MessageList({
  messages
}) {
  const scrollRef = useRef(null);

  useEffect(() => {
    // Scroll to bottom whenever messages change
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const hasMessages = Array.isArray(messages) && messages.length > 0;

  const containerStyle = {
    // Layout-related properties
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    // Size-related properties
    minWidth: '25vw',
    minHeight: `calc(25vh - ${elementOffset}px)`,
    maxHeight: `calc(50vh - ${elementOffset}px)`,
    // Overflow properties
    overflowY: 'scroll',
    overflowX: 'hidden',
    // Padding properties
    paddingTop: hasMessages ? 10 : 0,
    paddingBottom: hasMessages ? 10 : 0,
    paddingLeft: 10,
    paddingRight: 10,
    // Background and appearance
    backgroundColor: 'whitesmoke',
  }

  return (
    <div
      style={containerStyle}
      ref={scrollRef}
    >
      {
        messages.map(
          (
            message => <Message message={message} />
          )
        )
      }
    </div>
  );
}

function Button({
  currentInput,
  setMessages
}) {
  const [isHighlighted, setIsHighlighted] = useState(false);
  const handleMouseOver = () => setIsHighlighted(true);
  const handleMouseOut = () => setIsHighlighted(false);

  const isClickable = isHighlighted && currentInput;

  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      style={{
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
      }}
      onClick={setMessages}>
      <MdSend
        size={'max(1.5vw, 10px)'}
        color={isClickable ? 'black' : '#555555'}
      />
    </div>
  );
}

function ChatInput({
  currentInput,
  setMessages,
  setCurrentInput
}) {
  const containerStyle = {
    // Background and Appearance
    backgroundColor: 'silver',
    borderTopStyle: 'solid',
    borderWidth: 'max(0.3vw, 2.25px)',
    // Layout Properties
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // Spacing Properties
    padding: 10,
    gap: 10,
    // Box Model Properties
    boxSizing: 'border-box',
    // Size Properties
    width: '100%',
  }

  return (
    <div style={containerStyle}>
      <input style={{
        // Sizing Properties
        flex: 1,
        height: 'max(3vw, 20px)',
        // Background and Appearance
        borderStyle: 'solid',
        borderWidth: 'max(0.3vw, 2.25px)',
        borderColor: 'black',
        borderRadius: 10,
        fontFamily: 'inherit',
        // Box Model Properties
        padding: 10,
        boxSizing: 'border-box',
      }}
        onInput={setCurrentInput}
        value={currentInput}
      />
      <Button
        currentInput={currentInput}
        setMessages={setMessages} />
    </div>
  );
}

function CloseButton({ onClick }) {
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
  }

  return (
    <div
      onClick={onClick}
      onMouseOver={() => setIsHighlighted(true)}
      onMouseOut={() => setIsHighlighted(false)}
      style={containerStyle}>
      <MdCloseFullscreen
        size={'75%'}
        color={isHighlighted ? 'black' : '#555555'}
      />
    </div>
  );
}

function OpenButton({ onClick }) {
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
  }

  const textStyle = {
    margin: 0,
    color: isHighlighted ? 'black' : '#555555',
    transition: 'color 0.1s ease-in-out',
  }

  return (
    <BaseOptionsButton
      onClick={onClick}
      setIsHighlighted={setIsHighlighted}
      styleOveride={{
        position: 'fixed',
        bottom: elementOffset,
        right: elementOffset,
        zIndex: 3,
      }}
    >
      <div style={containerStyle}>
        <h3 style={textStyle}>Query Assistant</h3>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '50%',
        }}>
          <MdOpenInFull
            size={'max(3vw, 30px)'}
            color={isHighlighted ? 'black' : '#555555'}
          />
        </div>
      </div>
    </BaseOptionsButton>
  );
}

function ChatElement({

}) {
  // Hook to access Redux dispatch function
  const dispatch = useDispatch();

  // Accessing application state from Redux store
  const {
    chatbotMessages,
  } = useSelector(state => state.app);

  const [currentInput, setCurrentInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    dispatch(getChatbotResponseRequest('Clear chat history'));
  }, [isOpen]);

  const containerStyle = {
    boxSizing: 'border-box',
    borderStyle: 'solid',
    borderWidth: 'max(0.3vw, 2.25px)',
    position: 'fixed',
    bottom: elementOffset,
    right: elementOffset,
    zIndex: 3,
    width: `calc(40% - ${elementOffset}px)`,
  };

  return (
    <div>
      {(!isOpen) ? (
        <OpenButton
          onClick={() => setIsOpen(true)} />
      ) : (
        <div
          style={containerStyle}
        >
          <CloseButton
            onClick={() => setIsOpen(false)} />
          <MessageList
            messages={chatbotMessages}
          />
          <ChatInput
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

export default ChatElement;