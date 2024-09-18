import {
  useState
} from 'react';
import {
  CgProfile
} from "react-icons/cg";
import useResponsive from '../../../Hooks/useResponsive';
import BaseOptionsButton from '../BaseOptionsButton';

const AboutMeSection = ({
  isAboutModalOpen,
  userSetIsAboutModalOpen
}) => {
  const [isHighlighted, setIsHighlighted] = useState(false);
  const { isTablet, isMobile, width } = useResponsive();

  return (
    <BaseOptionsButton
      isHighlighted={isHighlighted}
      setIsHighlighted={setIsHighlighted}
      onClick={() => userSetIsAboutModalOpen(!isAboutModalOpen)}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: width * 0.005,
          flexDirection: (isTablet || isMobile) ? 'row' : 'column',
        }}>
        <h3 style={{
          margin: 0,
        }}>About Me</h3>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '50%',
        }}>
          <CgProfile
            size={'max(3vw, 30px)'}
            color={isHighlighted ? 'black' : 'darkgrey'}
          />
        </div>
      </div>
    </BaseOptionsButton>
  );
};

export default AboutMeSection;