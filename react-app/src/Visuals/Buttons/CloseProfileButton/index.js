import {
  useState,
  memo
} from 'react';
import {
  IoCloseCircleOutline
} from "react-icons/io5";

const CloseProfileButton = ({
  onClick,
}) => {
  const [isHighlighted, setIsHighlighted] = useState(false);

  const handleMouseOver = () => setIsHighlighted(true);
  const handleMouseOut = () => setIsHighlighted(false);

  return (
    <button
      onClick={() => onClick(false)}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      style={{
        position: 'absolute',
        top: 10,
        right: 10,
      }}>
      <IoCloseCircleOutline
        size={'max(4.5vw, 45px)'}
        color={isHighlighted ? 'black' : '#555555'}
      />
    </button>
  );
};

export default memo(CloseProfileButton);