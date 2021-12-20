import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import device from '../../assets/responsive/breakpoints';

const TextContainer = styled.section`
    position: fixed;
    top: 0;
    left: 0;
    width: 50%;
    height: 100vh;
    display: flex;
    flex-flow: column nowrap;
`;
const ProjectID = styled.div`
    padding: 10%;
    font-family: 'AvenirHeavy';
    @media ${device.laptop} {
        font-size: 25px;
    }
    @media ${device.laptopL} {
        font-size: 30px;
    }
    @media ${device.desktop} {
        font-size: 58px;
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

function TextContent({ projectId, projectName }) {
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        if (projectId) {
            setRefresh(true);
        }
    }, [projectId]);

    if (refresh) {
        console.log('refresh!!!');
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
                    {projectId}
                </BlockTextReveal>
            </ProjectID>
        </TextContainer>
    );
}

export default TextContent;
