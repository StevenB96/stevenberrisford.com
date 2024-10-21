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
  CloseChatElementButton,
  OpenChatElementButton,
  SubmitChatMessageButton,
} from '../../Buttons';
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
    whiteSpace: 'pre-wrap',
  }

  return (
    <div style={containerStyle}>
      <div style={textContainerStyle}>
        {(message.author === 'chatbot') && (
          <h2 style={textStyle}>My Bot</h2>
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

function ChatInput({
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
    textareaRef.current.style.height = `calc(${lineHeightString} + 4px)`;
  };

  const containerStyle = {
    // Background and Appearance
    backgroundColor: 'silver',
    borderTopStyle: 'solid',
    borderWidth: 'max(0.3vw, 2.25px)',
    // Layout Properties
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
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
      <textarea
        ref={textareaRef}
        style={{
          // Sizing Properties
          flex: 1,
          height: `calc(${lineHeightString} + 4px)`,
          maxHeight: `calc(${lineHeightString} * 5 + 4px)`,
          lineHeight: lineHeightString,
          minWidth: 0,
          // Background and Appearance
          borderStyle: 'solid',
          borderWidth: 'max(0.3vw, 2.25px)',
          borderColor: 'black',
          borderRadius: 10,
          fontFamily: 'inherit',
          // Box Model Properties
          boxSizing: 'border-box',
          // Overflow properties
          overflow: 'hidden',
          resize: 'none',
          // Font properties
          fontSize: 'calc(max(calc(4vw / (3 / 1.5)), calc(1.5 * 10px)) / 1.2)',
          userSelect: 'none',
          fontWeight: 700,
          whiteSpace: 'pre-wrap',
          wordWrap: 'break-word',
        }}
        onInput={(e) => {
          setCurrentInput(e);
        }}
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
    // Size-related properties
    width: `calc(40% - ${elementOffset}px)`,
  };

  return (
    <div>
      {(!isOpen) ? (
        <OpenChatElementButton
          onClick={() => setIsOpen(true)} />
      ) : (
        <div
          style={containerStyle}
        >
          <CloseChatElementButton
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