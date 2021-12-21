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
    transition: transform 0.2s ease-out;
`;
const Iphone = styled.img`
    left: 0vw;
    bottom: -70vh;
    height: 80vh;
    position: absolute;
    transition: transform 0.2s ease-out;
`;

function Images(props) {
    return (
        <>
            <Tablet src={TabletImg} scroll={0} alt="cmgOrNotTablet" />
            <Iphone src={IphoneImg} scroll={0} alt="cmgOrNotIphone" />
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
