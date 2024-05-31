import {
  PiListBold
} from "react-icons/pi";
import {
  useWindowSize,
} from '@react-hook/window-size';

const ListToggle = () => {
  let [width, height] = useWindowSize();

  return (
    <div style={{
      aspectRatio: 1,
      height: width * 0.05,
      backgroundColor: 'silver',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: 'solid',
      marginLeft: 10,
      cursor: 'pointer',
    }}>
      <PiListBold size={width * 0.03} />
    </div>
  );
};

export default ListToggle;