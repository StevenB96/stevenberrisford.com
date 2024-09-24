import {
  useState,
  memo
} from 'react';
import {
  HiOutlineCurrencyPound
} from "react-icons/hi";
import useResponsive from '../../../Hooks/useResponsive';
import BaseOptionsButton from '../../Layouts/BaseOptionsButton';


const SupportButton = ({
  onClick,
}) => {
  const [isHighlighted, setIsHighlighted] = useState(false);
  const { isTablet, isMobile } = useResponsive();

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 5,
    flexDirection: (isTablet || isMobile) ? 'row' : 'column',
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
      bgColour={'#ffcc33 '}
      padding={8.5}
    >
      <div style={containerStyle}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '50%',
        }}>
          <HiOutlineCurrencyPound
            size={'max(3.3vw, 33px)'}
            color={isHighlighted ? 'black' : '#555555'}
          />
        </div>        
        <h3 style={textStyle}>Support Me</h3>
      </div>
    </BaseOptionsButton>
  );
};

export default memo(SupportButton);