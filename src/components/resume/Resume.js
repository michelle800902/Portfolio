import React from "react";
import styled from 'styled-components';

const ResumeWrapper = styled.div`
    width: calc(100% - 100px);
    height: calc(100vh - 100px);
    padding: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

function Resume() {
    return (
        <ResumeWrapper id="resume">
            <h1>Resume</h1>
        </ResumeWrapper>
    );
}

export default Resume;
