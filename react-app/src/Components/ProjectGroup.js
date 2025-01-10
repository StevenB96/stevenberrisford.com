import React from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import ProjectCarousel from './ProjectCarousel';

const ProjectHeader = ({
    project,
    drawer,
    setDrawer,
}) => {
    const handleSetDrawer = () => {
        setDrawer(project.id === drawer ? null : project.id)
    }

    const buttonStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '2%',
        width: '100%',
        backgroundColor: 'grey',
    };

    const iconContainerStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    };

    return (
        <button
            onClick={handleSetDrawer}
            style={buttonStyle}>
            {project.title && <h1>{project.title}</h1>}
            <div
                style={iconContainerStyle}>
                {drawer === project.id ? <FaChevronUp /> : <FaChevronDown />}
            </div>
        </button>
    );
}

const ProjectGroup = ({
    project,
    drawer,
    setDrawer
}) => {
    const bodyStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: '2%',
        backgroundColor: 'lightGrey',
    };

    const content = project?.contentData || [];

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
                        <h2>
                            {project.description}
                        </h2>
                    }
                    <ProjectCarousel content={content} />
                </div>
            )}
        </div>
    );
};

export default ProjectGroup;