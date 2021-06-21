import React from "react";
import styled from 'styled-components';
import { projectData } from '../../constants/index';
import Card from './Card';

const ProjectsWrapper = styled.div`
    width: calc(100% - 100px);
    height: calc(100vh - 100px);
    padding: 50px;
`;
const ProjectsTitle = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const ProjectsContent = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 24px;
    grid-row-gap: 1em;
`;

function Projects() {
    return (
        <ProjectsWrapper id="projects">
            <ProjectsTitle>
                <h1>Projects</h1>
            </ProjectsTitle>
            <ProjectsContent>
            {
                projectData.map((project) => (
                    <Card
                        key={project.id}
                        name={project.name}
                        description={project.description}
                        image={project.image}
                        link={project.link}
                    />
                ))
            }
            </ProjectsContent>
        </ProjectsWrapper>
    );
}

export default Projects;
