import {
  useState,
  useRef,
} from 'react';
import { FaLocationCrosshairs } from "react-icons/fa6";
import BaseComponent from '../BaseComponent';
import Card from 'react-bootstrap/Card';

function ProjectComponent({ project }) {
  const [isHighlighted, setIsHighlighted] = useState(false);
  const iconContainerRef = useRef(null);

  return (
    <BaseComponent>
      <Card.Title><h3>{project.title}</h3></Card.Title>
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
              transition: 'width 0.25s ease-in-out',
            }} />
          {
            project.link && (
              <div
              style={{
                border: 'solid',
                borderWidth: iconContainerRef?.current?.offsetWidth * 0.01,
                aspectRatio: 1,
                width: iconContainerRef?.current?.offsetWidth * 0.15,  
                boxSizing: 'border-box', 
                borderRadius: '50%',  
                position: 'absolute',
                top: 0,
                right: 0,        
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
                borderColor: 'red',
              }}>
              <FaLocationCrosshairs
                size={iconContainerRef?.current?.offsetWidth * 0.1}
                color={'red'}
                style={{}}
              />
              </div>
            )
          }
        </div>
      </a>
      <Card.Text>
        <p
          style={{
            textAlign: 'left',
            margin: 0,
            whiteSpace: 'pre-wrap',
          }}
        >{project.text}</p>
      </Card.Text>
    </BaseComponent>
  );
}

export default ProjectComponent;
