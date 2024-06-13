import {
  useWindowSize,
} from '@react-hook/window-size';
import env from '../../../env';

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
  width = Math.min(width, (env.WIDTH_LIMIT || 1000));

  return (
    <div
      style={{
        padding: 50 * (width / (env.WIDTH_LIMIT || 1000)),
        width: `100%`,
        maxWidth: env.WIDTH_LIMIT || 1000,
        boxSizing: 'border-box',
      }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          border: 'solid',
          borderRadius: 20,
          backgroundColor: 'white',
          gap: 30,
          padding: 50 * (width / (env.WIDTH_LIMIT || 1000)),
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
    </div>
  );
}

export default Profile;