import {
  FaArrowTurnUp
} from "react-icons/fa6";
import useCommonFunctions from '../../../Hooks/useCommonFunctions';
import env from '../../../env';

const TopScrollElement = () => {
  const commonFunctions = useCommonFunctions();

  return (
    <div
      onClick={commonFunctions.scrollToTop}
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
        borderStyle: 'solid',
        borderWidth: 'max(0.4vw, 3px)',
        borderTop: 0,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        cursor: 'pointer',
        zIndex: 4,
      }}>
      <h2>
        Scroll to top
      </h2>
      <FaArrowTurnUp size={'max(1.5vw, 15px)'} />
    </div>
  );
};

export default TopScrollElement;