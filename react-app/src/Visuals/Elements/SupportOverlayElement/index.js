import {
  forwardRef,
} from 'react';
import {
  PayPalScriptProvider,
} from "@paypal/react-paypal-js";
import useResponsive from '../../../Hooks/useResponsive';
import {
  CloseOverlayButton,
  CheckoutButton
} from '../../Buttons';

const SupportOverlayElement = forwardRef(({
  handleClose,
}, ref) => {
  const { isMobile, width } = useResponsive();

  const containerStyle = {
    position: 'absolute',
    top: 120,
    left: '50%',
    transform: 'translate(-50%, 0%)',
    zIndex: 2,
    display: 'flex',
    alignItems: 'center',
    borderRadius: 20,
    borderStyle: 'solid',
    borderWidth: 'max(0.3vw, 2.25px)',
    boxSizing: 'border-box',
    flexDirection: 'column',
    backgroundColor: 'whitesmoke',
    gap: 20,
    padding: 10,
  }

  const textStyle = {
    textAlign: 'center',
    paddingTop: 'max(4.5vw, 45px)',
  }

  const initialOptions = {
    clientId: "test",
    currency: "GDP",
    intent: "capture",
  };

  return (
    <div
      ref={ref}
      style={containerStyle}>
      <h2
        style={textStyle}
      >
        Would you please support this website?
      </h2>
      <CloseOverlayButton
        onClick={handleClose}
      />
      {/* <PayPalScriptProvider options={initialOptions}> */}
        <CheckoutButton />
      {/* </PayPalScriptProvider> */}
    </div>
  );
});

export default SupportOverlayElement;