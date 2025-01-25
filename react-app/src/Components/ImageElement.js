import React from 'react';

const ImageElement = ({ image }) => {
    return (
        <img
            src={image.media_link}
            alt={image.title}
            style={{
                objectFit: 'cover',
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                borderStyle: 'solid',
                borderRadius: '1vw',
            }}
        />
    );
};

export default ImageElement;