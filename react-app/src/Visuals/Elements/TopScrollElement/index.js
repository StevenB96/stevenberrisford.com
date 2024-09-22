import {
  useState
} from 'react';
import { 
  MdKeyboardDoubleArrowUp 
} from "react-icons/md";
import { commonFunctions } from '../../../Hooks';
import env from '../../../env';

const TopScrollElement = () => {
  const [isHighlighted, setIsHighlighted] = useState(false);

  const handleMouseOver = () => setIsHighlighted(true);
  const handleMouseOut = () => setIsHighlighted(false);

  const containerStyle = {
    top: 0,
    position: 'fixed',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    maxWidth: (env.TABLET_WIDTH_BREAKPOINT || 1000) / 2,
    backgroundColor: 'whitesmoke',
    borderStyle: 'solid',
    borderWidth: 'max(0.3vw, 2.25px)',
    boxSizing: 'border-box',
    borderTop: 0,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    cursor: 'pointer',
    zIndex: 4,
    gap: 10,
  }

  const textStyle = {
    color: isHighlighted ? 'black' : '#555555',
    transition: 'color 0.1s ease-in-out',
  }

  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={commonFunctions.scrollToTop}
      style={containerStyle}>
      <h2 style={textStyle}>
        Scroll to top
      </h2>
      <MdKeyboardDoubleArrowUp
        size={'max(2vw, 20px)'}
        color={isHighlighted ? 'black' : '#555555'}
      />
    </div>
  );
};

export default TopScrollElement;