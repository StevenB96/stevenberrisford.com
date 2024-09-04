import YouTube from 'react-youtube';
import BaseComponent from '../BaseComponent';

function YoutubeComponent({ hobby }) {
  return (
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
  );
}

export default YoutubeComponent;