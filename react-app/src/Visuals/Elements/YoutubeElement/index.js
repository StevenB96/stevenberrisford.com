import YouTube from 'react-youtube';

function YoutubeElement({ hobby }) {
  return (
    <YouTube
      // ref={playerRef}
      // width={squareSize}
      // height={squareSize}
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

export default YoutubeElement;