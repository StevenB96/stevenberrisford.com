import {
  useWindowSize,
} from '@react-hook/window-size';

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
  let [width, height] = useWindowSize();
  width = Math.min(width, 800);

  return (
    <div
      style={{
        margin: 10,
        padding: 20,
        border: 'solid',
        width: width - 80,
        borderRadius: 20,
        backgroundColor: 'white',
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