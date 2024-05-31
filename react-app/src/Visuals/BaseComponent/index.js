import {
  useWindowSize,
} from '@react-hook/window-size';
import Card from 'react-bootstrap/Card';

function PdfComponent({ children }) {
  const [width, height] = useWindowSize();
  const a = 50;
  const b = 200;
  const c = 0.5;

  const cardDimensionStyles = {
    padding: a,
    margin: a,
    width: `calc(( 100% / ${Math.floor((width / b) ** c)} ) - ${a * 2}px)`,
  }

  return (
    <Card
      style={{
        display: 'flex',
        ...cardDimensionStyles,
        boxSizing: 'border-box',
        border: 'solid',
        borderRadius: 20,
        backgroundColor: 'lightgrey',
      }}>
      <Card.Body
        style={{
          width: '100%',
          boxSizing: 'border-box',
        }}>
          { children }
      </Card.Body>
    </Card>
  );
}

export default PdfComponent;