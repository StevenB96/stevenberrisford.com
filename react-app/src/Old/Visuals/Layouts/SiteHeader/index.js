import {
  memo
} from 'react';
import {
  useSelector
} from 'react-redux';
import NavContainer from '../../Containers/NavContainer';
import {
  ReferenceMarquee
} from '../../Elements';

const SiteHeader = ({
  navInputMap,
  scrollToSection,
  blur = 3,
}) => {
  // Accessing application state from Redux store
  const {
    profile,
  } = useSelector(state => state.app);

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
        {/* <ReferenceMarquee /> */}
        <h1 style={textStyle}>
          Welcome to My Portfolio!
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