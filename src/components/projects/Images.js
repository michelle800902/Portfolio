import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// import GeoImg from '../../assets/images/projects/01_CovMo/geo.png';
// import ReportingImg from '../../assets/images/projects/01_CovMo/reporting.png';
// import CallwindowImg from '../../assets/images/projects/01_CovMo/callwindow.png';

const ImageContainer = styled.img.attrs(({ scroll }) => ({
    style: {
        transform: `translate(0px, -${scroll}%)`,
    },
}))`
    position: absolute;
    border-radius: 6px;
    transition: transform 1s ease-out;
    right: ${props => props.right}vw;
    bottom: ${props => props.bottom}vh;
    height: ${props => props.height}vh;
    z-index: ${props => props.zIndex};
`;

function Images(props) {
    const rightArr = [3, 1, 6];
    const bottomArr = [-82, -48, -24];
    const heightArr = [38, 42, 36];
    const zIndexArr = [1, 3, 2];

    let scrollParam = 24;
    let scrollPercent = props.scrollPercent;
    
    const calcScrollPercent = () => {
        const heighttoBeReducedinVH = ((props.boxHeight * props.projectIndex) - 100);
        const scrollOffset = (props.screenHeight * heighttoBeReducedinVH) / 100;
        const scrollOffsetInPercent = (scrollOffset * 100 / props.scrollHeight) + props.projectIndex;
        scrollPercent -= scrollOffsetInPercent;
    }
    calcScrollPercent();

    const renderImage = (src, i) => {
        if (i) {
            scrollParam /= 2;
        }
        return (
            <ImageContainer
                key={i}
                src={src}
                right={rightArr[i]}
                bottom={bottomArr[i]}
                height={heightArr[i]}
                zIndex={zIndexArr[i]}
                scroll={scrollPercent * scrollParam}
                alt={`project${props.projectIndex}_${i}`}
            />
        );
    };

    return (
        <>
        {
            props.srcArr.map(renderImage)
        }
            {/* <ImageContainer src={props.srcArr[0]} height={38} right={4} bottom={-82} scroll={scrollPercent * 24} zIndex={1} alt="img_1" />
            <ImageContainer src={props.srcArr[1]} height={42} right={1} bottom={-48} scroll={scrollPercent * 12} zIndex={3} alt="img_2" />
            <ImageContainer src={props.srcArr[2]} height={36} right={8} bottom={-24} scroll={scrollPercent * 6} zIndex={2} alt="img_3" /> */}
        </>
    )
}

Images.propTypes = {
    projectIndex: PropTypes.number.isRequired,
    srcArr: PropTypes.array.isRequired,
    boxHeight: PropTypes.number.isRequired,
    screenHeight: PropTypes.number.isRequired,
    scrollHeight: PropTypes.number.isRequired,
    scrollPercent: PropTypes.number.isRequired,
};

export default Images;
