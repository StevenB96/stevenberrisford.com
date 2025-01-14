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
import ProjectsSection from './Components/ProjectsSection';

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
}

const App = () => {
    const site = useSelector(state => state.app.site);

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
        </div>
    );
};

export default App;