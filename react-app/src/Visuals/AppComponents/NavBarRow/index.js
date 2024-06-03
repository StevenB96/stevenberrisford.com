import {
  useState,
} from 'react';
import {
  Nav
} from 'react-bootstrap';

const NavBarRow = ({ navInputMap, scrollToSection }) => {
  const [highlightedItem, setHighlightedItem] = useState(null);

  const navItemStyle = {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    cursor: 'pointer',
    alignItems: 'center',
  };

  return (
    <div
      style={{
        borderTop: 'solid',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        overflow: 'hidden',
        boxSizing: 'border-box',
        backgroundColor: 'silver',
      }}>
      {navInputMap.map((item, index) => (
        <Nav.Item
          key={item.id}
          onMouseOver={() => setHighlightedItem(index)}
          onMouseOut={() => setHighlightedItem(null)}
          style={{
            ...navItemStyle,
            textDecoration: highlightedItem === index ?
              'underline' :
              'none',
            backgroundColor: highlightedItem === index ?
              'white' :
              'lightgrey',
          }}>
          <button
            style={{
              width: '100%'
            }}
            onClick={() => scrollToSection(item.ref)}
          >
            <h2>{item.title}</h2>
          </button>
        </Nav.Item>
      ))}
    </div>
  );
};

export default NavBarRow;