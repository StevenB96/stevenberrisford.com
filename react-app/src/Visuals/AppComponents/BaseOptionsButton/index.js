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
        borderWidth: 'max(0.4vw, 3px)',
        backgroundColor: 'whitesmoke',
      }}
    >
      { children }
    </button>
  );
});

export default BaseOptionsButton;