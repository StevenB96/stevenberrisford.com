import {
  useSelector
} from 'react-redux';

const DownloadButton = ({ fileName, fileUrl }) => {
  const handleDownload = () => {
    // Create a temporary anchor element
    const link = document.createElement('a');
    // Set the href attribute to the file URL
    link.href = fileUrl;
    // Set the download attribute to the desired file name
    link.download = fileName;
    // Programmatically trigger a click event on the anchor element
    document.body.appendChild(link);
    link.click();
    // Clean up: remove the anchor element from the DOM
    document.body.removeChild(link);
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <button
        style={{
          margin: 20,
          fontFamily: 'inherit',
          fontSize: 'min(calc(4vw / (2 / 1.17)), 1.17em)',
          marginBottom: 0,
          width: '50%',
        }}
        onClick={handleDownload}
      >Download {fileName}
      </button>
    </div>
  );

};

function Profile({ }) {
  const profile = useSelector(state => state.app.profile);

  return profile ?
    (
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          userSelect: 'none',
          whiteSpace: 'pre-wrap',
        }}>
        <div
          style={{
            width: '100%',
            maxWidth: 500,
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            borderRadius: 'min(50px, 5vw)',
            overflow: 'hidden',
            border: 'solid',
            margin: 40,
            boxShadow: 'rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px',
            backgroundColor: '#FFFFFF',
            padding: 'min(30px, 4vw)',
            boxSizing: 'border-box',
          }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              boxSizing: 'border-box',
            }}>
            <h3
              style={{
                textAlign: 'center',
              }}
            >{profile.job_title}</h3>
            <p
              style={{
                textAlign: 'left',
                margin: 0,
              }}
            >{profile.description}</p>
            <DownloadButton
              fileName="CV"
              fileUrl={profile.cv_link}
            />
          </div>
        </div>
      </div>
    )
    :
    null
}

export default Profile;