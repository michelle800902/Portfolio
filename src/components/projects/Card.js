import React from "react";
import styled from 'styled-components';

const CardWrapper = styled.div`
    width: 100%;
    height: 100%;
    border: 1px solid #000000;
    border-radius: 4px;
    cursor: pointer;
`;

function Card({ name, description, image, link }) {
    return (
        <CardWrapper>
            <div>{name}</div>
            <div>{description}</div>
        </CardWrapper>
    );
}

export default Card;
