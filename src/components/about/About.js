import React from "react";
import styled from 'styled-components';

const AboutWrapper = styled.div`
    width: calc(100% - 100px);
    height: calc(100vh - 100px);
    padding: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

function About() {
    return (
        <AboutWrapper id="about">
            <h1>About</h1>
        </AboutWrapper>
    );
}

export default About;
