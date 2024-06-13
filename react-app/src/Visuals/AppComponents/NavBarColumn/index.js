import {
  useState,
  useRef,
  useEffect,
} from 'react';
import {
  Nav
} from 'react-bootstrap';
import ListToggle from '../ListToggle';

const NavBarColumn = ({ navInputMap, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [containerHeight, setContainerHeight] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    if (isMenuOpen) {
      setContainerHeight(containerRef.current.scrollHeight);
    } else {
      setContainerHeight(0);
    }
  }, [isMenuOpen]);

  const [highlightedItem, setHighlightedItem] = useState(null);

  const navItemStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottom: 'solid',
    borderWidth: 1,
  };

  return (
    <div
      style={{
        width: '100%',
        position: 'relative',
        backgroundColor: 'silver',
      }}>
      <Nav.Item
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'lightgrey',
          borderBottom: 'solid',
          borderTop: 'solid',
          boxSizing: 'border-box',
          overflow: 'hidden',
        }}
      >
        <div onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <ListToggle
            text={'Menu'}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>
      </Nav.Item>
      {/* {
        isMenuOpen &&
        ( */}
      <div
        ref={containerRef}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          position: 'absolute',
          top: 'calc(100% - 0px)',
          left: 0,
          width: '100%',
          boxSizing: 'border-box',
          height: isMenuOpen ? containerHeight + 'px' : '0',
          transition: 'height 0.1s ease-in-out',
          overflow: 'hidden',
        }}>
        {
          navInputMap.map((item, index) => (
            <Nav.Item
              key={item.id}
              onMouseOver={() => setHighlightedItem(index)}
              onMouseOut={() => setHighlightedItem(null)}
              style={{
                ...navItemStyle,
                backgroundColor: highlightedItem === index ?
                  'white' :
                  'lightgrey',
                textDecoration: highlightedItem === index ?
                  'underline' :
                  'none',
                transition: 'all 0.1s ease-in-out',
              }}>
              <button
                style={{
                  width: '100%'
                }}
                onClick={() => {
                  setIsMenuOpen(false);
                  setHighlightedItem(null);
                  scrollToSection(item.ref)
                }}
              >
                <h2>{item.title}</h2>
              </button>
            </Nav.Item>
          ))
        }
      </div>
      {/* )
      } */}
    </div>
  );
};

export default NavBarColumn;