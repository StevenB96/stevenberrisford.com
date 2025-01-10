import React from 'react';

const WebPage = ({ webPage }) => {
    return (
        <iframe
            src={webPage.media_link}
            title={webPage.title}
            width={'100%'}
            height={'100%'}
            style={{ 
                border: 0,
            }}
        />
    );
};

export default WebPage;