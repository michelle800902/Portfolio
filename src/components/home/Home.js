import React from 'react';
import styled from 'styled-components';
import Reveal from "./Reveal";
import Type from "./Type";

const HomeWrapper  = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    pointer-events: none;
`;
const Description = styled.div`
    font-size: 32px;
    font-weight: bold;
    font-family: 'AvenirHeavy';
    color: #aaa;
`;

function Home() {
    return (
        <HomeWrapper id="home">
            <Reveal
                text="Michelle Chen"
                fontFam="Valencia"
                timeDelay={500}
            />
            <Description>
                <Type
                    strings={[
                        "Web Developer",
                        "Front-end Engineer",
                    ]}
                />
            </Description>
        </HomeWrapper>
      );
}

export default Home;
