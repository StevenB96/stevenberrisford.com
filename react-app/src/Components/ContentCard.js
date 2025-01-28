import React from 'react';
import {
    useDispatch,
} from 'react-redux';
import {
    setContentDisplayRequest,
} from '../Redux/Actions/appActions';
import { FaExternalLinkAlt } from "react-icons/fa";



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
        borderRadius: '1vw',
        borderWidth: '0.3vw',
        // Flexbox
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // Layout
        maxWidth: 'calc(100% - 4vw)',
        padding: '1vw',
        gap: '1vw',
        // Positioning
        position: 'relative',
        // Background
        backgroundColor: 'lightgrey',
    };

    const titleStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        gap: '1vw',
    };

    const titleTextStyle = {
        margin: 0
    };

    const buttonContainerStyle = {
        // Size
        width: '4vw',
        height: '4vw',
        // Flexbox
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const descriptionStyle = {
        margin: 0,
        whiteSpace: 'pre-wrap',
    };

    return (
        <div style={containerStyle}>
            {contentItem.title && (
                <div style={titleStyle}>
                    <h3 style={titleTextStyle}>{contentItem.title}</h3>
                    <button
                        onClick={handleOnClick}
                        style={buttonContainerStyle}>
                        <FaExternalLinkAlt
                            size={'3vw'}
                            style={{ strokeWidth: '0.05vw', }}
                        />
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