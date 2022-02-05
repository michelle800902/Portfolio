import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import device from '../../assets/responsive/breakpoints';
import { projectData } from '../../data/index';
import Images from './Images';

const ImageContentWrapper = styled.div`
    width: 40%;
    margin-left: 60%;
    display: none;
    @media ${device.laptop} {
        display: flex;
        flex-flow: column nowrap;
    }
`;
const ImagesBox = styled.div`
    height: 100vh;
    position: relative;
`;

function ImageContent() {
    const boxHeight = 140;
    const [contentWidth, setContentWidth] = useState(0);
    const [screenHeight, setScreenHeight] = useState(0);
    const [scrollHeight, setScrollHeight] = useState(0);
    const [scrollPercent, setScrollPercent] = useState(0);

    const getContentWidth = () => {
        const imageContentDOM = document.getElementById('image-content');
        if (imageContentDOM) {
            return imageContentDOM.offsetWidth;
        }
        return 0;
    };

    const handleScroll = () => {
        const { body, documentElement } = window.document;
        const sd = Math.max(body.scrollTop, documentElement.scrollTop);
        const sp = (sd / (documentElement.scrollHeight - documentElement.clientHeight) * 100);
        const minlimit = (documentElement.clientHeight * 100) / documentElement.scrollHeight;
        const maxlimit = (documentElement.clientHeight * 1500) / documentElement.scrollHeight;
        if (sp >= minlimit && sp <= maxlimit) {
            setScrollPercent(sp);
        }
    };

    const handleResize = () => {
        setContentWidth(getContentWidth());
    };

    useEffect(() => {
        setContentWidth(getContentWidth());
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        return () => {
            setScrollHeight(Math.round(window.document.documentElement.scrollHeight));
            setScreenHeight(Math.round(window.document.documentElement.clientHeight));
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        }
    });

    const renderProjectImages = (data, i) => {
        const { imgs } = data;
        return imgs.length ? (
            <ImagesBox key={i} id={`imagesBox_${i}`}>
                <Images
                    projectIndex={i}
                    imgs={imgs}
                    contentWidth={contentWidth}
                    boxHeight={boxHeight}
                    screenHeight={screenHeight}
                    scrollHeight={scrollHeight}
                    scrollPercent={scrollPercent}
                />
            </ImagesBox>
        ) : null;
    }

    return (
        <ImageContentWrapper id="image-content">
            {
                projectData.map(renderProjectImages)
            }
        </ImageContentWrapper>
    );
}

export default ImageContent;
