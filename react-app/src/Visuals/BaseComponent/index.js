import Card from 'react-bootstrap/Card';

function PdfComponent({ children }) {
  return (
    <Card
      style={{
        display: 'flex',
        padding: 20,
        margin: 20,
        width: 'calc(50% - 40px)',
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