import {
  useState,
} from 'react';
import {
  Nav
} from 'react-bootstrap';
import ListToggle from '../ListToggle';

const NavBarColumn = ({ navInputMap, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [highlightedItem, setHighlightedItem] = useState(null);

  const navItemStyle = { paddingLeft: 20 };

  return (
    <div
      style={{
        width: '100%',
        position: 'relative',
      }}>
      <Nav.Item
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          backgroundColor: 'lightgrey',
          paddingRight: 20,
          paddingLeft: 20,
          borderBottom: 'solid',
          boxSizing: 'border-box',
          overflow: 'hidden',
        }}
      >
        <h2>Menu</h2>
        <div onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <ListToggle />
        </div>
      </Nav.Item>
      {
        isMenuOpen &&
        (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            position: 'absolute',
            top: 'calc(100% - 0px)',
            left: 0,
            width: '100%',
            boxSizing: 'border-box',
            overflow: 'hidden',
          }}>
            {
              navInputMap.map((item, index) => (
                <Nav.Item
                  key={item.id}
                  onMouseOver={() => setHighlightedItem(index)}
                  style={{
                    ...navItemStyle,
                    backgroundColor: highlightedItem === index ?
                      'white' :
                      'lightgrey',
                    textDecoration: highlightedItem === index ?
                      'underline' :
                      'none',
                    borderBottom: 'solid',
                    borderWidth: 1,
                  }}
                  onClick={() => {
                    setIsMenuOpen(false);
                    setHighlightedItem(null);
                    scrollToSection(item.ref)}
                  }>
                  <h2>{item.title}</h2>
                </Nav.Item>
              ))
            }
          </div>
        )
      }
    </div>
  );
};

export default NavBarColumn;