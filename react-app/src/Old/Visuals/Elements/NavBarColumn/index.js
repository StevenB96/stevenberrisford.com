import {
  useState,
  useRef,
  useEffect,
} from 'react';
import {
  useDispatch,
} from 'react-redux';
import { useWindowSize } from '@react-hook/window-size';
import useScrollPosition from '@react-hook/window-scroll';
import NavToggle from '../../Buttons/NavToggle';
import { commonFunctions } from '../../../Hooks';

import {
  setAppModalOpenRequest,
} from '../../../Redux/Actions/appActions';

const CustomNavItem = ({
  item,
  index,
  navInputMap,
  isMenuOpen,
  setIsMenuOpen,
  scrollToSection,
  containerHeight,
}) => {
  const [isHighlighted, setIsHighlighted] = useState(false);

  const icon = commonFunctions.getMenuIcon({
    iconName: item.icon,
    isHighlighted
  });

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'whitesmoke',
    transition: 'all 0.1s ease-in-out',
    borderTopStyle: (isMenuOpen && index === 0) ? 'solid' : undefined,
    borderBottomStyle: (isMenuOpen) ? 'solid' : undefined,
    borderWidth: 'max(0.3vw, 2.25px)',
    boxSizing: 'border-box',
    height: isMenuOpen ? containerHeight : 0,
    borderBottomLeftRadius: index === (navInputMap.length - 1) ? 20 : undefined,
    borderBottomRightRadius: index === (navInputMap.length - 1) ? 20 : undefined,
  };

  const innerContainerStyle = {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }

  const contentContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 10,
  }

  const textStyle = {
    color: isHighlighted ? 'black' : '#555555',
    transition: 'color 0.1s ease-in-out',
  }

  return (
    <div
      key={item.id}
      onMouseOver={() => setIsHighlighted(true)}
      onMouseOut={() => setIsHighlighted(false)}
      style={containerStyle}>
      <button
        style={innerContainerStyle}
        onClick={() => {
          setIsMenuOpen(false);
          scrollToSection(item.ref)
        }}
      >
        <div style={contentContainerStyle}>
          <h2 style={textStyle}>{item.title}</h2>
          {icon}
        </div>
      </button>
    </div>
  );
};

const CustomDropDownButton = ({
  isMenuOpen,
  setIsMenuOpen
}) => {
  const dropDownStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: 'silver',
    borderTopStyle: 'solid',
    borderWidth: 'max(0.3vw, 2.25px)',
    gap: 10,

    cursor: 'pointer',
    boxSizing: 'border-box',
    overflow: 'hidden',
  };

  return (
    <div
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      style={dropDownStyle}
    >
      <NavToggle
        text={'Menu'}
      />
    </div>
  );
}

const NavBarColumn = ({
  navInputMap,
  scrollToSection
}) => {
  // Hook to access Redux dispatch function
  const dispatch = useDispatch();

  const scrollY = useScrollPosition(0);
  const [height] = useWindowSize();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [containerHeight, setContainerHeight] = useState(0);

  const handleSetIsMenuOpen = (isOpen) => {
    dispatch(setAppModalOpenRequest(null));
    setIsMenuOpen(isOpen);
  }

  // Close the modal if clicked outside
  const containerRef = useRef();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        handleSetIsMenuOpen(false);
      }
    };

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up the event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleSetIsMenuOpen]);

  // Set menu height
  const menuRef = useRef(null);
  useEffect(() => {
    if (isMenuOpen) {
      setContainerHeight(menuRef.current.scrollHeight * 2);
    } else {
      setContainerHeight(0);
    }
  }, [isMenuOpen]);

  // useEffect to close menu if scroll position is greater than height
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (scrollY > height) {
        handleSetIsMenuOpen(false);
      }
    }, 100);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [scrollY, height]);

  const dropDownContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    position: 'absolute',
    top: 'calc(100% - 0px)',
    left: 0,
    width: '100%',
    boxSizing: 'border-box',
    overflow: 'hidden',
  };

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
      }}>
      <CustomDropDownButton
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={handleSetIsMenuOpen}
      />
      <div
        ref={menuRef}
        style={dropDownContainerStyle}>
        {
          navInputMap.map((item, index) => (
            <CustomNavItem
              key={item.id}
              item={item}
              index={index}
              navInputMap={navInputMap}
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={handleSetIsMenuOpen}
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