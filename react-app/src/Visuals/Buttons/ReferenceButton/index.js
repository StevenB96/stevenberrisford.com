import {
  useState,
  memo
} from 'react';
import {
  MdOutlineShortText
} from "react-icons/md";
import useResponsive from '../../../Hooks/useResponsive';
import BaseOptionsButton from '../../Layouts/BaseOptionsButton';


const ReferenceButton = ({
  onClick,
}) => {
  const [isHighlighted, setIsHighlighted] = useState(false);
  const { isTablet, isMobile } = useResponsive();

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 5,
    flexDirection: (isTablet || isMobile) ? 'row-reverse' : 'column',
  }

  const textStyle = {
    margin: 0,
    color: isHighlighted ? 'black' : '#555555',
    transition: 'color 0.1s ease-in-out',
  }

  return (
    <BaseOptionsButton
      setIsHighlighted={setIsHighlighted}
      onClick={onClick}
      styleOveride={{
        padding: 8.5,
      }}
    >
      <div style={containerStyle}>
        <h3 style={textStyle}>References</h3>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '50%',
        }}>
          <MdOutlineShortText
            size={'max(3.3vw, 33px)'}
            color={isHighlighted ? 'black' : '#555555'}
          />
        </div>
      </div>
    </BaseOptionsButton>
  );
};

export default memo(ReferenceButton);