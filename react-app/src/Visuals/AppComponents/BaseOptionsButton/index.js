import {
  memo,
} from 'react';

const BaseOptionsButton = memo(({ children }) => {
  return (
    <button
      style={{
        padding: '7%',
        borderRadius: 15,
        border: 'solid',
        backgroundColor: 'whitesmoke',
      }}
    >
      { children }
    </button>
  );
});

export default BaseOptionsButton;