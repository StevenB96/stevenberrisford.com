import {
  useState,
} from 'react';
import { FaLocationCrosshairs } from "react-icons/fa6";

import useResponsive from '../../../Hooks/useResponsive';

function ProjectComponent({ project }) {
  const { isTablet, isMobile } = useResponsive();
  const [isHighlighted, setIsHighlighted] = useState(false);

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
                borderWidth: (isTablet ? 2 : (isMobile ? 2 : 4)),
                aspectRatio: 1,
                width: '16%',
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
                size={'70%'}
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
