import BaseComponent from '../BaseComponent';
import Card from 'react-bootstrap/Card';

function ProjectComponent({ project }) {
  return (
    <BaseComponent>
      <Card.Title><h3>{project.title}</h3></Card.Title>
      <a
        style={{
          textDecoration: 'none',
          color: 'black',
          width: '100%',
          aspectRatio: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'inline-block',
        }}
        href={project.link}
        target="_blank"
      >
        <img
          src={project.media_link}
          alt={project.title}
          style={{
            width: '100%',
            aspectRatio: 1,
            objectFit: 'cover',
          }} />
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
