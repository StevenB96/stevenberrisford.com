import YouTube from 'react-youtube';
import {
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  TiZoomIn
} from "react-icons/ti";


const PDFComponent = ({
  item,
  type,
}) => {
  return (
    <iframe
      src={item.media_link}
      title="PDF Viewer"
      width="100%"
      style={{
        border: "none",
        aspectRatio: 1,
        display: 'flex',
        backgroundColor: 'black',
      }}
    />
  );
};

const ImageComponent = ({
  item,
  type,
}) => {
  return (
    <a
      style={{
        textDecoration: 'none',
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        aspectRatio: 1,
      }}
      href={item.link}>
      <img
        src={item.media_link}
        alt={item.title}
        style={{
          width: '100%',
          objectFit: 'cover',
        }} />
    </a>
  );
}

const YoutubeComponent = ({
  item,
  activeTab,
  tab,
  type,
  setPlayerRef,
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

  useEffect(() => {
    setPlayerRef(playerRef);
  }, []);

  if (!playerRef) {
    return null;
  }

  return (
    <YouTube
      ref={playerRef}
      videoId={item.media_link}
      opts={{
        width: '100%',
        height: '100%',
        playerVars: {
          autoplay: 0,
        }
      }}
      style={{
        display: 'flex',
        aspectRatio: 16 / 9,
        backgroundColor: 'black',
      }}
    />
  );
}

function Content({
  item,
  activeTab,
  tab,
  handleZoom,
  type,
}) {
  const [hovered, setHovered] = useState(false);
  const [playerRef, setPlayerRef] = useState(null);

  const content = (type) => {
    let component;
    switch (item?.media_type) {
      case 1:
        component = <ImageComponent
          item={item}
          type={type}
        />
        break;
      case 2:
        component = <PDFComponent
          item={item}
          type={type}
        />
        break;
      case 3:
        component = <YoutubeComponent
          setPlayerRef={setPlayerRef}
          item={item}
          activeTab={activeTab}
          tab={tab}
          type={type}
        />
        break;
    }
    return (
      <>
        <div
          style={{
            cursor: 'pointer',
          }}>
          {component}</div>
        <div
          style={{
            borderTop: 'solid',
            padding: 'min(30px, 4vw)',
            userSelect: 'none',
          }}>
          <h3
            style={{
              fontSize: type === 'fullScreen' ? 'min(calc(8vw / (2 / 1)), 2.34em)' : null,
              margin: 0,
              whiteSpace: 'pre-wrap',
            }}>{item.title}</h3>
          <p
            style={{
              fontSize: (type === 'fullScreen') ? 'min(calc(8vw / (2 /  1.17)), 2em)' : null,
              margin: 0,
              whiteSpace: 'pre-wrap',
            }}>{item.text}</p>
        </div>
      </>
    );
  }

  const handleZoomClick = () => {
    if (playerRef?.current?.internalPlayer) {
      playerRef.current.internalPlayer.seekTo(0);
      playerRef.current.internalPlayer.pauseVideo();
    }

    handleZoom({
      content: content('fullScreen')
    })
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
          margin: 40,
          overflow: 'hidden',
          backgroundColor: '#FFFFFF',
          boxShadow: '1px 1px 1px rgba(0, 0, 0, 0.13), 2px 2px 2px rgba(0, 0, 0, 0.13), 3px 3px 3px rgba(0, 0, 0, 0.13), 4px 4px 4px rgba(0, 0, 0, 0.13), 16px 16px 16px rgba(0, 0, 0, 0.13)',
        }}>
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
            width: 'min(10%, 150px)',
            border: 'solid',
            borderWidth: '0px 0px 4px 4px',
            aspectRatio: 1,
            borderBottomLeftRadius: '50%',
            cursor: 'pointer',
            background: '#FFFFFF',
          }}
          onClick={() => handleZoomClick()}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <TiZoomIn
            size={'100%'}
            color={hovered ? '#000000' : '#2B61AA'}
            style={{
            }}
          />
        </div>
        {content('normal')}
      </div>
    </div >
  );
}

export default Content;
