import {
  useCallback
} from 'react';
import {
  PiReadCvLogoBold
} from "react-icons/pi";
import useResponsive from '../../../Hooks/useResponsive';
import BaseOptionsButton from '../BaseOptionsButton';


const CVDownloadButton = ({
  profile,
  fileName,
  fileUrl
}) => {
  const { isTablet, isMobile, width } = useResponsive();

  const handleDownload = useCallback((fileUrl, fileName) => {
    window.open(fileUrl, '_blank');
  }, []);

  return (
    <BaseOptionsButton
      onClick={() => handleDownload(fileUrl, fileName)}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: width * 0.005,
          flexDirection: (isTablet || isMobile) ? 'row' : 'column',
        }}
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