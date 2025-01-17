import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ProjectGroup from './ProjectGroup';

const ProjectsSection = () => {
    const [drawer, setDrawer] = useState(false);
    const profiles = useSelector(state => state.app.profiles);
    const hasProjects = profiles && profiles.length > 0 && profiles[0]?.projectData && profiles[0].projectData.length > 0;

    if (!hasProjects) {
        return <p>No projects available.</p>;
    };

    const projectGroups = profiles[0].projectData.map(project => {
        return <ProjectGroup
            key={project.id}
            project={project}
            drawer={drawer}
            setDrawer={setDrawer}
        />;
    });

    const containerStyle = {
        backgroundColor: 'darkGrey',
    }

    const textContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        borderBottomStyle: 'solid',
    };

    const textStyle = {
    };

    return (
        <div style={containerStyle}>
            <div style={textContainerStyle} className='base-border-width'>
                <h1 style={textStyle}>
                    <u>Projects</u>
                </h1>
            </div>
            {projectGroups}
        </div>
    );
}

export default ProjectsSection;