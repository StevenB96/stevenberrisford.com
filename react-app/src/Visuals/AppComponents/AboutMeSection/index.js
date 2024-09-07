import {
  CgProfile
} from "react-icons/cg";
import BaseOptionsButton from '../BaseOptionsButton';

const AboutMeSection = ({ 
  isAboutModalOpen, 
  setIsAboutModalOpen 
}) => {
  return (
    <BaseOptionsButton onClick={() => setIsAboutModalOpen(!isAboutModalOpen)}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: '5%',
        }}>
        <h3 style={{ margin: 0, }}>About Me</h3>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '50%',
        }}>
          <CgProfile size={'max(3vw, 30px)'} />
        </div>
      </div>
    </BaseOptionsButton>
  );
};

export default AboutMeSection;