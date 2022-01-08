import React from 'react';
import styled from 'styled-components';
import device from '../../assets/responsive/breakpoints';
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
const Title = styled.div`
    padding: 16px 0;
`;
const Description = styled.div`
    font-size: 16px;
    font-weight: bold;
    font-family: 'AvenirHeavy';
    color: var(--gray);
    @media ${device.mobileM} {
        font-size: 20px;
    }
    @media ${device.mobileL} {
        font-size: 24px;
    }
    @media ${device.tablet} {
        font-size: 28px;
    }
    @media ${device.laptop} {
        font-size: 30px;
    }
    @media ${device.desktop} {
        font-size: 32px;
    }
`;

function Home() {
    return (
        <HomeWrapper id="home">
            <Title>
                <Reveal
                    text="Michelle Chen"
                    fontFam="Valencia"
                    timeDelay={500}
                />
            </Title>
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
