import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import device from '../../assets/responsive/breakpoints';

const fadeIn = () => keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;
const appearText = () => keyframes`
    0% {
        color: transparent;
    }
    100% {
        color: var(--text-color);
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
const TextContentWrapper = styled.section`
    position: fixed;
    top: 0;
    left: 0;
    width: 60%;
    height: 100vh;
    display: flex;
    flex-flow: column nowrap;
`;
const ProjectID = styled.div`
    padding: 10% 10% 5% 10%;
    font-family: 'AvenirHeavy';
    pointer-events: none;
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
const ProjectDetails = styled.div`
    height: 100%;
    padding: 0 10%;
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
    pointer-events: none;
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
    pointer-events: none;
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
    pointer-events: none;
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
const TechTag = styled.div`
    width: fit-content;
    height: 28px;
    line-height: 28px;
    padding: 0 4px;
    margin: 0px 8px 8px 0px;
    white-space: nowrap;
    border-radius: 3px;
    border: 1px solid var(--text-color);
    color: var(--text-color);
    font-family: 'AvenirBook';
`;
let TechListFadeIn = styled.div``;
const TechListFadeInClear = styled.div``;
const TechListFadeInAnimate = styled.div`
    padding-top: 5%;
    display: flex;
    flex-flow: wrap;
    align-items: center;
    opacity: 0;
    animation: ${fadeIn} 1s linear forwards;
    animation-delay: 0.5s;
    pointer-events: none;
`;
let BlockTextReveal = styled.span``;
const BlockTextRevealClear = styled.span``;
const BlockTextRevealAnimate = styled.span`
    position: relative;
    display: ${props => (props.inline ? 'inline' : 'block')};
    animation: ${appearText} 0.5s linear forwards;
    animation-delay: 0.5s;
    color: transparent;
    &::after {
        content: '';
        top: 0;
        left: 0;
        position: absolute;
        width: 0%;
        height: 100%;
        background: var(--block-color);
        animation: ${showBlock} 1s cubic-bezier(0.19, 1, 0.22, 1) forwards;
        animation-delay: 0s;
    }
`;

function TextContent(props) {
    const [refresh, setRefresh] = useState(true);
    const [hoverOnName, setHoverOnName] = useState(false);

    useEffect(() => {
        if (props.id) {
            setRefresh(false);
        }
    }, [props.id]);

    if (!refresh) {
        BlockTextReveal = BlockTextRevealClear;
        TechListFadeIn = TechListFadeInClear;
        setTimeout(() => {
            BlockTextReveal = BlockTextRevealAnimate;
            TechListFadeIn = TechListFadeInAnimate;
            setRefresh(true);
        });
    }

    return refresh && props.id && (
        <TextContentWrapper>
            <ProjectID>
                <BlockTextReveal inline>
                    {props.id}
                </BlockTextReveal>
            </ProjectID>
            <ProjectDetails>
                <ProjectName>
                    <BlockTextReveal
                        inline
                        onMouseEnter={() => setHoverOnName(true)}
                        onMouseLeave={() => setHoverOnName(false)}
                        style={{
                            whiteSpace: 'nowrap',
                            cursor: props.link ? 'pointer' : 'default',
                        }}
                    >
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
                <TechListFadeIn>
                    {props.tech.map((techStr, i) => (
                        <TechTag key={i}>{techStr}</TechTag>
                    ))}
                </TechListFadeIn>
            </ProjectDetails>
            <ProjectType>
                <BlockTextReveal inline>
                    {props.type}
                </BlockTextReveal>
            </ProjectType>
        </TextContentWrapper>
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
