import {
  useState,
  useRef,
  useEffect,
} from 'react';
import {
  Nav
} from 'react-bootstrap';
import ListToggle from '../ListToggle';
import env from '../../../env';

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
  };

  return (
    <div
      style={{
        width: '100%',
        position: 'relative',
        backgroundColor: 'silver',
      }}>
      <Nav.Item
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'lightgrey',
          boxSizing: 'border-box',
          overflow: 'hidden',
          borderTop: 'solid',
          cursor: 'pointer',
          borderLeft: 'solid',
          borderRight: 'solid',
          minHeight: (env.MIN_MENU_HEIGHT || 50),
        }}
      >
        <div>
          <ListToggle
            text={'Menu'}
          />
        </div>
      </Nav.Item>
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
          transition: 'height 0.1s ease-in-out',
          overflow: 'hidden',
        }}>
        {
          navInputMap.map((item, index) => (
            <Nav.Item
              key={index}
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
                borderTop: isMenuOpen ? 'solid' : null,
                borderBottom: isMenuOpen && index === navInputMap.length - 1 ? 'solid' : null,
                borderLeft: 'solid',
                borderRight: 'solid',
                height: isMenuOpen ? containerHeight : 0,
                minHeight: isMenuOpen ? (env.MIN_MENU_HEIGHT || 50) : 0,
                borderBottomLeftRadius: index === (navInputMap.length - 1) ? 20 : null,
                borderBottomRightRadius: index === (navInputMap.length - 1) ? 20 : null,
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