import React, { useState } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import ProjectCarousel from './ProjectCarousel';

const ProjectGroup = ({ project }) => {
    const [displayCarousel, setDisplayCarousel] = useState(false);

    const bodyStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        marginBottom: '2%',
    };

    const buttonStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        borderBottomStyle: 'dotted',
        boxSizing: 'border-box',
        width: '100%',
    };

    const iconContainerStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const content = project?.contentData || [];

    return (
        <div
            key={project.id}
            eventKey={project.id.toString()}
        >
            <button
                onClick={() => setDisplayCarousel(!displayCarousel)}
                style={buttonStyle}>
                {project.title && <h1>{project.title}</h1>}
                <div
                    style={iconContainerStyle}>
                    {displayCarousel ? <FaChevronUp /> : <FaChevronDown />}
                </div>
            </button>
            {displayCarousel && (
                <div style={bodyStyle}>
                    {project.description &&
                        <h2
                            style={{ margin: '2%' }}>
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