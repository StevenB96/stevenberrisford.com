import {
  FaArrowTurnUp
} from "react-icons/fa6";

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
        width: '50%',
        backgroundColor: 'lightgrey',
        border: 'solid',
        borderTop: 0,
        borderBottomLeftRadius: '50%',
        borderBottomRightRadius: '50%',
        cursor: 'pointer',
      }}>
      <h2 style={{ margin: 5, }}>Scroll to top</h2><FaArrowTurnUp />
    </div>
  );
};

export default TopScrollElement;