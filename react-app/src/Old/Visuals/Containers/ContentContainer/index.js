import {
  memo,
} from 'react';

import {
  PdfElement,
  ProjectElement,
  YoutubeElement,
} from '../../Elements';

import {
  BaseContentElement,
} from '../../Layouts';

const ContentContainer = ({ item }) => {
  let content = null;

  switch (item.media_type) {
    case 1:
      content = <ProjectElement
        key={item.id}
        project={item}
      />;
      break;
    case 2:
      content = <PdfElement
        key={item.id}
        article={item}
      />;
      break;
    case 3:
      content = <YoutubeElement
        key={item.id}
        hobby={item}
      />;
      break;
  }

  const containerStyle = {
    display: 'flex',
    gap: 'max(1vw, 5px)',
    flexDirection: 'column',
  }

  return (
    <BaseContentElement>
      <div style={containerStyle}>
        <h3 style={{
          margin: 0,
          marginTop: 'min(max(1vw, 5px), 10px)',
        }}>{item.title}</h3>
        <p
          style={{
            textAlign: 'left',
            margin: 0,
            whiteSpace: 'pre-wrap',
            marginBottom: 10,
          }}
        >{item.text}
        </p>
      </div>
      {content}
    </BaseContentElement>
  );
};

export default memo(ContentContainer);