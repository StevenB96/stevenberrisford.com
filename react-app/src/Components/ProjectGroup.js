import { FaChevronDown, FaChevronRight } from "react-icons/fa";

import ProjectCarousel from './ProjectCarousel';

import {
    AccordionHeader,
    AccordionItem,
    AccordionPanel,
} from "@fluentui/react-components";

const ProjectGroup = ({
    project,
    openProject
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
        <AccordionItem value={project.id}>
            <AccordionHeader
                expandIcon={
                    <div style={{
                        marginLeft: '3vw',
                        marginRight: '1vw'
                    }}>
                        {
                            openProject === project.id ?
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
                <h3 style={{ fontWeight: 'normal' }}>
                    {project.title}
                </h3>
            </AccordionHeader>
            <AccordionPanel>
                <div style={wrapperStyle}>
                    <div style={bodyStyle}>
                        {project.description &&
                            <p
                                style={descriptionStyle}
                            >
                                {project.description}
                            </p>
                        }
                        <ProjectCarousel
                            content={content}
                        />
                    </div>
                </div>
            </AccordionPanel>
        </AccordionItem>
    );
};

export default ProjectGroup;