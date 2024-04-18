import YouTube from 'react-youtube';

function Content({ item }) {
  const onPlayerReady = (event) => {
    event.target.pauseVideo();
  }

  let component;
  switch (item?.media_type) {
    case 1:
      component = (
        <img
          src={item.media_link}
          alt={item.title}
          style={{
            width: '100%',
            aspectRatio: 1,
            objectFit: 'cover',
          }} />
      );
      break;
    case 3: 
      component = (
        <YouTube
          videoId={item.media_link}
          opts={{
            width: '100%',
            playerVars: {
              autoplay: 1,
            }
          }}
          onReady={onPlayerReady}
        />
      );
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
          width: '50%',
          objectFit: 'cover',
          borderRadius: 50,
          margin: 40,
          overflow: 'hidden',
          backgroundColor: 'lightgray',
          boxShadow: 'rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px',
        }}>
        <a
          style={{
            textDecoration: 'none',
            color: 'black',
          }}
          href={item.link}>
          {component}
          <div
            style={{
              margin: 30,
            }}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Content;
