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
    <button
      style={{
        margin: 20,
        fontFamily: 'inherit',
      }}
      onClick={handleDownload}
    >Download {fileName}
    </button>
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
        }}>
        <div
          style={{
            width: '100%',
            maxWidth: 500,
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            borderRadius: 50,
            overflow: 'hidden',
            border: 'solid',
            marginTop: 40,
            marginBottom: 40,
            boxShadow: 'rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px',
            backgroundColor: 'lightgray',
            padding: 30,
            boxSizing: 'border-box',
          }}>
          <img
            src={profile.profile_picture_link}
            alt={profile.profile_picture_link}
            style={{
              width: '50%',
              aspectRatio: 1,
              objectFit: 'cover',
            }} />
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              boxSizing: 'border-box',
            }}>
            <h2
              style={{
                whiteSpace: 'pre-wrap',
                textAlign: 'center',
              }}
            >{profile.name}</h2>
            <h3
              style={{
                whiteSpace: 'pre-wrap',
                textAlign: 'center',
              }}
            >{profile.job_title}</h3>
            <p
              style={{ whiteSpace: 'pre-wrap' }}
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