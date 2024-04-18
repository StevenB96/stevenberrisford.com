import {
  useState,
} from 'react';
import {
  useSelector
} from 'react-redux';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Content from './Content';

function Hobbies({ }) {
  const hobbies = useSelector(state => state.app.hobbies);
  const [activeTab, setActiveTab] = useState(0);

  return hobbies && hobbies.length > 0 ?
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
          beforeChange={(oldIndex, newIndex) => setActiveTab(newIndex)}
          initialSlide={0}
        >
          {
            hobbies.map((item, index) => {
              return <Content
                key={item.id}
                item={item}
                tab={index}
                activeTab={activeTab}
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

export default Hobbies;