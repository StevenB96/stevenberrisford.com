import {
  useSelector
} from 'react-redux';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Content from './Content';

function ContentTab({ 
  contentType 
}) {
  const content = useSelector(state => state.app[contentType]);

  if (content && content?.length < 2) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}>
        <Content
          item={content[0]}
          tab={0}
          activeTab={0}
        />
      </div>
    );
  }

  return content && content?.length > 0 ?
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
            content.map((item) => <Content
              key={item.id}
              item={item}
            />
            )
          }
        </Slider>
      </div>
    )
    :
    null;
}

export default ContentTab;