import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as LaptopSVG } from '../../assets/images/laptop.svg';
import device from '../../assets/responsive/breakpoints';
import './wave.css';

const ContactWrapper = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    overflow: hidden;
    background-color: var(--background-two);
`;
const Title = styled.div`
    position: absolute;
    top: 5%;
    right: -95%;
    transform: translateX(-${props => props.scrollPercent * 5}%);
    transition: transform 0.5s ease-out;
    font-family: 'AvenirHeavy';
    color: var(--title-color);
    @media ${device.laptop} {
        font-size: 180px;
    }
    @media ${device.laptopL} {
        font-size: 200px;
    }
    @media ${device.desktop} {
        font-size: 350px;
    }
`;
const Description = styled.div`
    display: grid;
    margin-left: 5%;
    margin-right: 30%;
    font-family: 'AvenirLight';
    color: var(--text-color);
    @media ${device.laptop} {
        transform: translateY(90%);
        font-size: 30px;
    }
    @media ${device.laptopL} {
        transform: translateY(87%);
        font-size: 38px;
    }
    @media ${device.desktop} {
        transform: translateY(80%);
        font-size: 70px;
    }
`;
const ContactItems = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    svg {
        margin-right: 48px;
    }
`;

function Contact() {
    const [scrollPercent, setScrollPercent] = useState(0);

    const handleScroll = (event) => {
        const { body, documentElement } = event.srcElement;
        const sd = Math.max(body.scrollTop, documentElement.scrollTop);
        let sp = (sd / (documentElement.scrollHeight - documentElement.clientHeight) * 100);
        const minlimit = (documentElement.clientHeight * 1000) / documentElement.scrollHeight;
        if (sp >= minlimit && sp <= 100) {
            sp -= minlimit;
            setScrollPercent(sp);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <ContactWrapper id="contact">
            <Title scrollPercent={scrollPercent}>
                CONTACT
            </Title>
            <Description>
                Hello! Please get in touch with me if any new opportunities. I'd love to hear from you!
                <ContactItems>
                    <LaptopSVG width={200} height={200} />
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    <FontAwesomeIcon icon={faEnvelope} size="2x" />
                </ContactItems>
            </Description>
        </ContactWrapper>
    );
}

export default Contact;
