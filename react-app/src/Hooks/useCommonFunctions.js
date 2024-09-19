import {
  useCallback,
} from 'react';
import {
  MdOutlineSportsKabaddi,
  MdOutlineContactPhone,
  MdOutlineComputer,
  MdNewspaper
} from "react-icons/md";

const useCommonFunctions = () => {
  // Function to smoothly scroll to a section
  const scrollToTop = useCallback((elementRef) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }, []);

  const getMenuIcon = useCallback(({ iconName, isHighlighted = false }) => {
    let icon = null;

    switch (iconName) {
      case 'MdOutlineComputer':
        icon = <MdOutlineComputer
          size={'max(3vw, 20px)'}
          color={isHighlighted ? 'black' : '#555555'} />;
        break;
      case 'MdNewspaper':
        icon = <MdNewspaper
          size={'max(3vw, 20px)'}
          color={isHighlighted ? 'black' : '#555555'} />;
        break;
      case 'MdOutlineSportsKabaddi':
        icon = <MdOutlineSportsKabaddi
          size={'max(3vw, 20px)'}
          color={isHighlighted ? 'black' : '#555555'} />;
        break;
      case 'MdOutlineContactPhone':
        icon = <MdOutlineContactPhone
          size={'max(3vw, 20px)'}
          color={isHighlighted ? 'black' : '#555555'} />;
        break;
    }

    return icon;
  }, []);

  return { scrollToTop, getMenuIcon };
};

export default useCommonFunctions;