import React from 'react';
import ProjectCarousel from './ProjectCarousel';

import { Tree, TreeItem, TreeItemLayout } from "@fluentui/react-components";

const ProjectGroup = ({
    project,
}) => {
    const content = project?.contentData || [];

    const bodyStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '2vw',
        position: 'relative',
    };

    return (
        <TreeItem key={project.id} itemType="branch">
            <TreeItemLayout>{project.title}</TreeItemLayout>
            <Tree aria-label="level2">
                <div style={{
                    backgroundColor: 'whitesmoke',
                    padding: '3vw',
                    display: 'flex',
                }}>
                    <div style={bodyStyle}>
                        {project.description && <div>{project.description}</div>}
                        <ProjectCarousel
                            content={content}
                        />
                    </div>
                </div>
            </Tree>
        </TreeItem>
    );
};

export default ProjectGroup;