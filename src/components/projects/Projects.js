import React from "react";
import styled from 'styled-components';

const ProjectsWrapper = styled.div`
    width: calc(100% - 100px);
    height: calc(100vh - 100px);
    padding: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

function Projects() {
    return (
        <ProjectsWrapper id="projects">
            <h1>Projects</h1>
        </ProjectsWrapper>
    );
}

export default Projects;
