import YouTube from 'react-youtube';
import BaseComponent from '../BaseComponent';
import Card from 'react-bootstrap/Card';

function YoutubeComponent({ hobby }) {
  return (
    <BaseComponent>
      <Card.Title><h3>{hobby.title}</h3></Card.Title>
      <YouTube
        // ref={playerRef}
        width='100%'
        className="youtube_video"
        videoId={hobby.media_link}
        opts={{
          playerVars: {
            autoplay: 0,
          }
        }}
        style={{}}
      />
      <Card.Text>
        <p
          style={{
            textAlign: 'left',
            margin: 0,
            whiteSpace: 'pre-wrap',
          }}
        >{hobby.text}</p>
      </Card.Text>
    </BaseComponent>
  );
}

export default YoutubeComponent;