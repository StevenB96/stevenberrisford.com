import {
  PiReadCvLogoBold
} from "react-icons/pi";

const CVDownloadButton = ({ profile, fileName, fileUrl }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <button
        style={{
          top: '1vw',
          right: '1vw',
          position: 'fixed',
          zIndex: 2,
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          gap: 20,
          paddingLeft: 20,
          paddingRight: 20,
          borderRadius: 20,
          border: 'solid',
          backgroundColor: '#FFFFFF',
        }}
        onClick={() => handleDownload()}
      >
        <h2>Download CV</h2>
        <PiReadCvLogoBold size={40} />
      </button>
    </>
  );
};

export default CVDownloadButton;