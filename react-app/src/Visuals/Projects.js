import {
  useSelector
} from 'react-redux';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Content from './Content';

function Projects({ }) {
  const projects = useSelector(state => state.app.projects);

  if (projects && projects?.length < 2) {
    return (
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center'
        }}>
        <Content
          item={projects[0]}
          tab={0}
          activeTab={0}
        />
      </div>
    );
  }

  return projects && projects?.length > 0 ?
    (
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}>
        <Slider
          style={{
            width: '100%',
          }}
          accessibility={true}
          draggable={true}
          dots={true}
          infinite={true}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
        >
          {
            projects.map(item => {
              return <Content
                key={item.id}
                item={item}
              />
            }
            )
          }
        </Slider>
      </div>
    )
    :
    null;
}

export default Projects;
