import {
  useState,
} from 'react';
import {
  TiZoomOut
} from "react-icons/ti";

function FullScreenContent({
  fullScreenContent,
  handleZoom,
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        position: 'absolute',
        top: '5vh',
        width: 'min(1000px, 90vw)',
        boxSizing: 'border-box',
        paddingBottom: '5vw'
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxHeight: '100%',
          backgroundColor: '#FFFFFF',
          border: 'solid',
          boxShadow: '1px 1px 1px rgba(0, 0, 0, 0.13), 2px 2px 2px rgba(0, 0, 0, 0.13), 3px 3px 3px rgba(0, 0, 0, 0.13), 4px 4px 4px rgba(0, 0, 0, 0.13), 16px 16px 16px rgba(0, 0, 0, 0.13)',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
            aspectRatio: 1,
            borderBottomLeftRadius: '50%',
            background: '#FFFFFF',
            width: '10%',
            border: 'solid',
            borderWidth: '0px 0px 5px 5px',
          }}
          onClick={() => handleZoom({
            content: null,
          })}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <TiZoomOut
            size={'100%'}
            color={hovered ? '#000000' : '#2B61AA'}
            style={{
            }}
          />
        </div>
        {fullScreenContent}
      </div>
    </div>
  );
}

export default FullScreenContent;