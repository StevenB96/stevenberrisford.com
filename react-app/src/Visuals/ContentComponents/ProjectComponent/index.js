import {
  useState,
  useRef,
} from 'react';
import { FaLocationCrosshairs } from "react-icons/fa6";

function ProjectComponent({ project }) {
  const [isHighlighted, setIsHighlighted] = useState(false);
  const iconContainerRef = useRef(null);
  const offsetWidth = iconContainerRef?.current?.offsetWidth;

  return (
    <a
      onMouseOver={() => setIsHighlighted(true)}
      onMouseOut={() => setIsHighlighted(false)}
      style={{
        textDecoration: 'none',
        color: 'black',
        width: '100%',
        aspectRatio: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      href={project.link}
      target="_blank"
      rel="noreferrer"
    >
      <div
        ref={iconContainerRef}
        style={{
          position: 'relative',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          width: '100%',
          aspectRatio: 1,
        }}>
        <img
          src={project.media_link}
          alt={project.title}
          style={{
            width: isHighlighted && project.link ?
              '95%' :
              '100%',
            aspectRatio: 1,
            objectFit: 'cover',
            transition: 'width 0.1s ease-in-out',
          }} />
        {
          project.link && (
            <div
              style={{
                borderStyle: 'solid',
                borderWidth: 'max(0.4vw, 3px)',
                aspectRatio: 1,
                width: offsetWidth ?
                  iconContainerRef?.current?.offsetWidth * 0.15 : 1,
                boxSizing: 'border-box',
                borderRadius: '50%',
                position: 'absolute',
                top: 0,
                right: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'whitesmoke',
                borderColor: 'green',
              }}>
              <FaLocationCrosshairs
                size={offsetWidth ?
                  iconContainerRef?.current?.offsetWidth * 0.1 : 1}
                color={'green'}
                style={{}}
              />
            </div>
          )
        }
      </div>
    </a>
  );
}

export default ProjectComponent;
