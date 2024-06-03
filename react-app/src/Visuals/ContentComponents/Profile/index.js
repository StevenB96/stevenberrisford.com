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
        className={"standard-button"}
        style={{
          cursor: 'pointer',
          fontSize: 'min(calc(4vw / (2 / 1.17)), 1.17em)',
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
        margin: 40 * (width / 800),
        padding: 40 * (width / 800),
        width: width - 80 * (width / 800),
        border: 'solid',
        borderRadius: 20,
        backgroundColor: 'white',
        boxSizing: 'border-box',
        gap: 30,
        display: 'flex',
        flexDirection: 'column',
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