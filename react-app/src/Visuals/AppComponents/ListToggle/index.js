import {
  PiListBold
} from "react-icons/pi";

const ListToggle = () => {
  return (
    <div style={{
      aspectRatio: 1,
      height: 40,
      backgroundColor: 'silver',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: 'solid',
      marginLeft: 10,
      cursor: 'pointer',
    }}>
      <PiListBold size={40} />
    </div>
  );
};

export default ListToggle;