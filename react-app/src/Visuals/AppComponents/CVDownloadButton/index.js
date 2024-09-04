import {
  useWindowSize,
} from '@react-hook/window-size';
import {
  PiReadCvLogoBold
} from "react-icons/pi";

import env from '../../../env';

const CVDownloadButton = ({ profile, fileName, fileUrl }) => {
  const [width] = useWindowSize();
  const isMobile = width < (env.MOBILE_WIDTH_BREAKPOINT || 600);
  const isTablet = !isMobile && width < (env.TABLET_WIDTH_BREAKPOINT || 1000);

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
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: isMobile ? 'flex-start' : 'center',
          gap: isMobile ? 0 : 20,
          paddingLeft: 10,
          paddingRight: 10,
          paddingBottom: isMobile ? 10 : 0,
          borderRadius: 20,
          border: 'solid',
          backgroundColor: '#FFFFFF',
        }}
        onClick={() => handleDownload()}
      >
        <h3>Download CV</h3>
        <PiReadCvLogoBold size={Math.min(40, width / 30)} />
      </button>
    </>
  );
};

export default CVDownloadButton;