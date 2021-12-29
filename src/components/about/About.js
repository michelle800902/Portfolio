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
`;
const Title = styled.div`
    position: absolute;
    top: 5%;
    left: -30%;
    transform: translateX(${props => props.scrollPercent * 5}%);
    transition: transform 0.5s ease-out;
    font-family: 'AvenirHeavy';
    color: #fff;
    opacity: 0.9;
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
    display: grid;
    margin-left: 30%;
    margin-right: 5%;
    font-family: 'AvenirLight';
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
const DescriptionSpan = styled.span`
    width: 100%;
    margin: 6px 0;
`;
const SkillSet = styled.div`
    width: 100%;
    margin-top: 24px;
    display: flex;
    align-items: center;
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
