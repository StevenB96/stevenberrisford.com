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
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";


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
        padding: '2vw',
        // Background and Overflow
        backgroundColor: 'whitesmoke',
        overflowY: 'hidden',
        overflowX: 'hidden',
        // Additional styles if isOpen is true
        ...(!isOpen ? {
            width: '35vw',
        } : {
        })
    };

    const toggleButtonStyle = {
        position: 'absolute',
        top: `calc(${scrollY}px + 50vh)`,
        right: '0',
        backgroundColor: 'lightgrey',
        borderTopLeftRadius: '1vw',
        borderBottomLeftRadius: '1vw',
        transform: 'translate(0%,-50%)',
        width: '2vw',
        height: '20%',
        borderStyle: 'solid',
        borderRightStyle: null,
    };

    return (
        <div style={containerStyle}>
            <ToggleButton
                icon={isOpen ?
                    <FaChevronLeft
                        size={'0.5em'}
                        style={{
                            strokeWidth: '0.05vw',
                        }}
                    /> :
                    <FaChevronRight
                        size={'0.5em'}
                        style={{
                            strokeWidth: '0.05vw',
                        }}
                    />
                }
                style={toggleButtonStyle}
                onClick={() => setIsOpen(!isOpen)}
            />
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