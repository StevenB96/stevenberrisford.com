import React from 'react';
import { useSelector } from 'react-redux';
import ProjectGroup from './ProjectGroup';

const ProjectsSection = () => {
    const profiles = useSelector(state => state.app.profiles);
    const hasProjects = profiles && profiles.length > 0 && profiles[0]?.projectData && profiles[0].projectData.length > 0;

    if (!hasProjects) {
        return <p>No projects available.</p>;
    };

    const projectGroups = profiles[0].projectData.map(project => {
        return <ProjectGroup key={project.id} project={project} />;
    });

    const textContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'grey',
        borderBottomStyle: 'solid',
        boxSizing: 'border-box',
    };

    return (
        <div>
            <div style={textContainerStyle}>
                <h1 style={{ margin: '2%', }}>
                    Projects
                </h1>
            </div>
            {projectGroups}
        </div>
    );
}

export default ProjectsSection;