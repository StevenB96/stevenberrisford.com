import {
  useState,
} from 'react';
import {
  Nav
} from 'react-bootstrap';
import env from '../../../env';

const CustomNavItem = ({
  item,
  index,
  navInputMap,
  highlightedItem,
  setHighlightedItem,
  scrollToSection
}) => {
  const navItemStyle = {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    cursor: 'pointer',
    alignItems: 'center',
    textDecoration: highlightedItem === index ?
      'underline' :
      'none',
    backgroundColor: highlightedItem === index ?
      'whitesmoke' :
      'silver',
    transition: 'all 0.1s ease-in-out',
    borderLeft: index === 0 ? 'solid' : null,
    borderRight: 'solid',
    borderTop: 'solid',
    borderTopRightRadius: index === (navInputMap.length - 1) ? 20 : null,
    borderTopLeftRadius: index === 0 ? 20 : null,
    height: (env.MENU_HEIGHT * 1.5 || 75),
  };

  return (
    <Nav.Item
      key={item.id}
      onMouseOver={() => setHighlightedItem(index)}
      onMouseOut={() => setHighlightedItem(null)}
      style={navItemStyle}>
      <button
        style={{
          width: '100%'
        }}
        onClick={() => scrollToSection(item.ref)}
      >
        <h2>{item.title}</h2>
      </button>
    </Nav.Item>
  );
};

const NavBarRow = ({ navInputMap, scrollToSection }) => {
  const [highlightedItem, setHighlightedItem] = useState(null);

  const dropDownContainerStyle = {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    overflow: 'hidden',
    boxSizing: 'border-box',
  };

  return (
    <div
      style={dropDownContainerStyle}>
      {navInputMap.map((item, index) => (
        <CustomNavItem
          item={item}
          index={index}
          navInputMap={navInputMap}
          highlightedItem={highlightedItem}
          setHighlightedItem={setHighlightedItem}
          scrollToSection={scrollToSection}
        />
      ))}
    </div>
  );
};

export default NavBarRow;