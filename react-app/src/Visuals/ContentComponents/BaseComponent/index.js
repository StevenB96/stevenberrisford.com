import {
  useWindowSize,
} from '@react-hook/window-size';
import Card from 'react-bootstrap/Card';

function BaseComponent({ children }) {
  let [width, height] = useWindowSize();
  width = Math.min(width, 1000);
  const a = 50 * (width / 1000);
  const b = 220;
  const c = 0.6;
  const divisions = Math.floor((width / b) ** c);

  const cardDimensionStyles = {
    padding: (a * 1) / divisions,
    margin: (a * 1) / divisions,
    width: `calc(( 100% / ${divisions} ) - ${(a * 2) / divisions}px)`,
  }

  return (
    <Card
      style={{
        display: 'flex',
        ...cardDimensionStyles,
        boxSizing: 'border-box',
        border: 'solid',
        borderRadius: 20,
        backgroundColor: 'white',
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

export default BaseComponent;