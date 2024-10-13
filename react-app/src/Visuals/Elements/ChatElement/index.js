import {
  useState
} from 'react';
import {
  MdSend
} from "react-icons/md";

function Message({
  message
}) {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: message.author === 'chatbot' ?
      'flex-start' : 'flex-end',
    padding: 10,
    boxSizing: 'border-box',
  }

  const textContainerStyle = {
    backgroundColor: 'silver',
    borderRadius: 20,
    borderStyle: 'solid',
    borderWidth: 'max(0.3vw, 2.25px)',
    width: '80%',
    padding: 20,
    boxSizing: 'border-box',
  }

  const textStyle = {
    margin: 0,
    wordWrap: 'break-word',
  }

  return (
    <div style={containerStyle}>
      <div style={textContainerStyle}>
      <h2 style={textStyle}>{message.author === 'chatbot' ?
      'Chatbot' : 'Myself'}</h2>
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
  return (
    <div
      style={{
        borderRadius: '50%',
        borderStyle: 'solid',
        borderWidth: 'max(0.3vw, 2.25px)',        
        padding: 5,
        display: 'flex',
        aspectRatio: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: currentInput ? 'transparent' : '#ccc',
      }}
      onClick={setMessages}>
      <MdSend size={'max(3vw, 20px)'} />
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
    backgroundColor: 'whitesmoke',
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
  const [messages, setMessages] = useState([
    {
      author: "chatbot",
      text: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    },
    {
      author: "self",
      text: 'bbbbbbbbbbbbbbbbbbbbbbbbb',
    },
  ]);
  const [currentInput, setCurrentInput] = useState('');

  return (
    <div style={{
      position: 'fixed',
      bottom: 20,
      right: 20,
      backgroundColor: 'whitesmoke',
      zIndex: 3,
      borderRadius: 20,
      overflow: 'hidden',
      boxSizing: 'border-box',
      borderStyle: 'solid',
      borderWidth: 'max(0.3vw, 2.25px)',
    }}>
      <MessageList
        messages={messages}
      />
      <ChatInput
        currentInput={currentInput}
        setMessages={() => {
          if (currentInput) {
            setMessages([
              ...messages,
              {
                author: "self",
                text: currentInput,
              },
            ]);
            setCurrentInput('');
          }
        }}
        setCurrentInput={(e) => setCurrentInput(e.target.value)}
      />
    </div>
  );
}

export default ChatElement;