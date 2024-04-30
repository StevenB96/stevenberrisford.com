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
import FullScreenContent from './FullScreenContent';

function Tab({
  contentType
}) {
  const content = useSelector(state => state.app[contentType]);
  const [fullScreenContent, setFullScreenContent] = useState(null);

  const handleZoom = ({
    content
  }) => {
    setFullScreenContent(content)
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
          handleZoom={handleZoom}
        />
        {
          fullScreenContent !== null && (
            <FullScreenContent
              fullScreenContent={fullScreenContent}
              handleZoom={handleZoom}
            />
          )
        }
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
              handleZoom={handleZoom}
            />
            )
          }
        </Slider>
        {
          fullScreenContent !== null && (
            <FullScreenContent
              fullScreenContent={fullScreenContent}
              handleZoom={handleZoom}
            />
          )
        }
      </div>
    )
    :
    null;
}

export default Tab;