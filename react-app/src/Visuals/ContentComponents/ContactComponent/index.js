import {
  useWindowSize,
} from '@react-hook/window-size';
import Card from 'react-bootstrap/Card';

function ContactComponent({ contactMethod }) {
  let [width, height] = useWindowSize();
  width = Math.min(width, 1400);
  const a = 180;
  const b = 220;
  const c = 0.6;
  const divisions = Math.floor((width / b) ** c);
  const margin = a / divisions;

  const cardDimensionStyles = {
    margin: margin * 0.75,
    width: `calc(( 100% / ${divisions} ) - ${(a * 2) / divisions}px)`,
  }

  return (
    <Card style={{
      ...cardDimensionStyles,
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
    }}>
      <Card.Body style={{
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        boxSizing: 'border-box',
        overflow: 'hidden',
        border: 'solid',
        borderRadius: '50%',
        flexDirection: 'column',
        width: '100%',
        aspectRatio: 1,
        padding: margin * 0.25,
        maxWidth: 300,
      }}>
        <div style={{
          aspectRatio: 1,
          height: 60,
          borderRadius: '50%',
          backgroundColor: 'lightgrey',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: 'solid',
        }} >
          {contactMethod.icon}
        </div>
        <p style={{
          whiteSpace: 'pre-wrap',
          overflow: 'hidden',
          wordWrap: 'break-word',
          width: '100%',
          textAlign: 'center',
        }}>{contactMethod.text}</p>
      </Card.Body>
    </Card>
  );
}

export default ContactComponent;