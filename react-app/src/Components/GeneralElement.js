import React from 'react';
import { IMAGE_MEDIA_TYPE, PDF_MEDIA_TYPE, VIDEO_MEDIA_TYPE, WEB_PAGE_MEDIA_TYPE } from '../constants/types';
import ImageElement from './ImageElement';
import WebPage from './WebPage';
import VideoElement from './VideoElement';

const GeneralElement = ({ item }) => {
    let media = null;

    switch (item.media_type) {
        case IMAGE_MEDIA_TYPE:
            media = <ImageElement image={item} />;
            break;
        case PDF_MEDIA_TYPE:
            media = <WebPage webPage={item} />;
            break;
        case VIDEO_MEDIA_TYPE:
            media = <VideoElement video={item} />;
            break;
        case WEB_PAGE_MEDIA_TYPE:
            media = <WebPage webPage={item} />;
            break;
        default:
            media = null;
    }

    const containerStyle = {
        borderStyle: 'solid',
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'column',
        backgroundColor: 'grey',
        width: '75%',
        height: '100%',
    };

    return (
        <div
            style={containerStyle}>
            <div
                style={{
                    boxSizing: 'border-box',
                    padding: '2%',
                    width: '100%',
                }}>
                {item.title && <h3>{item.title}</h3>}
                {item.description && <p>{item.description}</p>}
            </div>
            {media}
        </div>
    );
};

export default GeneralElement;