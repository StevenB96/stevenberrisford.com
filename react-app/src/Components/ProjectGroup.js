import React from 'react';
import {
    FaChevronUp,
    FaChevronDown,
} from 'react-icons/fa';
import ProjectCarousel from './ProjectCarousel';

const ProjectHeader = ({
    project,
    drawer,
    setDrawer,
}) => {
    const handleSetDrawer = () => {
        setDrawer(project.id === drawer ? null : project.id)
    };

    const buttonStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '2%',
        width: '100%',
        backgroundColor: 'grey',
    };

    const titleStyle = {
    };

    const iconContainerStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '2.5vw',
    };

    return (
        <button
            onClick={handleSetDrawer}
            style={buttonStyle}>
            {project.title &&
                <h2 style={titleStyle}>{project.title}</h2>
            }
            <div
                style={iconContainerStyle}>
                {drawer === project.id ?
                    <FaChevronUp size={'100%'} /> :
                    <FaChevronDown size={'100%'} />
                }
            </div>
        </button>
    );
};

const ProjectGroup = ({
    project,
    drawer,
    setDrawer
}) => {
    const content = project?.contentData || [];

    const bodyStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '3vw',
        paddingBottom: '3vw',
        backgroundColor: 'lightGrey',
        gap: '2vw',
        position: 'relative',
    };

    const descriptionStyle = {
        margin: 0,
    };

    return (
        <div key={project.id}>
            <ProjectHeader
                project={project}
                drawer={drawer}
                setDrawer={setDrawer}
            />
            {drawer === project.id && (
                <div style={bodyStyle}>
                    {project.description &&
                        <h2 style={descriptionStyle}>{project.description} </h2>
                    }
                    <ProjectCarousel
                        content={content}
                    />
                </div>
            )}
        </div>
    );
};

export default ProjectGroup;