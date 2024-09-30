import {
  forwardRef,
} from 'react';
import {
  CloseOverlayButton,
  PaypalPayment
} from '../../Buttons';

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

const SupportOverlayElement = forwardRef(({
  isOpen,
  handleClose,
}, ref) => {
  if (!isOpen) return null;

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
          onClick={handleClose}
        />
      </DisabledContinater>
      <h2
        style={textStyle}
      >
        Please support me (and this website).<br /><br />
        Would you please contribute 20p.
      </h2>
      <PaypalPayment />
    </div>
  );
});

export default SupportOverlayElement;