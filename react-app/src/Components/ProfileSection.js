import {
    useSelector,
} from 'react-redux';

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
        width: '35vw',
        minHeight: '100vh',
        padding: '2vw',
        // Border
        borderRightStyle: 'solid',
        // Background and Overflow
        backgroundColor: 'whitesmoke',
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