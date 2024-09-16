import Nav from 'react-bootstrap/Nav';

import NavBarColumn from '../NavBarColumn';
import NavBarRow from '../NavBarRow';

import useResponsive from '../../../Hooks/useResponsive';

const MultiTypeNav = ({
  navInputMap,
  scrollToSection
}) => {
  const { isMobile, isTablet } = useResponsive();

  return (
    <Nav
      style={{
        width: '100%',
      }}
    >
      {
        isMobile || isTablet ?
          <NavBarColumn
            navInputMap={navInputMap}
            scrollToSection={scrollToSection} /> :
          <NavBarRow
            navInputMap={navInputMap}
            scrollToSection={scrollToSection} />
      }
    </Nav>
  );
};

const SiteHeader = ({
  navInputMap,
  scrollToSection,
  profile
}) => {
  // Styles
  const headerContainerStyle = {
    position: 'relative',
    width: '100%',
  };

  const contentContainerStyle = {
    width: '100%',
    position: 'relative',
    zIndex: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  };

  const textStyle = {
    width: '50%',
    padding: 30,
    textAlign: 'center',
    margin: 0,
    color: 'whitesmoke',
  };

  const backgroundStyle = {
    backgroundImage: `url(${profile?.profile_background_link})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,

    filter: 'blur(3px)',
  };

  return (
    <div style={headerContainerStyle}>
      <div style={backgroundStyle} />

      {/* Content Wrapper */}
      <div style={contentContainerStyle}>
        <h1 style={textStyle}>
          <u>
            Hi, I'm Steven Berrisford.<br />Welcome to my website!
          </u>
        </h1>
        <MultiTypeNav
          navInputMap={navInputMap}
          scrollToSection={scrollToSection}
        />
      </div>
    </div>
  );
};

export default SiteHeader;