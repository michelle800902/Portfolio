import React from 'react';
import styled from 'styled-components';
import { projectData } from '../../constants/index';
import Images from './Images';

const ImageContainer = styled.div`
    width: 50%;
    height: 900vh;
    margin-left: 50%;
    display: flex;
    flex-flow: column nowrap;
`;
const ImageBox = styled.div`
    height: 100vh;
    margin-top: 40vh;
    position: relative;
`;

function ImageContent() {
    return (
        <ImageContainer>
            <ImageBox>
                <Images
                    boxHeight={0}
                    screenHeight={0}
                    scrollHeight={0}
                    scrollPercent={0}
                />
            </ImageBox>
        </ImageContainer>
    );
}

export default ImageContent;
