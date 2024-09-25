import {
  forwardRef,
} from 'react';
import {
  CloseOverlayButton,
  CheckoutButton
} from '../../Buttons';

const SupportOverlayElement = forwardRef(({
  handleClose,
}, ref) => {
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
    padding: 20,
    overflow: 'hidden',
  }

  const textStyle = {
    textAlign: 'center',
    paddingTop: 'max(4.5vw, 45px)',
  }

  return (
    <div
      ref={ref}
      style={containerStyle}>
      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          zIndex: 2,
          top: 0,
          backgroundColor: 'black',
          opacity: '0.7',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <h2 style={{ color: 'whitesmoke', }}>PayPal integrated, but not active.</h2>
      </div>
      <h2
        style={textStyle}
      >
        Please support me (and this website).<br /><br />
        Would you please contribute 20p.
      </h2>
      <CloseOverlayButton
        onClick={handleClose}
      />
      <CheckoutButton />
    </div>
  );
});

export default SupportOverlayElement;