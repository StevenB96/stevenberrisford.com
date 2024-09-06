import {
  useCallback
} from 'react';
import {
  useWindowSize,
} from '@react-hook/window-size';
import {
  PiReadCvLogoBold
} from "react-icons/pi";
import BaseOptionsButton from '../BaseOptionsButton';

import env from '../../../env';

const CVDownloadButton = ({ profile, fileName, fileUrl }) => {
  const [width] = useWindowSize();
  const isMobile = width < (env.MOBILE_WIDTH_BREAKPOINT || 600);
  const isTablet = !isMobile && width < (env.TABLET_WIDTH_BREAKPOINT || 1000);

  const handleDownload = useCallback((fileUrl, fileName) => {
    window.open(fileUrl, '_blank');
  }, []);

  return (
    <BaseOptionsButton>
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
          <PiReadCvLogoBold size={'max(3vw, 30px)'} />
        </div>
      </div>
    </BaseOptionsButton>
  );
};

export default CVDownloadButton;