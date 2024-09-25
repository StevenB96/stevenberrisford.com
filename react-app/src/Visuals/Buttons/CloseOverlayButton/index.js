import {
  useState,
  memo
} from 'react';
import {
  IoCloseCircleOutline
} from "react-icons/io5";

const CloseOverlayButton = ({
  onClick,
  highlightColour = 'black',
  baseColour = '#555555',
}) => {
  const [isHighlighted, setIsHighlighted] = useState(false);

  const handleMouseOver = () => setIsHighlighted(true);
  const handleMouseOut = () => setIsHighlighted(false);

  return (
    <button
      onClick={onClick}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      style={{
        position: 'absolute',
        top: 10,
        right: 10,
      }}>
      <IoCloseCircleOutline
        size={'max(4.5vw, 45px)'}
        color={isHighlighted ? highlightColour : baseColour}
      />
    </button>
  );
};

export default memo(CloseOverlayButton);