import React, {
    useState,
} from 'react';
import { useSelector } from 'react-redux';
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

import {
    Accordion,
    AccordionHeader,
    AccordionItem,
    AccordionPanel,
} from "@fluentui/react-components";

import ProjectGroup from './ProjectGroup';

const ProjectsSection = ({ openSection }) => {
    const profiles = useSelector(state => state.app.profiles);
    const hasProjects = profiles && profiles.length > 0 && profiles[0]?.projectData && profiles[0].projectData.length > 0;

    const [openProject, setOpenProject] = useState(0);

    const handleToggleProject = (_, data) => {
        setOpenProject(
            openProject === data.value ?
                0 :
                data.value
        )
    };

    if (!hasProjects) {
        return <p>No projects available.</p>;
    };

    const projectGroups = profiles[0].projectData.map(project => {
        return <ProjectGroup
            key={project.id}
            project={project}
            openProject={openProject}
        />;
    });

    return (
        <AccordionItem value={1}>
            <AccordionHeader
                expandIcon={
                    <div style={{
                        marginLeft: '2vw',
                        marginRight: '1vw'
                    }}>
                        {
                            openSection === 1 ?
                                <FaChevronDown
                                    size={'2vw'}
                                    style={{
                                        strokeWidth: '0.05vw',
                                    }}
                                />
                                :
                                <FaChevronRight
                                    size={'2vw'}
                                    style={{
                                        strokeWidth: '0.05vw',
                                    }}
                                />
                        }
                    </div>
                }
            >
                <h2 style={{
                    fontWeight: 'normal',
                }}>
                    Projects
                </h2>
            </AccordionHeader>
            <AccordionPanel>
                <Accordion
                    collapsible
                    onToggle={handleToggleProject}
                    openItems={openProject}
                >
                    {projectGroups}
                </Accordion>
            </AccordionPanel>
        </AccordionItem>
    );
}

export default ProjectsSection;

