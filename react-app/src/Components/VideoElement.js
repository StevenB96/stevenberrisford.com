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
                borderRadius: '1vw',
                borderWidth: '0.3vw',
            }}
        />
    );
};

export default VideoElement;