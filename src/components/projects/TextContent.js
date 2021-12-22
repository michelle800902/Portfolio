import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import device from '../../assets/responsive/breakpoints';

const TextContainer = styled.section`
    position: fixed;
    top: 0;
    left: 0;
    width: 60%;
    height: 100vh;
    display: flex;
    flex-flow: column nowrap;
`;
const ProjectID = styled.div`
    padding: 10%;
    font-family: 'AvenirHeavy';
    @media ${device.laptop} {
        font-size: 24px;
    }
    @media ${device.laptopL} {
        font-size: 32px;
    }
    @media ${device.desktop} {
        font-size: 48px;
    }
`;
const ProjectDetailsContainer = styled.div`
    height: 100%;
    padding: 0 10%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
`;
const ProjectDetails = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
`;
const ProjectName = styled.div`
    font-family: 'AvenirHeavy';
    @media ${device.laptop} {
        font-size: 60px;
    }
    @media ${device.laptopL} {
        font-size: 80px;
    }
    @media ${device.desktop} {
        font-size: 100px;
    }
`;
const MyRole = styled.div`
    padding-top: 5%;
    font-family: 'AvenirMedium';
    @media ${device.laptop} {
        font-size: 24px;
    }
    @media ${device.laptopL} {
        font-size: 28px;
    }
    @media ${device.desktop} {
        font-size: 32px;
    }
`;
const ProjectDesc = styled.div`
    padding-top: 2%;
    font-family: 'AvenirBook';
    @media ${device.laptop} {
        font-size: 24px;
    }
    @media ${device.laptopL} {
        font-size: 28px;
    }
    @media ${device.desktop} {
        font-size: 32px;
    }
`;
const ProjectType = styled.div`
    padding: 5% 10%;
    font-family: 'AvenirHeavy';
    @media ${device.laptop} {
        font-size: 24px;
    }
    @media ${device.laptopL} {
        font-size: 32px;
    }
    @media ${device.desktop} {
        font-size: 48px;
    }
`;

const appearText = () => keyframes`
    0% {
        color: #fff;
    }
    100% {
        color: #333;
    }
`;
const showBlock = () => keyframes`
    0% {
        left: 0;
        width: 0%
    }
    50% {
        left: 0%;
        width: 100%
    }
    100% {
        left: 100%;
        width: 0%
    }
`;
let BlockTextReveal = styled.span``;
const BlockTextRevealClear = styled.span``;
const BlockTextRevealAnimate = styled.span`
    position: relative;
    display: ${props => (props.inline ? 'inline' : 'block')};
    animation: ${appearText} 0.5s linear forwards;
    animation-delay: 0.5s;
    color: #fff;
    &::after {
        content: '';
        top: 0;
        left: 0;
        position: absolute;
        width: 0%;
        height: 100%;
        background: #222;
        animation: ${showBlock} 1s cubic-bezier(0.19, 1, 0.22, 1) forwards;
        animation-delay: 0s;
    }
`;

function TextContent(props) {
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        if (props.id) {
            setRefresh(true);
        }
    }, [props.id]);

    if (refresh) {
        BlockTextReveal = BlockTextRevealClear;
        setTimeout(() => {
            BlockTextReveal = BlockTextRevealAnimate;
            setRefresh(false);
        });
    }

    return (
        <TextContainer>
            <ProjectID>
                <BlockTextReveal inline>
                    {props.id}
                </BlockTextReveal>
            </ProjectID>
            <ProjectDetailsContainer>
                <ProjectDetails>
                    <ProjectName>
                        <BlockTextReveal inline>
                            {props.name}
                        </BlockTextReveal>
                    </ProjectName>
                    <MyRole>
                        <BlockTextReveal inline>
                            {props.role}
                        </BlockTextReveal>
                    </MyRole>
                    <ProjectDesc>
                        <BlockTextReveal inline={false}>
                            {props.desc}
                        </BlockTextReveal>
                    </ProjectDesc>
                </ProjectDetails>
            </ProjectDetailsContainer>
            <ProjectType>
                <BlockTextReveal inline>
                    {props.type}
                </BlockTextReveal>
            </ProjectType>
        </TextContainer>
    );
}

TextContent.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    tech: PropTypes.array.isRequired,
    link: PropTypes.string.isRequired,
}

export default TextContent;
