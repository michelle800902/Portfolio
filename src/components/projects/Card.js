import React from "react";
import styled from 'styled-components';

const CardWrapper = styled.div`
    width: 100px;
    height: 100px;
    border: 1px solid #000000;
`;

function Card({ name, image, link }) {
    return (
        <CardWrapper>
            <div>{name}</div>
        </CardWrapper>
    );
}

export default Card;
