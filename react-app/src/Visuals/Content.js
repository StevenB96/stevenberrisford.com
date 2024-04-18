import YouTube from 'react-youtube';
import {
  useEffect,
  useRef,
} from 'react';

const PDFComponent = ({ item }) => {
  return (
    <iframe
      src={item.media_link}
      title="PDF Viewer"
      width="100%"
      style={{
        border: "none",
        aspectRatio: 1,
      }}
    />
  );
};

const ImageComponent = ({ item }) => {
  return (
    <a
      style={{
        textDecoration: 'none',
        color: 'black',
      }}
      href={item.link}>
      <img
        src={item.media_link}
        alt={item.title}
        style={{
          width: '100%',
          aspectRatio: 1,
          objectFit: 'cover',
        }} />
    </a>
  );
}

const YoutubeComponent = ({ item, activeTab, tab }) => {
  const playerRef = useRef(null);

  useEffect(() => {
    playerRef.current.internalPlayer.seekTo(0);
    playerRef.current.internalPlayer.pauseVideo();
  }, [activeTab === tab]);

  useEffect(() => {
    if (activeTab !== tab) {
      if (playerRef.current && playerRef.current.internalPlayer) {
        playerRef.current.internalPlayer.seekTo(0);
        playerRef.current.internalPlayer.pauseVideo();
      }
    }
  }, [tab]);

  return (
    <YouTube
      ref={playerRef}
      videoId={item.media_link}
      opts={{
        width: '100%',
        playerVars: {
          autoplay: 0,
        }
      }}
    />
  );
}

function Content({ item, activeTab, tab }) {
  let component;
  let borderRadius;
  switch (item?.media_type) {
    case 1:
      component = <ImageComponent item={item} />
      borderRadius = '50px'
      break;
    case 2:
      component = <PDFComponent item={item} />
      borderRadius = '0px 0px 50px 50px'
      break;
    case 3:
      component = <YoutubeComponent
        item={item}
        activeTab={activeTab}
        tab={tab} />
      borderRadius = '0px 0px 50px 50px '
      break;
  }

  return (
    <div
      style={{
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
      }}>
      <div
        style={{
          width: '100%',
          maxWidth: 500,
          objectFit: 'cover',
          borderRadius,
          margin: 40,
          overflow: 'hidden',
          backgroundColor: 'lightgray',
          boxShadow: 'rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px',
        }}>
        {component}
        <div
          style={{
            margin: 30,
          }}>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </div>
      </div>
    </div >
  );
}

export default Content;
