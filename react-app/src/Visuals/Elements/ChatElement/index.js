import {
  useEffect,
  useState
} from 'react';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import {
  MdSend
} from "react-icons/md";
import {
  getChatbotResponseRequest,
} from '../../../Redux/Actions/appActions';

function Message({
  message
}) {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: message.author === 'chatbot' ?
      'flex-start' : 'flex-end',
    boxSizing: 'border-box',
  }

  const textContainerStyle = {
    backgroundColor: 'silver',
    borderRadius: 10,
    borderStyle: 'solid',
    borderWidth: 'max(0.3vw, 2.25px)',
    maxWidth: '80%',
    padding: 5,
    boxSizing: 'border-box',
  }

  const textStyle = {
    margin: 0,
    wordWrap: 'break-word',
  }

  return (
    <div style={containerStyle}>
      <div style={textContainerStyle}>
        {(message.author === 'chatbot') && (
          <h2 style={textStyle}>Chatbot</h2>
        )}
        <h3 style={textStyle}>{message.text}</h3>
      </div>
    </div>
  );
}

function MessageList({
  messages
}) {
  const containerStyle = {
    backgroundColor: 'whitesmoke',
    maxHeight: '50vh',
    minWidth: '25vw',
    overflowY: 'scroll',
    overflowX: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
    gap: 10,
  }

  return (
    <div style={containerStyle}>
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
        borderRadius: '50%',
        borderStyle: 'solid',
        borderWidth: 'max(0.3vw, 2.25px)',
        borderColor: isClickable ? 'black' : '#555555',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'whitesmoke',
        height: 'max(3vw, 20px)',
        aspectRatio: 1,
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
    width: '100%',
    backgroundColor: 'silver',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    boxSizing: 'border-box',
    gap: 10,
    borderTopStyle: 'solid',
    borderWidth: 'max(0.3vw, 2.25px)',
  }

  return (
    <div style={containerStyle}>
      <input style={{
        flex: 1,
        height: 'max(3vw, 20px)',
        padding: 10,
        fontFamily: 'inherit',
        borderStyle: 'solid',
        borderWidth: 'max(0.3vw, 2.25px)',
        borderColor: 'black',
        borderRadius: 10,
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

function ChatElement({

}) {
  // Hook to access Redux dispatch function
  const dispatch = useDispatch();

  // Accessing application state from Redux store
  const {
    chatbotMessages,
  } = useSelector(state => state.app);

  const [currentInput, setCurrentInput] = useState('');

  useEffect(() => {
    dispatch(getChatbotResponseRequest('Clear chat history'));
  }, []);

  return (
    <div style={{
      position: 'fixed',
      bottom: 20,
      right: 20,
      backgroundColor: 'whitesmoke',
      zIndex: 3,
      borderRadius: 10,
      overflow: 'hidden',
      boxSizing: 'border-box',
      borderStyle: 'solid',
      borderWidth: 'max(0.3vw, 2.25px)',
      maxWidth: '50%',
    }}>
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
  );
}

export default ChatElement;