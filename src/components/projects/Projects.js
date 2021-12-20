import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { projectData } from '../../constants/index';
import Card from './Card';
import TextContent from './TextContent';
import ImageContent from './ImageContent';

const ProjectsWrapper = styled.div`
    width: 100%;
    height: 600px;
    display: flex;
    flex-flow: row nowrap;
    border: 20px solid #ece;
`;

function Projects() {
    const startTop = 1520;
    const windowHeight = window.innerHeight;
    const [slideNumber, setSlideNumber] = useState(0);

    const handleScroll = (event) => {
        const { scrollTop } = event.srcElement.documentElement;
        // console.log('--- handleScroll ---', windowHeight, scrollTop)
        if (scrollTop > startTop) {
            const currentNumber = Math.floor((scrollTop - startTop) / windowHeight) + 1;
            setSlideNumber(currentNumber);
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
        <ProjectsWrapper id="projects">
            <TextContent
                projectId={projectData[slideNumber].id}
            />
            <ImageContent />
            {/* {
                projectData.map((project) => (
                    <Card
                        key={project.id}
                        name={project.name}
                        description={project.description}
                        image={project.image}
                        link={project.link}
                    />
                ))
            } */}
        </ProjectsWrapper>
    );
}

export default Projects;
