import React, {
    useEffect,
} from 'react';
import {
    useDispatch,
    useSelector,
} from 'react-redux';
import {
    getSiteRequest,
    getProfilesRequest,
    setContentDisplayRequest,
} from './Redux/Actions/appActions';
import { FaCompressAlt } from "react-icons/fa";

import ProjectsSection from './Components/ProjectsSection';


import { IMAGE_MEDIA_TYPE, PDF_MEDIA_TYPE, VIDEO_MEDIA_TYPE, WEB_PAGE_MEDIA_TYPE } from './constants/types';
import ImageElement from './Components/ImageElement';
import WebPage from './Components/WebPage';
import VideoElement from './Components/VideoElement';

const ProfileSection = () => {
    const profiles = useSelector(state => state.app.profiles);

    const profileExists = profiles && profiles.length > 0;

    if (!profileExists) {
        return <p>No profile available.</p>;
    }

    const containerStyle = {
        // Layout
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        // Sizing
        width: '30vw',
        minHeight: '100vh',
        padding: '2vw',
        // Border
        borderRightStyle: 'solid',
        // Background and Overflow
        backgroundColor: 'white',
        overflowY: 'auto',
    };

    return (
        <div style={containerStyle}>
            <img
                style={{
                    width: '50%',
                }}
                src={profiles[0]?.picture_link}
                alt={'Profile Picture'}
            />
            <div>
                <h2>
                    {profiles[0]?.full_name}
                </h2>
                <h3>
                    {profiles[0]?.job_title}
                </h3>
                <p style={{ whiteSpace: 'pre-wrap' }}>
                    {profiles[0]?.personal_summary}
                </p>
            </div>
        </div>
    );
};

const GeneralMediaElement = ({ item }) => {
    let media = null;
    const media_type = !isNaN(item.media_type) ? parseInt(item.media_type, 10) : item.media_type;

    switch (media_type) {
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

    return media;
}

const ContentCloseButton = () => {
    const dispatch = useDispatch();

    const handleOnClick = () => {
        dispatch(setContentDisplayRequest({ activeContentDisplay: null }));
    };

    return (
        <button
            onClick={handleOnClick}
            style={{
                position: 'absolute',
                top: 0,
                right: 0,
                height: '5vw',
                width: '5vw',
                borderRadius: '50%',
                backgroundColor: 'white',
                transform: 'translate(25%, -25%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderStyle: 'solid',
            }}>
            <FaCompressAlt size={'2.5vw'} />
        </button>
    );
};

const ContentOverlay = () => {
    const { profiles, activeContentDisplay } = useSelector(state => state.app);

    const profile = profiles[0];
    const { projectId = null, itemId = null } = activeContentDisplay;

    const findContent = (projectId, itemId) => {
        if (projectId) {
            const project = profile.projectData.find(project => projectId === project.id);
            return project ? project.contentData.find(content => itemId === content.id) : null;
        }
        return profile.contentData.find(content => itemId === content.id);
    };

    const content = findContent(projectId, itemId);

    const topOffset = 50;

    return (
        <div style={{
            position: 'absolute',
            left: '20vw',
            top: topOffset,
            height: '60vw',
            maxHeight: `calc(100vh - ${2 * topOffset}px)`,
            width: '60vw',
            transform: 'translate(0vw, 0vw)',
        }}>
            <GeneralMediaElement item={content} />
            <ContentCloseButton />
        </div>
    );
};

const App = () => {
    const {
        site,
        activeContentDisplay
    } = useSelector(state => state.app);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSiteRequest());
        dispatch(getProfilesRequest());
    }, [dispatch]);

    const appStyle = {
        // Layout
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        // Background and Overflow
        background: `url(${site.background_image_link}) no-repeat center center fixed`,
        overflowX: 'hidden',
    };

    const containerStyle = {
        // Layout
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        // Sizing
        width: '100vw',
        height: '100vh',
    };

    return (
        <div style={appStyle}>
            <div style={containerStyle}>
                <ProfileSection />
                <div style={{
                    width: '70vw'
                }}>
                    <ProjectsSection />
                </div>
            </div>
            {activeContentDisplay &&
                <ContentOverlay />
            }
        </div>
    );
};

export default App;