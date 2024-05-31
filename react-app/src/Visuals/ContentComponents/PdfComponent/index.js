import BaseComponent from '../BaseComponent';
import Card from 'react-bootstrap/Card';

function PdfComponent({ article }) {
  return (
    <BaseComponent>
      <Card.Title><h3>{article.title}</h3></Card.Title>
      <iframe
        src={article.media_link}
        title="PDF Viewer"
        width="100%"
        style={{
          border: "none",
          aspectRatio: 1,
          display: 'flex',
        }}
      />
      <Card.Text>
        <p
          style={{
            textAlign: 'left',
            margin: 0,
            whiteSpace: 'pre-wrap',
          }}
        >{article.text}</p>
      </Card.Text>
    </BaseComponent>
  );
}

export default PdfComponent;