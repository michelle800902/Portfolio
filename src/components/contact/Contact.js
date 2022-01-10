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
`;
const Title = styled.div`
    position: absolute;
    top: 10%;
    right: -95%;
    transform: translateX(-${props => props.scrollPercent * 6}%);
    transition: transform 0.5s ease-out;
    font-size: 60px;
    font-family: 'AvenirHeavy';
    color: var(--title-color);
    @media ${device.mobileL} {
        font-size: 80px;
    }
    @media ${device.tablet} {
        font-size: 100px;
    }
    @media ${device.laptop} {
        font-size: 150px;
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
    transform: translateY(60%);
    font-size: 16px;
    font-family: 'AvenirLight';
    color: var(--text-color);
    @media ${device.mobileL} {
        transform: translateY(70%);
        font-size: 20px;
    }
    @media ${device.tablet} {
        transform: translateY(80%);
        font-size: 24px;
    }
    @media ${device.laptop} {
        transform: translateY(90%);
        font-size: 28px;
    }
    @media ${device.laptopL} {
        transform: translateY(95%);
        font-size: 32px;
    }
    @media ${device.desktop} {
        transform: translateY(100%);
        font-size: 60px;
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
