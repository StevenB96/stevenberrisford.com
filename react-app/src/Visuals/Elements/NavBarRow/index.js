import {
  useState,
} from 'react';

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
    backgroundColor: highlightedItem === index ?
      'whitesmoke' :
      'silver',
    transition: 'background-color 0.1s ease-in-out, text-decoration 0.1s ease-in-out',
    borderLeftStyle: index === 0 ? 'solid' : undefined,
    borderRightStyle: 'solid',
    borderTopStyle: 'solid',
    borderWidth: 'max(0.3vw, 2.25px)',
    boxSizing: 'border-box',
    borderTopRightRadius: index === (navInputMap.length - 1) ? 20 : undefined,
    borderTopLeftRadius: index === 0 ? 20 : undefined,
  };

  const textStyle = {
  }

  return (
    <div
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
        <h2 style={textStyle}>{item.title}</h2>
      </button>
    </div>
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