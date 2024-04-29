import {
  useState,
} from 'react';
import {
  useSelector
} from 'react-redux';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  TiZoomOut
} from "react-icons/ti";
import Content from './Content';

function Tab({
  contentType
}) {
  const content = useSelector(state => state.app[contentType]);
  const [fullScreenContent, setFullScreenContent] = useState(null);
  const [hovered, setHovered] = useState(false);

  const handleZoomIn = ({
    component
  }) => {
    console.log(component);
    setFullScreenContent(component)
  }

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
          handleZoomIn={handleZoomIn}
        />
      </div>
    );
  }
  console.log(fullScreenContent);
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
        {
          fullScreenContent && (
            <div
              style={{
                position: 'absolute',
                top: '10vh',
                left: '10vw',
                width: '80vw',
                height: '80vh',
                aspectRatio: 1,
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  display: 'flex',
                  alignContent: 'center',
                  justifyContent: 'center',
                  height: 100,
                  aspectRatio: 1,
                  borderBottomLeftRadius: '50%',
                  cursor: 'pointer',
                  background: '#000000',
                }}
                onClick={() => setFullScreenContent(null)}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                <TiZoomOut
                  size={100}
                  color={hovered ? 'grey' : '#FFFFFF'}
                  style={{
                  }}
                />
              </div>
              {fullScreenContent}
            </div>
          )
        }
      </div>
    )
    :
    null;
}

export default Tab;