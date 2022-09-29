import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { projectData } from '../../data/index';
import TextContent from './TextContent';
import ImageContent from './ImageContent';

const ProjectsWrapper = styled.div`
    width: 100%;
    height: ${props => props.totalHeight}px;
    display: flex;
    flex-flow: row nowrap;
    background-color: var(--background-two);
`;

function Projects() {
    const windowHeight = window.innerHeight;
    const totalHeight = windowHeight * (projectData.length - 1);

    const [startTop, setStartTop] = useState(0);
    const [slideNumber, setSlideNumber] = useState(0);

    const getStartTop = () => {
        const homeDOM = document.getElementById('home');
        const aboutDOM = document.getElementById('about');
        const experienceDOM = document.getElementById('experience');
        if (homeDOM && aboutDOM && experienceDOM) {
            const homeHeight = homeDOM.offsetHeight;
            const aboutHeight = aboutDOM.offsetHeight;
            const experienceHeight = experienceDOM.offsetHeight;
            return (homeHeight + aboutHeight + experienceHeight) * 0.95;
        }
        return 0;
    };

    const handleResize = () => {
        setStartTop(getStartTop());
    };

    const handleScroll = (event) => {
        const { scrollTop } = event.srcElement.documentElement;
        if (scrollTop > startTop) {
            const currentNumber = Math.floor((scrollTop - startTop) / windowHeight) + 1;
            const endTop = (startTop + totalHeight) - (windowHeight * 0.5);
            if (scrollTop > endTop) {
                setSlideNumber(0);
            } else if (currentNumber < projectData.length - 1) {
                setSlideNumber(currentNumber);
            }
        } else {
            setSlideNumber(0);
        }
    };

    useEffect(() => {
        setStartTop(getStartTop());
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        }
    });

    return (
        <ProjectsWrapper id="projects" totalHeight={totalHeight}>
            <TextContent
                id={projectData[slideNumber].id}
                name={projectData[slideNumber].name} 
                desc={projectData[slideNumber].desc}
                type={projectData[slideNumber].type}
                role={projectData[slideNumber].role}
                tech={projectData[slideNumber].tech}
                link={projectData[slideNumber].link}
                imgs={projectData[slideNumber].imgs}
            />
            <ImageContent />
        </ProjectsWrapper>
    );
}

export default Projects;
