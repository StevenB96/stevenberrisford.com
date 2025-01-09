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
import Accordion from 'react-bootstrap/Accordion';
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
        <iframe
            src={webPage.media_link}
            title={webPage.title}
            width={'100%'}
            height={'100%'}
        >
        </iframe>
    );
};

const ImageElement = ({ image }) => {
    return (
        <img
            src={image.media_link}
            alt={image.title}
            style={{
                objectFit: 'cover',
                width: '100%',
                height: '100%',
            }}
        />
    );
};

const VideoElement = ({ video }) => {
    return (
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
    );
};

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

    return (
        <div
            style={{
                borderStyle: 'solid',
                boxSizing: 'border-box',
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                flexDirection: 'column',
                backgroundColor: 'grey',
                width: '75%',
                height: '100%',
            }}>
            <div
                style={{
                    padding: '2%',
                }}>
                {
                    item.title ?
                        <h3 style={{ margin: '2%' }}>{item.title}</h3> :
                        null
                }
                {
                    item.description ?
                        <p style={{ margin: '2%' }}>{item.description}</p> :
                        null
                }
            </div>
            {media}
        </div>
    );
};

const ProjectCarousel = ({ content }) => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
            slidesToSlide: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 3,
            slidesToSlide: 3
        }
    };

    return (
        <div
            style={{
                width: '100%',
                borderStyle: 'solid',
                borderColor: 'lightgrey',
                borderBox: 'solid',
            }}>
            <Carousel
                showDots={false}
                responsive={responsive}
                infinite={true}
                autoPlay={false}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                // customTransition="all .5"
                transitionDuration={300}
                itemClass="carousel-item"
            >
                {
                    content.map(item => (
                        <GeneralElement
                            key={item?.id}
                            item={item}
                        />
                    ))
                }
            </Carousel>
        </div>

    );
}

const App = () => {
    const dispatch = useDispatch();
    const { profiles } = useSelector(state => state.app);

    useEffect(() => {
        dispatch(getSiteRequest());
        dispatch(getProfilesRequest());
    }, [dispatch]);

    const hasProfiles = profiles?.length > 0 && profiles[0]?.projectData?.length > 0;

    const appStyle = {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100%',
        border: '1px solid black',
        boxSizing: 'border-box'
    };

    const accordionBodyStyle = {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        border: '1px solid grey'
    };

    return (
        <div style={appStyle}>
            {hasProfiles ? (
                <Accordion>
                    {profiles[0].projectData.map(project => {
                        const content = profiles[0].contentData.filter(contentItem => contentItem.project === project.id);
                        return content.length > 0 ? (
                            <Accordion.Item key={project.id} eventKey={project.id.toString()}>
                                <Accordion.Header>{project.title || null}</Accordion.Header>
                                <Accordion.Body>
                                    <div style={accordionBodyStyle}>
                                        {project.description && <h2>{project.description}</h2>}
                                        <ProjectCarousel content={content} />
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        ) : (
                            <Accordion.Item key={project.id} eventKey={project.id.toString()}>
                                <Accordion.Header>{project.title || null}</Accordion.Header>
                                <Accordion.Body>
                                    <p>No content available.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                        );
                    })}
                </Accordion>
            ) : (
                <p>No profiles available.</p>
            )}
        </div>
    );
};

export default App;