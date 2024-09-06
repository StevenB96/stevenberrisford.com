import {
  PiListBold
} from "react-icons/pi";
import {
  useWindowSize,
} from '@react-hook/window-size';

const ListToggle = ({ text, onClick }) => {
  let [width, height] = useWindowSize();

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
      <h2 style={{ margin: 0, }}>{text}</h2>
      <PiListBold size={'max(2.5vw, 25px)'} />
    </button>
  );
};

export default ListToggle;