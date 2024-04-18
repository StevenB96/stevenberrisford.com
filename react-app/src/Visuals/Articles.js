import {
  useSelector
} from 'react-redux';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Content from './Content';

function Articles({ }) {
  const articles = useSelector(state => state.app.articles);

  return articles ?
    (
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}>
        <Slider
          style={{
            maxWidth: 1000,
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
            articles.map(item => {
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

export default Articles;