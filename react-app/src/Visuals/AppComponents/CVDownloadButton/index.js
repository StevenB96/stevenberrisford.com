import {
  useCallback,
  useState
} from 'react';
import {
  PiReadCvLogoBold
} from "react-icons/pi";
import useResponsive from '../../../Hooks/useResponsive';
import BaseOptionsButton from '../BaseOptionsButton';


const CVDownloadButton = ({
  fileName,
  fileUrl,
}) => {
  const [isHighlighted, setIsHighlighted] = useState(false);
  const { isTablet, isMobile, width } = useResponsive();

  const handleDownload = useCallback((fileUrl, fileName) => {
    window.open(fileUrl, '_blank');
  }, []);

  return (
    <BaseOptionsButton
      isHighlighted={isHighlighted}
      setIsHighlighted={setIsHighlighted}
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
        <h3 style={{ margin: 0, }}>Download {fileName}</h3>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '50%',
        }}>
          <PiReadCvLogoBold
            size={'max(3vw, 30px)'}
            color={isHighlighted ? 'black' : 'darkgrey'}
          />
        </div>
      </div>
    </BaseOptionsButton>
  );
};

export default CVDownloadButton;