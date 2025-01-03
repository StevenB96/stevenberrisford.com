import {
  useState,
} from 'react';
import { FaHandPointLeft  } from "react-icons/fa6";

function ProjectElement({ project }) {
  const [isHighlighted, setIsHighlighted] = useState(false);
  const linkHighlightColour = 'forestgreen';
  const linkColour = '#555555';

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
        overflow: 'hidden',
        borderRadius: 10,
        boxSizing: 'border-box',
      }}
      href={project.link}
      target="_blank"
      rel="noreferrer"
    >
      <div
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
            width: '100%',
            aspectRatio: 1,
            objectFit: 'cover',
            transform: (isHighlighted && !!project.link) ? 'scale(1.1)' : undefined,
            transition: 'transform 0.1s ease-in-out',
          }} />
        {
          !!project.link && (
            <div
              style={{
                borderStyle: 'solid',
                borderWidth: 3,
                aspectRatio: 1,
                width: '16%',
                boxSizing: 'border-box',
                borderRadius: '50%',
                position: 'absolute',
                top: 5,
                right: 5,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'whitesmoke',
                borderColor: isHighlighted ? linkHighlightColour : linkColour,
                rotate: '-30deg',
              }}>
              <FaHandPointLeft 
                size={'70%'}
                color={isHighlighted ? linkHighlightColour : linkColour}
                style={{}}
              />
            </div>
          )
        }
      </div>
    </a>
  );
}

export default ProjectElement;
