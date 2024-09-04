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
        width: '75%',
        maxWidth: (env.MOBILE_WIDTH_BREAKPOINT || 600) / 1.5,
        backgroundColor: 'lightgrey',
        border: 'solid',
        borderTop: 0,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        cursor: 'pointer',
        minHeight: env.MENU_HEIGHT * 1.5 || 75,
        zIndex: 3,
      }}>
      <h2 style={{ margin: 5, }}>Scroll to top</h2><FaArrowTurnUp size={20} />
    </div>
  );
};

export default TopScrollElement;