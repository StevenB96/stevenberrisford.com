import YouTube from 'react-youtube';
import BaseComponent from '../../BaseComponent';

function YoutubeComponent({ hobby }) {
  return (
    <BaseComponent>
      <h3>{hobby.title}</h3>
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
      <p
        style={{
          textAlign: 'left',
          margin: 0,
          whiteSpace: 'pre-wrap',
        }}
      >{hobby.text}</p>
    </BaseComponent>
  );
}

export default YoutubeComponent;