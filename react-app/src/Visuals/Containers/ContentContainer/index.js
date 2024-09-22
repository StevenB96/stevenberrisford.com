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

  switch (item.content_type) {
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

  return (
    <BaseContentElement>
      <div>
        <h3>{item.title}</h3>
        <p
          style={{
            textAlign: 'left',
            margin: 0,
            whiteSpace: 'pre-wrap',
            marginBottom: 10,
          }}
        >{item.text}</p>
      </div>
      {content}
    </BaseContentElement>
  );
};

export default memo(ContentContainer);