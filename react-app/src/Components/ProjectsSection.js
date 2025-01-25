import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Tree, TreeItem, TreeItemLayout } from "@fluentui/react-components";

import ProjectGroup from './ProjectGroup';

const ProjectsSection = () => {
    const profiles = useSelector(state => state.app.profiles);
    const hasProjects = profiles && profiles.length > 0 && profiles[0]?.projectData && profiles[0].projectData.length > 0;

    if (!hasProjects) {
        return <p>No projects available.</p>;
    };

    const projectGroups = profiles[0].projectData.map(project => {
        return <ProjectGroup
            key={project.id}
            project={project}
        />;
    });

    const containerStyle = {
        backgroundColor: 'darkGrey',
    }

    return (
        <div style={containerStyle}>
            <Tree aria-label="default">
                <TreeItem itemType="branch">
                    <TreeItemLayout>Projects</TreeItemLayout>
                    <Tree aria-label="menu-level">
                        {projectGroups}
                    </Tree>
                </TreeItem>
            </Tree>
        </div>
    );
}

export default ProjectsSection;