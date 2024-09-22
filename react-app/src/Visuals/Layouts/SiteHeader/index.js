import {
  memo
} from 'react';
import NavContainer from '../../Containers/NavContainer';

const SiteHeader = ({
  navInputMap,
  scrollToSection,
  profile,
  blur = 3,
}) => {
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
    fontSize: 'calc(max(calc(4vw / (3 / 3)), calc(3 * 10px)) / 1.2)'
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
    filter: `blur(${blur}px)`,
  };

  return (
    <div style={headerContainerStyle}>
      <div style={backgroundStyle} />
      <div style={contentContainerStyle}>
        <h1 style={textStyle}>
          Welcome to my website!
        </h1>
        <NavContainer
          navInputMap={navInputMap}
          scrollToSection={scrollToSection}
        />
      </div>
    </div>
  );
};

export default memo(SiteHeader);