import React from 'react';

const WebPage = ({ webPage }) => {
    return (
        <iframe
            src={webPage.media_link}
            title={webPage.title}
            width={'100%'}
            height={'100%'}
            style={{ 
                borderStyle: 'solid',
                borderRadius: '1vw',
                borderWidth: '0.3vw',
            }}
        />
    );
};

export default WebPage;