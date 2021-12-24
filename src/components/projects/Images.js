import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ImgOne from '../../assets/images/projects/01_CovMo/geo.png';
import ImgTwo from '../../assets/images/projects/01_CovMo/reporting.png';
import ImgThree from '../../assets/images/projects/01_CovMo/callwindow.png';

const ImageOneContainer = styled.img`
    right: 3vw;
    bottom: -10vh;
    height: 40vh; 
    position: absolute;
    // filter: blur(0.6px);
    transform: translate(0px, -${props => props.scroll * 5}%);
    transition: transform 0.4s ease-out;
    border-radius: 6px;
`;
const ImageTwoContainer = styled.img`
    right: 0vw;
    bottom: -20vh;
    height: 40vh;
    position: absolute;
    transform: translate(0px, -${props => props.scroll * 2}%) scale(0.94);
    transition: transform 0.2s ease-out;
    border-radius: 6px;
`;

function Images(props) {
    let scrollPercent = props.scrollPercent;
    const heighttoBeReducedinVH = ((props.boxHeight * props.projectIndex) - 100);
    const scrollOffset = (props.screenHeight * heighttoBeReducedinVH) / 100;
    const scrollOffsetInPercent = (scrollOffset * 100 / props.scrollHeight) + props.projectIndex - 1;
    scrollPercent -= scrollOffsetInPercent;

    return (
        <>
            <ImageOneContainer src={ImgOne} scroll={scrollPercent} alt="img_one" />
            <ImageTwoContainer src={ImgTwo} scroll={scrollPercent} alt="img_two" />
        </>
    )
}

Images.propTypes = {
    projectIndex: PropTypes.number.isRequired,
    boxHeight: PropTypes.number.isRequired,
    screenHeight: PropTypes.number.isRequired,
    scrollHeight: PropTypes.number.isRequired,
    scrollPercent: PropTypes.number.isRequired,
};

export default Images;
