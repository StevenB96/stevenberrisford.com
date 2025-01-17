import React from 'react';
import YouTube from 'react-youtube';

const VideoElement = ({ video }) => {
    return (
        <YouTube
            videoId={video.media_id}
            opts={{
                playerVars: {
                    autoplay: 0,
                }
            }}
            style={{
                borderStyle: 'solid',
                borderWidth: '0.3vw',
                borderRadius: '1vw',
            }}
        />
    );
};

export default VideoElement;