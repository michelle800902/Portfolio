import React from "react";
import styled from 'styled-components';

const CardWrapper = styled.div`
    width: 100%;
    height: 100%;
    border: 1px solid #000000;
    border-radius: 4px;
`;

function Card({ name, image, link }) {
    return (
        <CardWrapper>
            <div>{name}</div>
        </CardWrapper>
    );
}

export default Card;
