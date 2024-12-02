import {
  useDispatch,
  useSelector
} from 'react-redux';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useResponsive from '../../../Hooks/useResponsive';
import { CloseOverlayButton } from '../../Buttons';

import {
  setAppModalOpenRequest,
} from '../../../Redux/Actions/appActions';

function ProfileOverlayElement({}) {
  // Hook to access Redux dispatch function
  const dispatch = useDispatch();

  // Accessing application state from Redux store
  const {
    references,
    appModalOpen
  } = useSelector(state => state.app);
  const { isMobile, isTablet } = useResponsive();

  if (appModalOpen !== 'reference') return null;

  const handleOnClick = () => {
    dispatch(
      setAppModalOpenRequest(null)
    );
  };

  const containerStyle = {
    position: 'absolute',
    top: 100,
    left: '50%',
    transform: 'translate(-50%, 0%)',
    zIndex: 2,
    display: 'flex',
    borderRadius: 20,
    borderStyle: 'solid',
    borderWidth: 'max(0.3vw, 2.25px)',
    boxSizing: 'border-box',
    width: `calc(${isMobile ? 40 : isTablet ? 30 : 35}%)`,
    maxWidth: 1400 / 1.2,
    flexDirection: 'column',
    backgroundColor: 'whitesmoke',
    padding: 10,
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div
      style={containerStyle}>
      <CloseOverlayButton
        onClick={handleOnClick}
      />
      <Slider
        style={{
        }}
        {...settings}>
        {
        references.map(reference => (
          <div>
            <h1>{reference.role}, {reference.organisation}</h1>
            <h2>{reference.text}</h2>
          </div>
        ))
        }
      </Slider>
    </div>
  );
};

export default ProfileOverlayElement;