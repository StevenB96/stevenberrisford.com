import {
  useState,
} from 'react';
import {
  Nav
} from 'react-bootstrap';

const NavBarRow = ({ navInputMap, scrollToSection }) => {
  const [highlightedItem, setHighlightedItem] = useState(null);

  return (
    <div
      style={{
        borderBottom: 'solid',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'lightgrey',
        overflow: 'hidden',
        boxSizing: 'border-box',
        paddingLeft: 10,
        paddingRight: 10,
        gap: 10,
      }}>
      {navInputMap.map((item, index) => (
        <Nav.Item
          key={item.id}
          onMouseOver={() => setHighlightedItem(index)}
          style={{
            display: 'flex',
            flex: 1,
            justifyContent: 'center',
            textDecoration: highlightedItem === index ?
              'underline' :
              'none',
            backgroundColor: highlightedItem === index ?
              'white' :
              'lightgrey',
          }}
          onClick={() => scrollToSection(item.ref)}>
          <h2>{item.title}</h2>
        </Nav.Item>
      ))}
    </div>
  );
};

export default NavBarRow;