import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { projectData } from '../../constants/index';
import TextContent from './TextContent';
import ImageContent from './ImageContent';

const ProjectsWrapper = styled.div`
    width: 100%;
    height: ${props => props.totalHeight}px;
    display: flex;
    flex-flow: row nowrap;
`;

function Projects() {
    const startTop = 1520;
    const windowHeight = window.innerHeight;
    const totalHeight = windowHeight * (projectData.length - 1);
    const [slideNumber, setSlideNumber] = useState(0);

    const handleScroll = (event) => {
        const { scrollTop } = event.srcElement.documentElement;
        // console.log('--- handleScroll ---', windowHeight, scrollTop)
        if (scrollTop > startTop) {
            const currentNumber = Math.floor((scrollTop - startTop) / windowHeight) + 1;
            if (currentNumber <= projectData.length -1) {
                setSlideNumber(currentNumber);
            } else {
                setSlideNumber(0);
            }
        } else {
            setSlideNumber(0);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    useEffect(() => {
        console.log('slideNumber: ', slideNumber);
    }, [slideNumber]);

    return (
        <ProjectsWrapper id="projects" totalHeight={totalHeight}>
            <TextContent
                projectId={projectData[slideNumber].id}
                projectName={projectData[slideNumber].name}
                projectDesc={projectData[slideNumber].desc}
                projectType={projectData[slideNumber].type}
                roles={projectData[slideNumber].roles}
            />
            <ImageContent />
        </ProjectsWrapper>
    );
}

export default Projects;
