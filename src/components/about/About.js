import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJsSquare, faNode, faReact, faVuejs, faHtml5, faCss3Alt, faSass, faBootstrap, faPython, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import device from '../../assets/responsive/breakpoints';

const AboutWrapper = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    overflow: hidden;
    background-color: var(--background-two);
`;
const Title = styled.div`
    position: absolute;
    top: 10%;
    left: -30%;
    transform: translateX(${props => props.scrollPercent * 6}%);
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
    display: grid;
    padding-left: 25%;
    padding-right: 5%;
    transform: translateY(60%);
    font-size: 16px;
    font-family: 'AvenirLight';
    color: var(--text-color);
    @media ${device.mobileL} {
        transform: translateY(70%);
        font-size: 20px;
    }
    @media ${device.tablet} {
        transform: translateY(80%);
        font-size: 24px;
    }
    @media ${device.laptop} {
        transform: translateY(90%);
        font-size: 28px;
    }
    @media ${device.laptopL} {
        transform: translateY(95%);
        font-size: 32px;
    }
    @media ${device.desktop} {
        transform: translateY(100%);
        font-size: 60px;
    }
`;
const DescriptionSpan = styled.span`
    width: 100%;
    margin: 6px 0;
`;
const SkillSet = styled.div`
    width: 100%;
    margin-top: 24px;
    display: block;
    svg {
        margin-right: 24px;
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
    }, []);

    return (
        <AboutWrapper id="about">
            <Title scrollPercent={scrollPercent}>
                ABOUT ME
            </Title>
            <Description>
                <DescriptionSpan>
                    Front-end Engineer who has 3+ years of experience in large-scale data product development.
                </DescriptionSpan>
                <DescriptionSpan>
                    Self-motivated problem solver that passionates about software technologies and keeps learning new skills.
                </DescriptionSpan>
                <SkillSet>
                    <FontAwesomeIcon icon={faJsSquare} size="2x" />
                    <FontAwesomeIcon icon={faNode} size="2x" />
                    <FontAwesomeIcon icon={faReact} size="2x" />
                    <FontAwesomeIcon icon={faVuejs} size="2x" />
                    <FontAwesomeIcon icon={faHtml5} size="2x" />
                    <FontAwesomeIcon icon={faCss3Alt} size="2x" />
                    <FontAwesomeIcon icon={faSass} size="2x" />
                    <FontAwesomeIcon icon={faBootstrap} size="2x" />
                    <FontAwesomeIcon icon={faPython} size="2x" />
                    <FontAwesomeIcon icon={faGitAlt} size="2x" />
                </SkillSet>
            </Description>
        </AboutWrapper>
    );
}

export default About;
