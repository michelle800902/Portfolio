/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { projectData } from '../../data/index';
import TextContent from './TextContent';
import ImageContent from './ImageContent';

const ProjectsWrapper = styled.div`
    width: 100%;
    height: ${props => props.height}px;
    display: flex;
    flex-flow: row nowrap;
    background-color: var(--background-two);
`;

function Projects() {
    // Insert empty data into projectData array to not render if scrolled outside
    const emptyItem = {
        id: '',
        name: '',
        desc: '',
        type: '',
        role: '',
        tech: [],
        link: '',
        imgs: [],
    };
    const projectItems = [emptyItem, ...projectData, emptyItem];

    const windowHeight = window.innerHeight;
    const totalHeight = windowHeight * (projectItems.length - 1);

    const [startTop, setStartTop] = useState(0);
    const [projectIdx, setProjectIdx] = useState(0);

    const getStartTop = () => {
        const homeDOM = document.getElementById('home');
        const aboutDOM = document.getElementById('about');
        const experienceDOM = document.getElementById('experience');
        if (homeDOM && aboutDOM && experienceDOM) {
            const homeHeight = homeDOM.offsetHeight;
            const aboutHeight = aboutDOM.offsetHeight;
            const experienceHeight = experienceDOM.offsetHeight;
            return (homeHeight + aboutHeight + experienceHeight) * 0.9;
        }
        return 0;
    };

    const handleResize = () => {
        setStartTop(getStartTop());
    };

    const handleScroll = (event) => {
        const { scrollTop } = event.srcElement.documentElement;
        if (scrollTop > startTop) {
            const offset = Math.floor((scrollTop - startTop) / windowHeight) + 1;
            const endTop = (startTop + totalHeight) - (windowHeight * 0.5);
            if (scrollTop > endTop) {
                setProjectIdx(0);
            } else if (offset < projectItems.length - 1) {
                setProjectIdx(offset);
            }
        } else {
            setProjectIdx(0);
        }
    };

    useEffect(() => {
        handleResize();
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
        <ProjectsWrapper id="projects" height={totalHeight}>
            <TextContent projectItem={projectItems[projectIdx]} />
            <ImageContent projectItems={projectItems} />
        </ProjectsWrapper>
    );
}

export default Projects;
