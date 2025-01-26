import {
    useState
} from 'react';
import {
    useSelector,
} from 'react-redux';
import useScrollPosition from '@react-hook/window-scroll';
import {
    ToggleButton
} from "@fluentui/react-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


const ProfileSection = () => {
    const scrollY = useScrollPosition(120);
    const [isOpen, setIsOpen] = useState(true);
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
        position: 'relative',
        // Sizing
        padding: '3vw',
        // Background and Overflow
        backgroundColor: 'whitesmoke',
        overflowY: 'hidden',
        overflowX: 'hidden',
        // Additional styles if isOpen is true
        ...(!isOpen ? {
            width: '35vw',
        } : {
            minWidth: '65vw',
            width: '65vw',
        }),
        borderRightWidth: '0.3vw',
        borderRightStyle: 'solid',
    };

    const toggleButtonStyle = {
        position: 'absolute',
        top: `calc(${scrollY}px + 50vh)`,
        right: '0',
        backgroundColor: 'lightgrey',
        borderTopLeftRadius: '2vw',
        borderBottomLeftRadius: '2vw',
        borderWidth: '0.3vw',
        transform: 'translate(0%,-50%)',
        height: '20vw',
        borderStyle: 'solid',
        borderRightStyle: null,
        width: '3vw',
    };

    return (
        <div style={containerStyle}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={toggleButtonStyle}>
                {isOpen ?
                    <FaChevronLeft
                        size={'2vw'}
                        style={{
                            strokeWidth: '0.05vw',
                        }}
                    /> :
                    <FaChevronRight
                        size={'2vw'}
                        style={{
                            strokeWidth: '0.05vw',
                        }}
                    />
                }
            </button>
            <img
                style={{
                    width: '50%',
                    borderRadius: '2vw',
                }}
                src={profiles[0]?.picture_link}
                alt={'Profile Picture'}
            />
            <div>
                <h1>
                    {profiles[0]?.full_name}
                </h1>
                <h2>
                    {profiles[0]?.job_title}
                </h2>
                <h3 style={{
                    fontWeight: 'normal',
                    whiteSpace: 'pre-wrap'
                }}>
                    {profiles[0]?.personal_summary}
                </h3>
            </div>
        </div>
    );
};

export default ProfileSection;