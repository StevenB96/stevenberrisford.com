import {
  memo
} from 'react';
import {
  PiListBold
} from "react-icons/pi";

const NavToggle = ({
  text,
  onClick
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        gap: 10,
        boxSizing: 'border-box',
        padding: '0.83em',
      }}>
      <h1 style={{ margin: 0, }}>{text}</h1>
      <PiListBold size={'max(2.5vw, 25px)'} />
    </button>
  );
};

export default memo(NavToggle);