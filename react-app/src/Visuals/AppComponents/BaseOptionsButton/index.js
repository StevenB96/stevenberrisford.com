import {
  memo,
} from 'react';

const BaseOptionsButton = memo(({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '7%',
        borderRadius: 15,
        borderStyle: 'solid',
        borderWidth: 'max(0.4vw, 3px)',
        backgroundColor: 'whitesmoke',
      }}
    >
      { children }
    </button>
  );
});

export default BaseOptionsButton;