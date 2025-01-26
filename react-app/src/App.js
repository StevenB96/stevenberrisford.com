import React, {
    useEffect,
    useState,
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
import { CiUnread } from "react-icons/ci";
import { Divider } from "@fluentui/react-components";

import {
    Accordion,
} from "@fluentui/react-components";

import ProjectsSection from './Components/ProjectsSection';
import ProfileSection from './Components/ProfileSection';

import {
    IMAGE_MEDIA_TYPE,
    PDF_MEDIA_TYPE,
    VIDEO_MEDIA_TYPE,
    WEB_PAGE_MEDIA_TYPE
} from './constants/types';
import ImageElement from './Components/ImageElement';
import WebPage from './Components/WebPage';
import VideoElement from './Components/VideoElement';


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
                // Positioning
                position: 'absolute',
                top: 0,
                right: 0,
                // Size and Shape
                height: '5vw',
                width: '5vw',
                borderRadius: '50%',
                // Color and Background
                backgroundColor: 'white',
                borderStyle: 'solid',
                // Transform and Alignment
                transform: 'translate(25%, -25%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <CiUnread size={'70%'} style={{ strokeWidth: '0.05vw', }} />
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

    const [openSection, setOpenSection] = useState(1);

    const handleToggleSection = (_, data) => {
        setOpenSection(
            openSection === data.value ?
                0 :
                data.value
        )
    };

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
        minHeight: '100vh',
    };

    const sectionContainerStyle = {
        backgroundColor: 'lightgrey',
        width: '100%',
    }

    return (
        <div style={appStyle}>
            <div style={containerStyle}>
                <ProfileSection />
                <Divider vertical={true} />
                <div style={sectionContainerStyle}>
                    <Accordion
                        onToggle={handleToggleSection}
                        openItems={setOpenSection}
                        collapsible
                    >
                        <ProjectsSection
                            openSection={openSection}
                        />
                    </Accordion>
                </div>
            </div>
            {activeContentDisplay &&
                <ContentOverlay />
            }
        </div>
    );
};

export default App;