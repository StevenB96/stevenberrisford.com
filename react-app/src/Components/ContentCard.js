import React from 'react';
// import { IMAGE_MEDIA_TYPE, PDF_MEDIA_TYPE, VIDEO_MEDIA_TYPE, WEB_PAGE_MEDIA_TYPE } from '../constants/types';
// import ImageElement from './ImageElement';
// import WebPage from './WebPage';
// import VideoElement from './VideoElement';
import { FaExpandAlt } from "react-icons/fa";

const ContentCard = ({
    item,
    onClick,
}) => {
    const handleOnClick = () => {
        onClick();
    };
    // let media = null;
    // const media_type = !isNaN(item.media_type) ? parseInt(item.media_type, 10) : item.media_type;

    // switch (media_type) {
    //     case IMAGE_MEDIA_TYPE:
    //         media = <ImageElement image={item} />;
    //         break;
    //     case PDF_MEDIA_TYPE:
    //         media = <WebPage webPage={item} />;
    //         break;
    //     case VIDEO_MEDIA_TYPE:
    //         media = <VideoElement video={item} />;
    //         break;
    //     case WEB_PAGE_MEDIA_TYPE:
    //         media = <WebPage webPage={item} />;
    //         break;
    //     default:
    //         media = null;
    // }

    const containerStyle = {
        borderStyle: 'solid',
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'column',
        backgroundColor: 'grey',
        width: '75%',
        padding: '1vw',
        gap: '1vw',
    };

    const titleStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexDirection: 'row',
        width: '100%',
        boxSizing: 'border-box',
    };

    const titleTextStyle = {
        margin: 0
    };

    const buttonContainerStyle = {
        minWidth: '2.5vw',
        width: '2.5vw',
    };

    const descriptionStyle = {
        margin: 0
    };

    return (
        <div style={containerStyle}>
            {item.title && (
                <div style={titleStyle}>
                    <h3 style={titleTextStyle}>{item.title}</h3>
                    <button
                        onClick={handleOnClick}
                        style={buttonContainerStyle}>
                        <FaExpandAlt size={'100%'} />
                    </button>
                </div>
            )}
            {item.description && (
                <p style={descriptionStyle}>{item.description}</p>
            )}
        </div>
    );
};

export default ContentCard;