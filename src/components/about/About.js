import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import device from '../../assets/responsive/breakpoints';

const AboutWrapper = styled.div`
    width: calc(100% - 100px);
    height: 40vh;
    padding: 50px;
    position: relative;
    overflow: hidden;
`;
const AboutTitle = styled.div`
    transform: translateX(${(props) => props.scrollPercent * 5.5}%);
    transition: transform 0.5s ease-out;
    font-family: 'AvenirHeavy';
    position: absolute;
    color: #eee;
    top: 5%;
    left: -30%;
    font-size: 80px;
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
            <AboutTitle scrollPercent={scrollPercent}>
                ABOUT ME
            </AboutTitle>
        </AboutWrapper>
    );
}

export default About;
