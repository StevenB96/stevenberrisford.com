import BaseComponent from '../../BaseComponent';

function PdfComponent({ article }) {
  return (
    <BaseComponent>
      <h3>{article.title}</h3>
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
      <p
        style={{
          textAlign: 'left',
          margin: 0,
          whiteSpace: 'pre-wrap',
        }}
      >{article.text}</p>
    </BaseComponent>
  );
}

export default PdfComponent;