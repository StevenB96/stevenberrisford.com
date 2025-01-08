import React, {
    useEffect,
    useState
} from 'react';
import {
    useDispatch,
    useSelector
} from 'react-redux';
import Slider from "react-slick";
import YouTube from 'react-youtube';
import {
    getSiteRequest,
    getProfilesRequest,
} from './Redux/Actions/appActions';
import {
    IMAGE_MEDIA_TYPE,
    PDF_MEDIA_TYPE,
    VIDEO_MEDIA_TYPE,
    WEB_PAGE_MEDIA_TYPE,
} from './constants/types';

const WebPage = ({
    webPage
}) => {
    return (
        <div
            style={{
                borderStyle: 'solid',
                width: 300,
                aspectRatio: 1,
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
            }}>
            <h2>{webPage.title}</h2>
            <iframe
                src={webPage.media_link}
                title={webPage.title}
                width={'100%'}
                height={'100%'}
            >
            </iframe>
        </div>
    );
};

const ImageElement = ({ image }) => {
    return (
        <div
            style={{
                borderStyle: 'solid',
                width: 300,
                aspectRatio: 1,
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
            }}>            <h2>{image.title}</h2>
            <p>{image.text}</p>
            <img
                src={image.media_link}
                alt={image.title}
                width={'100%'}
                height={'100%'}
                style={{ objectFit: 'cover' }}
            />
        </div>
    );
};

const VideoElement = ({ video }) => {
    return (
        <div
            style={{
                borderStyle: 'solid',
                width: 300,
                aspectRatio: 1,
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
            }}>
            <h2>{video.title}</h2>
            <p>{video.text}</p>
            <YouTube
                // ref={playerRef}
                // width={squareSize}
                // height={squareSize}
                className="youtube_video"
                videoId={video.media_id}
                opts={{
                    playerVars: {
                        autoplay: 0,
                    }
                }}
                style={{}}
            />
        </div>
    );
};

const GeneralElement = ({ val }) => {
    if (val.type = WEB_PAGE_MEDIA_TYPE) {
        return (
            <WebPage webPage={val} />
        );
    };
    if (val.type = WEB_PAGE_MEDIA_TYPE) {
        return (
            <WebPage webPage={val} />
        );
    };
    if (val.type = WEB_PAGE_MEDIA_TYPE) {
        return (
            <ImageElement image={val} />
        );
    };
    if (val.type = WEB_PAGE_MEDIA_TYPE) {
        return (
            <VideoElement video={val} />
        );
    };
};

const App = ({
}) => {
    const dispatch = useDispatch();

    const {
        site,
        profiles,
    } = useSelector(state => state.app);

    useEffect(() => {
        dispatch(getSiteRequest());
        dispatch(getProfilesRequest());
    }, [dispatch]);

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
        }}>
            {profiles[0]?.projectData.map(project => {
                const content = profiles[0].contentData.filter((content) => content.project = project.id);
                return (
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            flexDirection: 'column',
                        }}>
                        <h1>{project.title}</h1>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                flexDirection: 'row',
                            }}>
                            {content.map(val => {
                                return (
                                    <GeneralElement val={val} />

                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default App;