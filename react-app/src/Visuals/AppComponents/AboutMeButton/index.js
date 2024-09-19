import {
  useState
} from 'react';
import {
  CgProfile
} from "react-icons/cg";
import useResponsive from '../../../Hooks/useResponsive';
import BaseOptionsButton from '../BaseOptionsButton';

const AboutMeButton = ({
  isAboutModalOpen,
  userSetIsAboutModalOpen
}) => {
  const [isHighlighted, setIsHighlighted] = useState(false);
  const { isTablet, isMobile } = useResponsive();

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
      onClick={() => userSetIsAboutModalOpen(!isAboutModalOpen)}
    >
      <div style={containerStyle}>
        <h3 style={textStyle}>About Me</h3>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '50%',
        }}>
          <CgProfile
            size={'max(3vw, 30px)'}
            color={isHighlighted ? 'black' : '#555555'}
          />
        </div>
      </div>
    </BaseOptionsButton>
  );
};

export default AboutMeButton;