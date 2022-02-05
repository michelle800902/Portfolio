import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
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
const TextContentWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-flow: column nowrap;
    @media ${device.laptop} {
        width: 60%;
    }
`;
const ProjectID = styled.div`
    padding: 80px 10% 20px 10%;
    font-size: 20px;
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
    display: flex;
    font-size: 40px;
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
const ProjectRole = styled.div`
    padding: 8px 0;
    font-size: 20px;
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
    padding: 8px 0;
    font-size: 20px;
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
    padding: 20px 10%;
    font-size: 20px;
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
    padding: 0 12px;
    margin: 0px 8px 8px 0px;
    border-radius: 16px;
    font-weight: bold;
    font-family: 'AvenirBook';
    white-space: nowrap;
    background-color: var(--white);
    color: var(--pink);
    opacity: 0.8;
`;
let TechListFadeIn = styled.div``;
const TechListFadeInClear = styled.div``;
const TechListFadeInAnimate = styled.div`
    padding: 16px 0;
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
const LinkButton = styled.div`
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--pink);
    font-size: 24px;
    @media ${device.laptop} {
        font-size: 28px;
    }
    @media ${device.laptopL} {
        font-size: 32px;
    }
    @media ${device.desktop} {
        font-size: 48px;
    }
`;
const ProjectImages = styled.div`
    display: grid;
    grid-row-gap: 8px;
    grid-column-gap: 8px;
    grid-template-columns: repeat(${props => props.num}, 1fr);
    opacity: 0;
    animation: ${fadeIn} 1s linear forwards;
    animation-delay: 0.5s;
    @media ${device.laptop} {
        display: none;
    }
`;
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 6px;
`;

function TextContent(props) {
    const [refresh, setRefresh] = useState(true);
    const [hoverOnName, setHoverOnName] = useState(false);

    useEffect(() => {
        if (props.id) {
            setRefresh(false);
        }
    }, [props.id]);

    let timer;
    if (!refresh) {
        BlockTextReveal = BlockTextRevealClear;
        TechListFadeIn = TechListFadeInClear;
        clearTimeout(timer);
        timer = setTimeout(() => {
            BlockTextReveal = BlockTextRevealAnimate;
            TechListFadeIn = TechListFadeInAnimate;
            setRefresh(true);
        });
    }

    const onClickLink = () => {
        window.open(props.link);
    };

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
                        onClick={onClickLink}
                        style={{
                            whiteSpace: 'nowrap',
                            cursor: props.link ? 'pointer' : 'default',
                        }}
                    >
                        {props.name}
                    </BlockTextReveal>
                    {
                        hoverOnName && props.link 
                        && (
                            <LinkButton>
                                <FontAwesomeIcon icon={faArrowRight} />
                            </LinkButton>
                        )
                    }
                </ProjectName>
                <ProjectRole>
                    <BlockTextReveal inline>
                        {props.role}
                    </BlockTextReveal>
                </ProjectRole>
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
                <ProjectImages num={props.imgs.length}>
                    {
                        props.imgs.map((src, i) => (
                            <Image
                                key={`img_${props.id}_${i}`}
                                alt={`img_${props.id}_${i}`}
                                src={src}
                            />
                        ))
                    }
                </ProjectImages>
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
    imgs: PropTypes.array.isRequired,
}

export default TextContent;
