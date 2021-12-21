import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import TabletImg from '../../assets/images/project1/Tablet.png';
import IphoneImg from '../../assets/images/project1/Iphone.png';

const Tablet = styled.img`
    right: 0vw;
    bottom: -40vh;
    height: 80vh; 
    position: absolute;
    filter: blur(0.6px);
    transform: translate(0px,-${props => props.scroll * 4}%);
    transition: transform 0.2s ease-out;
`;
const Iphone = styled.img`
    left: 0vw;
    bottom: -70vh;
    height: 80vh;
    position: absolute;
    transform: translate(0px,-${props => props.scroll * 2}%) scale(0.94);
    transition: transform 0.2s ease-out;
`;

function Images(props) {
    const index = 1;

    let scrollPercent = props.scrollPercent;
    const heighttoBeReducedinVH = ((props.boxHeight * index) - 100);
    const scrollOffset = (props.screenHeight * heighttoBeReducedinVH) / 100;
    const scrollOffsetInPercent = (scrollOffset * 100 / props.scrollHeight) + index - 1;
    scrollPercent -= scrollOffsetInPercent;

    return (
        <>
            <Tablet src={TabletImg} scroll={scrollPercent} alt="cmgOrNotTablet" />
            <Iphone src={IphoneImg} scroll={scrollPercent} alt="cmgOrNotIphone" />
        </>
    )
}

Images.propTypes = {
    boxHeight: PropTypes.number.isRequired,
    screenHeight: PropTypes.number.isRequired,
    scrollHeight: PropTypes.number.isRequired,
    scrollPercent: PropTypes.number.isRequired,
};

export default Images;
