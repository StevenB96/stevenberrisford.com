import {
  forwardRef,
} from 'react';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import {
  CloseOverlayButton,
  PaypalPayment
} from '../../Buttons';

import {
  setAppModalOpenRequest,
} from '../../../Redux/Actions/appActions';

const DisabledContinater = ({
  children
}) => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: 2,
        top: 0,
        backgroundColor: 'rgba(85, 85, 85, 0.7)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      {children}
    </div>
  );
};

const SupportOverlayElement = forwardRef(({ }, ref) => {
  // Hook to access Redux dispatch function
  const dispatch = useDispatch();

  // Accessing application state from Redux store
  const {
    appModalOpen
  } = useSelector(state => state.app);

  if (appModalOpen !== 'support') return null;

  const handleOnClick = () => {
    dispatch(
      setAppModalOpenRequest(null)
    );
  }

  const containerStyle = {
    // Positioning and Layout
    position: 'absolute',
    top: 120,
    left: '50%',
    transform: 'translate(-50%, 0%)',
    zIndex: 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'hidden',
    // Sizing and Spacing
    gap: 20,
    padding: 20,
    // Borders and Background
    borderRadius: 20,
    borderStyle: 'solid',
    borderWidth: 'max(0.3vw, 2.25px)',
    backgroundColor: 'whitesmoke',
    // Box Model
    boxSizing: 'border-box',
  };

  const textStyle = {
    textAlign: 'center',
    paddingTop: 'max(4.5vw, 45px)',
  }

  const disabledText = {
    color: 'whitesmoke',
    textAlign: 'center',
    rotate: '-20deg',
  };

  return (
    <div
      ref={ref}
      style={containerStyle}>
      <DisabledContinater>
        <h1
          style={disabledText}
        >
          PayPal integrated, but not active.
        </h1>
        <CloseOverlayButton
          onClick={handleOnClick}
        />
      </DisabledContinater>
      <h2
        style={textStyle}
      >
        Please support me (and this website).<br />
        Would you please contribute 20p.
      </h2>
      <PaypalPayment />
    </div>
  );
});

export default SupportOverlayElement;