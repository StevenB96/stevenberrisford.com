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
} from './Redux/Actions/appActions';
import ProjectsSection from './Components/ProjectsSection';

const ProfileSection = () => {
    const profiles = useSelector(state => state.app.profiles);

    const profileExists = profiles && profiles.length > 0;

    if (!profileExists) {
        return <p>No profile available.</p>;
    }

    const containerStyle = {
        width: '40%',
        minHeight: '100vh',
        borderRightStyle: 'solid',
        boxSizing: 'border-box',
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        padding: '2vw',
    };

    return (
        <div style={containerStyle}>
            <img
                style={{
                    width: '30%',
                }}
                src={profiles[0]?.picture_link}
                alt={'Profile Picture'}
            />
            <div style={{}}>
                <h2>
                    {profiles[0]?.full_name}
                </h2>
                <h3>
                    {profiles[0]?.job_title}
                </h3>
                <p style={{ whiteSpace: 'pre-wrap', }}>
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
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
        boxSizing: 'border-box',
        background: `url(${site.background_image_link}) no-repeat center center fixed`,
    };

    const containerStyle = {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
    };

    return (
        <div style={appStyle}>
            <div style={containerStyle}>
                <ProfileSection />
                <div style={{ width: '60%' }}>
                    <ProjectsSection />
                </div>
            </div>
        </div>
    );
};

export default App;