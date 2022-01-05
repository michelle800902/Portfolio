import React from 'react';
import styled from 'styled-components';
import { experienceData } from '../../constants/index';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const ExperienceWrapper = styled.div`
    width: 100%;
    height: 200vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const Title = styled.div`
    font-family: 'AvenirHeavy';
    font-size: 72px;
    color: var(--title-color);
`;
const CompanyIcon = styled.div`
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: var(--white);
`;
const IconImg = styled.img`
    width: 40px;
    height: 40px;
`;

function Experience() {
    const renderTimelineElement = (data, i) => {
        return (
            <VerticalTimelineElement
                key={i}
                className="vertical-timeline-element--work"
                date={data.date}
                icon={<CompanyIcon><IconImg src={data.icon} /></CompanyIcon>}
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
            <VerticalTimeline>
                {
                    experienceData.map(renderTimelineElement)
                }
            </VerticalTimeline>
        </ExperienceWrapper>
    );
}

export default Experience;
