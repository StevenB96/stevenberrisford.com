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

const CustomNavItem = ({
  item,
  index,
  navInputMap,
  highlightedItem,
  setHighlightedItem,
  isMenuOpen,
  setIsMenuOpen,
  scrollToSection,
  containerHeight
}) => {
  const navItemStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: highlightedItem === index ?
      'whitesmoke' :
      'silver',
    textDecoration: highlightedItem === index ?
      'underline' :
      'none',
    transition: 'all 0.1s ease-in-out',
    borderTop: isMenuOpen ? 'solid' : null,
    borderBottom: isMenuOpen && index === navInputMap.length - 1 ? 'solid' : null,
    borderLeft: 'solid',
    borderRight: 'solid',
    height: isMenuOpen ? containerHeight : 0,
    height: isMenuOpen ? (env.MENU_HEIGHT || 50) : 0,
    borderBottomLeftRadius: index === (navInputMap.length - 1) ? 20 : null,
    borderBottomRightRadius: index === (navInputMap.length - 1) ? 20 : null,
  };

  return (
    <Nav.Item
      key={index}
      onMouseOver={() => setHighlightedItem(index)}
      onMouseOut={() => setHighlightedItem(null)}
      style={navItemStyle}>
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
  );
};

const CustomDropDownButton = ({ isMenuOpen, setIsMenuOpen }) => {
  const dropDownStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: 'silver',
    height: (env.MENU_HEIGHT * 1.5 || 75),
    borderTop: 'solid',
    borderLeft: 'solid',
    borderRight: 'solid',

    cursor: 'pointer',
    boxSizing: 'border-box',
    overflow: 'hidden',
  };

  return (
    <Nav.Item
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      style={dropDownStyle}
    >
      <ListToggle
        text={'Menu'}
      />
    </Nav.Item>
  );
}

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

  const dropDownContainerStyle = {
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
  };

  return (
    <div
      style={{
        width: '100%',
      }}>
      <CustomDropDownButton
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <div
        ref={containerRef}
        style={dropDownContainerStyle}>
        {
          navInputMap.map((item, index) => (
            <CustomNavItem
              item={item}
              index={index}
              navInputMap={navInputMap}
              highlightedItem={highlightedItem}
              setHighlightedItem={setHighlightedItem}
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
              scrollToSection={scrollToSection}
              containerHeight={containerHeight}
            />
          ))
        }
      </div>
    </div>
  );
};

export default NavBarColumn;