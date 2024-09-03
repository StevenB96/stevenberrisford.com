const ToastContent = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10%',
      }}
    >
      <h3
        style={{
          whiteSpace: 'pre-wrap',
          color: 'black',
          fontFamily: 'Quicksand',
          textAlign: 'left',
        }}
      >
        <div><h2>Welcome to my website!</h2></div><br />
        <div>Here you can learn more about me.</div><br />
        <div>By navigating through the various sections you can discover:</div>
        <div>
          <ol style={{ paddingLeft: '10%', }}>
            <li>Projects and prototypes</li>
            <li>Articles and notes</li>
            <li>Hobbies</li>
          </ol>
        </div>
      </h3>
    </div>
  );
};

export default ToastContent;