import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import device from '../../assets/responsive/breakpoints';
import { aboutData } from '../../data/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJsSquare, faNode, faReact, faVuejs, faHtml5, faCss3Alt, faSass, faBootstrap, faPython, faGitAlt, faDocker } from '@fortawesome/free-brands-svg-icons';

const AboutWrapper = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    overflow: hidden;
    background-color: var(--background-two);
`;
const Title = styled.div.attrs(({ scroll }) => ({
    style: {
        transform: `translateX(${scroll}%)`,
    },
}))`
    position: absolute;
    top: 10%;
    left: -30%;
    transition: transform 0.5s ease-out;
    font-size: 60px;
    font-family: 'AvenirHeavy';
    color: var(--title-color);
    @media ${device.mobileL} {
        font-size: 80px;
    }
    @media ${device.tablet} {
        font-size: 100px;
    }
    @media ${device.laptop} {
        font-size: 150px;
    }
    @media ${device.laptopL} {
        font-size: 200px;
    }
    @media ${device.desktop} {
        font-size: 350px;
    }
`;
const Description = styled.div`
    position: absolute;
    right: 5%;
    width: 70%;
    margin-top: 10%;
    font-size: 16px;
    font-family: 'AvenirLight';
    color: var(--text-color);
    @media ${device.mobileL} {
        font-size: 20px;
    }
    @media ${device.tablet} {
        font-size: 24px;
    }
    @media ${device.laptop} {
        font-size: 28px;
    }
    @media ${device.laptopL} {
        font-size: 32px;
    }
    @media ${device.desktop} {
        font-size: 60px;
    }
`;
const Paragraph = styled.p`
    text-indent: 4rem;
`;
const SkillSet = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
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
    }, []);

    return (
        <AboutWrapper id="about">
            <Title scroll={scrollPercent * 6}>
                ABOUT ME
            </Title>
            <Description>
                <Paragraph>
                    {aboutData}
                </Paragraph>
                <SkillSet>
                    <FontAwesomeIcon icon={faReact} size="2x" />
                    <FontAwesomeIcon icon={faVuejs} size="2x" />
                    <FontAwesomeIcon icon={faNode} size="2x" />
                    <FontAwesomeIcon icon={faJsSquare} size="2x" />
                    <FontAwesomeIcon icon={faHtml5} size="2x" />
                    <FontAwesomeIcon icon={faCss3Alt} size="2x" />
                    <FontAwesomeIcon icon={faSass} size="2x" />
                    <FontAwesomeIcon icon={faPython} size="2x" />
                    <FontAwesomeIcon icon={faGitAlt} size="2x" />
                    {/* <FontAwesomeIcon icon={faBootstrap} size="2x" /> */}
                    {/* <FontAwesomeIcon icon={faDocker} size="2x" /> */}
                </SkillSet>
            </Description>
        </AboutWrapper>
    );
}

export default About;
