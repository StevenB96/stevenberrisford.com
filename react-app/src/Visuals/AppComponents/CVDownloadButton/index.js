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
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: '5%',
        }}
        onClick={() => handleDownload(fileUrl, fileName)}
      >
        <h3 style={{ margin: 0, }}>Download CV</h3>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '50%',
        }}>
          <PiReadCvLogoBold size={Math.min(60, width / 20)} />
        </div>
      </div>
    </>
  );
};

export default CVDownloadButton;