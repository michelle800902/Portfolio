import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import device from '../../assets/responsive/breakpoints';

const AboutWrapper = styled.div`
    width: 100%;
    height: 40vh;
    position: relative;
    overflow: hidden;
`;
const Title = styled.div`
    position: absolute;
    top: 10%;
    left: -30%;
    transform: translateX(${(props) => props.scrollPercent * 2.5}%);
    transition: transform 0.5s ease-out;
    font-family: 'AvenirHeavy';
    color: #eee;
    @media ${device.laptop} {
        font-size: 180px;
    }
    @media ${device.laptopL} {
        font-size: 200px;
    }
    @media ${device.desktop} {
        font-size: 350px;
    }
`;
const Description = styled.div`
    align-items: center;
    font-family: 'AvenirLight';
    text-align: left;
    margin-left: 30%;
    margin-right: 5%;
    @media ${device.laptop} {
        transform: translateY(90%);
        font-size: 30px;
    }
    @media ${device.laptopL} {
        transform: translateY(87%);
        font-size: 38px;
    }
    @media ${device.desktop} {
        transform: translateY(80%);
        font-size: 70px;
    }
`;

function About() {
    const [scrollPercent, setScrollPercent] = useState(0);

    const handleScroll = (event) => {
        const { body, documentElement } = event.srcElement;
        const sd = Math.max(body.scrollTop, documentElement.scrollTop);
        const sp = (sd / (documentElement.scrollHeight - documentElement.clientHeight) * 100);
        const maxlimit = (documentElement.clientHeight * 150) / documentElement.scrollHeight;
        if (sp >= 0 && sp <= maxlimit) {
            setScrollPercent(sp);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    });

    return (
        <AboutWrapper id="about">
            <Title scrollPercent={scrollPercent}>
                ABOUT ME
            </Title>
            <Description>
                Front-end developer who cares deeply about user experience.
                Serious passion for UI design and new technologies.
            </Description>
        </AboutWrapper>
    );
}

export default About;
