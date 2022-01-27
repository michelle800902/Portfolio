import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import device from '../../assets/responsive/breakpoints';
import { experienceData } from '../../data/index';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const ExperienceWrapper = styled.div`
    width: 100%;
    padding: 5% 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const Title = styled.div`
    font-size: 40px;
    font-family: 'AvenirHeavy';
    color: var(--title-color);
    @media ${device.mobileL} {
        font-size: 50px;
    }
    @media ${device.tablet} {
        font-size: 60px;
    }
    @media ${device.laptop} {
        font-size: 70px;
    }
    @media ${device.laptopL} {
        font-size: 80px;
    }
    @media ${device.desktop} {
        font-size: 100px;
    }
`;
const TimelineWrapper = styled.div`
    width: 80%;
    height: 100%;
    padding: 5% 10%;
`;
const CompanyIcon = styled.div`
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: var(--white);
`;
const IconImg = styled.img`
    width: ${props => props.width}px;
    height: ${props => props.height}px;
`;

function Experience() {
    const [iconWidth, setIconWidth] = useState(0);
    const [iconHeight, setIconHeight] = useState(0);

    const updateIconSize = () => {
        const iconElements = document.getElementsByClassName('vertical-timeline-element-icon');
        if (iconElements && iconElements.length) {
            const iconElementWidth = iconElements[0].offsetWidth;
            const iconElementHeight = iconElements[0].offsetHeight;
            if (iconWidth !== iconElementWidth) setIconWidth(iconElementWidth);
            if (iconHeight !== iconElementHeight) setIconHeight(iconElementHeight);
        }
    };

    useEffect(() => {
        updateIconSize();
    }, [])

    useEffect(() => {
        window.addEventListener('resize', updateIconSize)
        return () => {
            window.removeEventListener('resize', updateIconSize);
        }
    })

    const renderTimelineElement = (data, i) => {
        return (
            <VerticalTimelineElement
                key={i}
                className="vertical-timeline-element--work"
                date={data.date}
                icon={(
                    <CompanyIcon
                        width={iconWidth}
                        height={iconHeight}
                    >
                        <IconImg
                            width={iconWidth - 12}
                            height={iconHeight - 12}
                            src={data.icon}
                        />
                    </CompanyIcon>
                )}
                intersectionObserverProps={{ rootMargin: '0px 0px 40px 0px' }}
            >
                <h3 className="vertical-timeline-element-title">{data.title}</h3>
                <h4 className="vertical-timeline-element-subtitle">{data.company}</h4>
                <p>{data.desc}</p>
            </VerticalTimelineElement>
        );
    };

    return (
        <ExperienceWrapper id="experience">
            <Title>EXPERIENCE</Title>
            <TimelineWrapper>
                <VerticalTimeline>
                    {
                        experienceData.map(renderTimelineElement)
                    }
                </VerticalTimeline>
            </TimelineWrapper>
        </ExperienceWrapper>
    );
}

export default Experience;
