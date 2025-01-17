import React from 'react';
import {
    useDispatch,
} from 'react-redux';
import {
    setContentDisplayRequest,
} from '../Redux/Actions/appActions';
import { CiRead } from "react-icons/ci";

const ContentCard = ({
    contentItem,
}) => {
    const dispatch = useDispatch();

    const handleOnClick = () => {
        dispatch(setContentDisplayRequest({
            activeContentDisplay: {
                itemId: contentItem.id,
                projectId: contentItem.project,
            }
        }));
    };

    const containerStyle = {
        // Border
        borderStyle: 'solid',
        borderWidth: '0.3vw',
        borderRadius: '1vw',
        // Flexbox
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        // Layout
        width: '75%',
        padding: '1vw',
        gap: '1vw',
        // Positioning
        position: 'relative',
        // Background
        backgroundColor: 'grey',
    };

    const titleStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexDirection: 'row',
        width: '100%',
    };

    const titleTextStyle = {
        margin: 0
    };

    const buttonContainerStyle = {
        // Size
        width: '2.5vw',
        // Flexbox
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const descriptionStyle = {
        margin: 0
    };

    return (
        <div style={containerStyle}>
            {contentItem.title && (
                <div style={titleStyle}>
                    <h3 style={titleTextStyle}>{contentItem.title}</h3>
                    <button
                        onClick={handleOnClick}
                        style={buttonContainerStyle}>
                        <CiRead size={'200%'} style={{ strokeWidth: '0.05vw', }} />
                    </button>
                </div>
            )}
            {contentItem.description && (
                <p style={descriptionStyle}>{contentItem.description}</p>
            )}
        </div>
    );
};

export default ContentCard;