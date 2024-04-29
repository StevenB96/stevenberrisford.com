import YouTube from 'react-youtube';
import {
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  TiZoomIn
} from "react-icons/ti";


const PDFComponent = ({ item }) => {
  return (
    <iframe
      src={item.media_link}
      title="PDF Viewer"
      width="100%"
      style={{
        border: "none",
        aspectRatio: 1,
        display: 'flex',
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
        width: '100%',
        aspectRatio: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
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

const YoutubeComponent = ({
  item,
  activeTab,
  tab
}) => {
  const playerRef = useRef(null);

  useEffect(() => {
    if (playerRef?.current?.internalPlayer) {
      playerRef.current.internalPlayer.seekTo(0);
      playerRef.current.internalPlayer.pauseVideo();
    }
  }, [activeTab === tab]);

  useEffect(() => {
    if (playerRef?.current?.internalPlayer) {
      playerRef.current.internalPlayer.seekTo(0);
      playerRef.current.internalPlayer.pauseVideo();
    }
  }, [tab]);

  if (!playerRef) {
    return null;
  }

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
      style={{
        display: 'flex',
      }}
    />
  );
}

function Content({
  item,
  activeTab,
  tab
}) {
  const [hovered, setHovered] = useState(false);
  const [contentFullScreen, setContentFullScreen] = useState(false);

  let component;
  let borderRadius;
  switch (item?.media_type) {
    case 1:
      component = <ImageComponent item={item} />
      borderRadius = 'min(50px, 5vw)'
      break;
    case 2:
      component = <PDFComponent item={item} />
      borderRadius = '0px 0px min(50px, 5vw) min(50px, 5vw)'
      break;
    case 3:
      component = <YoutubeComponent
        item={item}
        activeTab={activeTab}
        tab={tab} />
      borderRadius = '0px 0px min(50px, 5vw) min(50px, 5vw)'
      break;
  }

  return (
    <div
      style={{
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        width: '100%',
      }}>
      <div
        style={{
          position: 'relative',
          border: 'solid',
          width: '100%',
          maxWidth: 500,
          objectFit: 'cover',
          borderRadius,
          margin: 40,
          overflow: 'hidden',
          backgroundColor: '#FFFFFF',
          boxShadow: 'rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px',
        }}>
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
            height: 100,
            aspectRatio: 1,
            borderRadius: '50%',
            cursor: 'pointer',
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <TiZoomIn
            size={100}
            color={hovered ? 'lightgrey' : '#FFFFFF'}
            style={{
            }}
          />
        </div>
        {
          contentFullScreen
            ?
            null
            :
            component
        }
        <div
          style={{
            borderTop: 'solid',
            padding: 'min(30px, 4vw)',
            userSelect: 'none',
          }}>
          <h3
            style={{
              margin: 0,
              whiteSpace: 'pre-wrap',
            }}>{item.title}</h3>
          <p
            style={{
              margin: 0,
              whiteSpace: 'pre-wrap',
            }}>{item.text}</p>
        </div>
      </div>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          aspectRatio: 1,
          backgroundColor: 'yellow',
        }}
      >a</div>
    </div >
  );
}

export default Content;
