import React from 'react';
import {
    useDispatch,
} from 'react-redux';
import {
    setContentDisplayRequest,
} from '../Redux/Actions/appActions';
import { FaExpandAlt } from "react-icons/fa";

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
        borderStyle: 'solid',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'column',
        backgroundColor: 'grey',
        width: '75%',
        padding: '1vw',
        gap: '1vw',
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
        minWidth: '2.5vw',
        width: '2.5vw',
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
                        <FaExpandAlt size={'100%'} />
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