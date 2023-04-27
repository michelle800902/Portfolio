import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ImagesWrapper = styled.div`
    width: 100%;
    height: 100%;
`;
const Image = styled.img.attrs(({ scroll }) => ({
    style: {
        transform: `translateY(-${scroll}%)`,
    },
}))`
    position: absolute;
    border-radius: 6px;
    transition: transform 0.2s ease-out;
    right: ${props => props.right}vw;
    bottom: ${props => props.bottom}vh;
    height: ${props => props.height}vh;
    z-index: ${props => props.zIndex};
`;

function Images({ projectIdx, imgs, contentWidth, screenHeight, scrollHeight, scrollPercent }) {
    const boxHeight = 140;
    const zIndexArr = [1, 3, 2];
    const rightArr = [4, 2, 6];

    const [bottomArr, setBottomArr] = useState([-200, -120, -60]);
    const [heightArr, setHeightArr] = useState([38, 42, 36]);

    useEffect(() => {
        if (screenHeight && contentWidth) {
            const divisor = (1000 / contentWidth) * 4;
            const midHeight = Math.round(screenHeight / divisor) * -1;
            const midWidth = Math.round(contentWidth / 15);
            setBottomArr([midHeight - Math.round(contentWidth / 8), midHeight, midHeight + Math.round(contentWidth / 12)]);
            setHeightArr([midWidth - 4, midWidth, midWidth - 5]);
        }
    }, [screenHeight, contentWidth]);
    
    let currScrollParam = 24;
    let currScrollPercent = scrollPercent;
    (function calcScrollPercent() {
        const heightToBeReducedInVH = (boxHeight * projectIdx) - 100;
        const scrollOffset = (screenHeight * heightToBeReducedInVH) / 100;
        const scrollOffsetInPercent = (scrollOffset * 100 / scrollHeight) - ((projectIdx - 1) * 2);
        currScrollPercent -= scrollOffsetInPercent;
    })();

    const renderImage = (src, i) => {
        if (i) {
            currScrollParam /= 2;
        }
        return src ? (
            <Image
                key={i}
                src={src}
                zIndex={zIndexArr[i]}
                right={rightArr[i]}
                bottom={bottomArr[i]}
                height={heightArr[i]}
                scroll={currScrollPercent * currScrollParam} 
                alt={`project${projectIdx}_${i}`}
            />
        ) : null;
    };

    return (
        <ImagesWrapper>
            {
                imgs.map(renderImage)
            }
        </ImagesWrapper>
    );
}

Images.propTypes = {
    projectIdx: PropTypes.number.isRequired,
    imgs: PropTypes.array.isRequired,
    contentWidth: PropTypes.number.isRequired,
    screenHeight: PropTypes.number.isRequired,
    scrollHeight: PropTypes.number.isRequired,
    scrollPercent: PropTypes.number.isRequired,
};

export default Images;
