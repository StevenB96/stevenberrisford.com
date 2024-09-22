import {
  MdOutlineSportsKabaddi,
  MdOutlineContactPhone,
  MdOutlineComputer,
  MdNewspaper
} from "react-icons/md";

const scrollToTop = (elementRef) => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
};

const getMenuIcon = ({ iconName, isHighlighted = false }) => {
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
};

export default {
  scrollToTop,
  getMenuIcon
};