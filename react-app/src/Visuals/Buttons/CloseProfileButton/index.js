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
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}>
      <button
        onClick={() => onClick(false)}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '50%',
        }}>
        <IoCloseCircleOutline
          size={'max(4.5vw, 45px)'}
          color={isHighlighted ? 'black' : '#555555'}
        />
      </button>
    </div>
  );
};

export default memo(CloseProfileButton);