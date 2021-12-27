import React from 'react';
import styled from 'styled-components';

const ExperienceWrapper = styled.div`
    width: 100%;
    height: 100vh;
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
