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

  if (hobbies && hobbies?.length < 2) {
    return (
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}>
        <Content
          item={hobbies[0]}
          tab={0}
          activeTab={0}
        />
      </div>
    );
  }

  return hobbies && hobbies?.length > 0 ?
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
          fade={false}
          infinite={true}
          speed={500}
          arrows={true}
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