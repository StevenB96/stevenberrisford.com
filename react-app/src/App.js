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
import {
    FaChevronUp,
    FaChevronDown
} from "react-icons/fa";
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
                justifyContent: 'center',
                alignItems: 'center',
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
};

const ProjectGroup = ({ project }) => {
    const [displayCarousel, setDisplayCarousel] = useState(false);

    const bodyStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
    };

    const buttonStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const content = project?.contentData || [];

    return (
        <div key={project.id} eventKey={project.id.toString()}>
            <div style={buttonStyle}>
                <h1 style={{ margin: '1%' }}>{project.title || "No Title"}</h1>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    onClick={(e) => setDisplayCarousel(!displayCarousel)}>
                    {displayCarousel === true ?
                        <FaChevronUp /> :
                        <FaChevronDown />
                    }
                </div>
            </div>
            {
                displayCarousel === true && (
                    <div style={bodyStyle}>
                        <h2 style={{ margin: '1%' }}>{project.description || "No Description"}</h2>
                        <ProjectCarousel content={content} />
                    </div>
                )
            }
        </div>
    );
};

const ProjectsSection = ({ }) => {
    const profiles = useSelector(state => state.app.profiles);

    const hasProjects = profiles && profiles.length > 0 && profiles[0]?.projectData && profiles[0].projectData.length > 0;

    if (!hasProjects) {
        return <p>No projects available.</p>;
    };

    const projectGroups = profiles[0].projectData.map(project => {
        return <ProjectGroup key={project.id} project={project} />;
    });

    return (
        <div>
            {projectGroups}
        </div>
    );
}

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSiteRequest());
        dispatch(getProfilesRequest());
    }, [dispatch]);

    const appStyle = {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100%',
        boxSizing: 'border-box'
    };

    return (
        <div style={appStyle}>
            <ProjectsSection />
        </div>
    );
};

export default App;