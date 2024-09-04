import {
  useCallback
} from 'react';
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

  const handleDownload = useCallback((fileUrl, fileName) => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

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
          alignItems: 'center',
          gap: isMobile ? 0 : 20,
          paddingLeft: 15,
          paddingRight: 15,
          paddingBottom: isMobile ? 15 : 0,
          borderRadius: 15,
          border: 'solid',
          backgroundColor: 'whitesmoke',
        }}
        onClick={() => handleDownload(fileUrl, fileName)}
      >
        <h3>Download CV</h3>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '50%',
        }}>
          <PiReadCvLogoBold size={Math.min(40, width / 30)} />
        </div>
      </button>
    </>
  );
};

export default CVDownloadButton;