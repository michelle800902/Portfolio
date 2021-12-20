import React from 'react';
import styled from 'styled-components';

const ExperienceWrapper = styled.div`
    width: calc(100% - 100px);
    height: calc(100vh - 100px);
    padding: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

function Experience() {
    return (
        <ExperienceWrapper id="experience">
            <h1>Experience</h1>
        </ExperienceWrapper>
    );
}

export default Experience;
