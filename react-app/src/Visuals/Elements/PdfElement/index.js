function PdfElement({ article }) {
  return (
    <iframe
      src={article.media_link}
      title="PDF Viewer"
      width="100%"
      style={{
        borderStyle: 'none',
        aspectRatio: 1,
        display: 'flex',
      }}
    />
  );
}

export default PdfElement;