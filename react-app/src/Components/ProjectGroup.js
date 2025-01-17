import React from 'react';
import ProjectCarousel from './ProjectCarousel';
import { GoChevronUp, GoChevronDown } from "react-icons/go";

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
        borderBottomStyle: 'dashed',
        // borderWidth: 'max(0.3vw, 2px)',
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
            style={buttonStyle}
            className='base-border-width'
        >
            {project.title &&
                <h2 style={titleStyle}>{project.title}</h2>
            }
            <div
                style={iconContainerStyle}>
                {drawer === project.id ?
                    <GoChevronUp size={'100%'} style={{ strokeWidth: '0.05vw', }} /> :
                    <GoChevronDown size={'100%'} style={{ strokeWidth: '0.05vw', }} />
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
        backgroundColor: 'whitesmoke',
        gap: '2vw',
        position: 'relative',
    };

    const descriptionStyle = {
        margin: 0,
        marginRight: '2vw',
        marginLeft: '2vw'
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