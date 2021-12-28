import React from 'react';
import styled from 'styled-components';
import { experienceData } from '../../constants/index';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const ExperienceWrapper = styled.div`
    width: 100%;
    height: 200vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ece;
`;

function Experience() {

    const renderTimelineElement = (data, i) => {
        return (
            <VerticalTimelineElement
                key={i}
                className="vertical-timeline-element--work"
                date={data.date}
                iconStyle={{ background: '#ccc', color: '#fff', textAlign: 'center' }}
                icon={<></>}
            >
                <h3 className="vertical-timeline-element-title">{data.title}</h3>
                <h4 className="vertical-timeline-element-subtitle">{data.company}</h4>
                <p>{data.desc}</p>
            </VerticalTimelineElement>
        );
    };

    return (
        <ExperienceWrapper id="experience">
            <VerticalTimeline>
                {
                    experienceData.map(renderTimelineElement)
                }
            </VerticalTimeline>
        </ExperienceWrapper>
    );
}

export default Experience;
