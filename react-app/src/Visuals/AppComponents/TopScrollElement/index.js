import {
  FaArrowTurnUp
} from "react-icons/fa6";
import env from '../../../env';

const TopScrollElement = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  };

  return (
    <div
      onClick={scrollToTop}
      style={{
        top: 0,
        position: 'fixed',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        maxWidth: (env.TABLET_WIDTH_BREAKPOINT || 1000) / 2,
        backgroundColor: 'silver',
        border: 'solid',
        borderWidth: 'max(0.4vw, 3px)',
        borderTop: 0,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        cursor: 'pointer',
        zIndex: 4,
      }}>
      <h2 style={{ margin: 5, }}>
        Scroll to top
      </h2>
      <FaArrowTurnUp size={'max(0.03vw, 15px)'} />
    </div>
  );
};

export default TopScrollElement;