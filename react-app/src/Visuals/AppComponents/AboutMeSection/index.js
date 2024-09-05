import {
  useWindowSize,
} from '@react-hook/window-size';
import {
  CgProfile
} from "react-icons/cg";
import BaseOptionsButton from '../BaseOptionsButton';

import env from '../../../env';

const AboutMeSection = ({ isAboutModalOpen, setIsAboutModalOpen }) => {
  const [width] = useWindowSize();
  const isMobile = width < (env.MOBILE_WIDTH_BREAKPOINT || 600);

  return (
    <BaseOptionsButton>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: '5%',
        }}
        onClick={() => setIsAboutModalOpen(!isAboutModalOpen)}>
        <h3 style={{ margin: 0, }}>About Me</h3>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '50%',
        }}>
          <CgProfile size={Math.min(60, width / 20)} />
        </div>
      </div>
    </BaseOptionsButton>
  );
};

export default AboutMeSection;