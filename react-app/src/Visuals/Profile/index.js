import Card from 'react-bootstrap/Card';

const DownloadButton = ({ fileName, fileUrl }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
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
        }}
        onClick={handleDownload}
      >Download {fileName}
      </button>
    </div>
  );
};

function Profile({ profile }) {
  return (
    <div
      style={{
        margin: 20,
        padding: 20,
        border: 'solid',
        width: 'calc(100% - 80px)',
        borderRadius: 20,
        backgroundColor: 'lightgrey',
      }}>
      <h2 style={{ textAlign: 'center' }}>{profile?.job_title}</h2>
      <p
        style={{
          textAlign: 'left',
          margin: 0,
          whiteSpace: 'pre-wrap',
        }}
      >{profile.description}</p>
      <DownloadButton
        fileName="CV"
        fileUrl={profile?.cv_link}
      />
    </div >
  );
}

export default Profile;