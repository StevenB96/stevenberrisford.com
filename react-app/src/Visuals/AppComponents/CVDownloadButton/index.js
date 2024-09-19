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
  const { isTablet, isMobile } = useResponsive();

  const handleDownload = useCallback((fileUrl, fileName) => {
    window.open(fileUrl, '_blank');
  }, []);

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
    flexDirection: (isTablet || isMobile) ? 'row' : 'column',
  }

  const textStyle = {
    margin: 0,
    color: isHighlighted ? 'black' : '#555555',
    transition: 'color 0.1s ease-in-out',
  }

  return (
    <BaseOptionsButton
      isHighlighted={isHighlighted}
      setIsHighlighted={setIsHighlighted}
      onClick={() => handleDownload(fileUrl, fileName)}
    >
      <div style={containerStyle}>
        <h3 style={textStyle}>Download {fileName}</h3>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '50%',
        }}>
          <PiReadCvLogoBold
            size={'max(3vw, 30px)'}
            color={isHighlighted ? 'black' : '#555555'}
          />
        </div>
      </div>
    </BaseOptionsButton>
  );
};

export default CVDownloadButton;