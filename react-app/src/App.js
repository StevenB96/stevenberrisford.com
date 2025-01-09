import React, {
    useEffect,
    useState
} from 'react';
import {
    useDispatch,
    useSelector
} from 'react-redux';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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

const GeneralElement = ({ item }) => {
    if (item.type = WEB_PAGE_MEDIA_TYPE) {
        return (
            <WebPage webPage={item} />
        );
    };
    if (item.type = WEB_PAGE_MEDIA_TYPE) {
        return (
            <WebPage webPage={item} />
        );
    };
    if (item.type = WEB_PAGE_MEDIA_TYPE) {
        return (
            <ImageElement image={item} />
        );
    };
    if (item.type = WEB_PAGE_MEDIA_TYPE) {
        return (
            <VideoElement video={item} />
        );
    };
    return null;
};

const ProjectCarousel = ({ content }) => {
    const responsive = {
        desktop: {
            breakpoint: { max: 2000, min: 0 },
            items: 4
        }
    };

    return (
        <div style={{ width: '100%', }}>
            <Carousel responsive={responsive}>
                {content.map((item) => <GeneralElement item={item} />)}
            </Carousel>
        </div>

    );
}

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

    const hasProfiles = profiles && profiles.length > 0 && profiles[0]?.projectData && profiles[0].projectData.length > 0;

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
        }}>
            {hasProfiles ? (
                profiles[0].projectData.map(project => {
                    const content = profiles[0].contentData.filter(contentItem => contentItem.project === project.id);

                    return (
                        <div
                            key={project.id}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                flexDirection: 'column',
                            }}>
                            {
                                project.title ?
                                    <h1>{project.title}</h1> :
                                    null
                            }
                            {
                                project.description ?
                                    <h2>{project.description}</h2> :
                                    null
                            }
                            <ProjectCarousel content={content} />
                        </div>
                    );
                })
            ) : (
                <span>
                    No profiles available.
                </span>
            )}
        </div>
    );
};

export default App;