import React from 'react';
import ProjectCarousel from './ProjectCarousel';

import { Tree, TreeItem, TreeItemLayout } from "@fluentui/react-components";

const ProjectGroup = ({
    project,
}) => {
    const content = project?.contentData || [];

    const wrapperStyle = {
        backgroundColor: 'whitesmoke',
    };

    const bodyStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };

    const descriptionStyle = {
        margin: '1vw 2vw 1vw 2vw',
    };

    return (
        <TreeItem key={project.id} itemType="branch">
            <TreeItemLayout>{project.title}</TreeItemLayout>
            <Tree aria-label="project-level">
                <div style={wrapperStyle}>
                    <div style={bodyStyle}>
                        {project.description &&
                            <div
                                style={descriptionStyle}
                            >
                                {project.description}
                            </div>
                        }
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