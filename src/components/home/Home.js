import React from "react";
import styled from 'styled-components';
import { ReactComponent as LaptopSVG } from '../../assets/images/laptop.svg';
import Type from "./Type";

const HomeWrapper  = styled.div`
    width: calc(100% - 100px);
    height: calc(100vh - 100px);
    padding: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const HomeContent = styled.div`
    width: 50%;
    height: 100%;
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1, h2 {
        width: 100%;
        pointer-events: none;
    }
    strong {
        color: #ED6EA4;
    }
`;

function Home() {
    return (
        <HomeWrapper id="home">
            <HomeContent>
                <LaptopSVG />
            </HomeContent>
            <HomeContent>
                <h1>Hi All !</h1>
                <h1>I'm <strong>Michelle Chen</strong>.</h1>
                <h2><strong><Type /></strong></h2>
            </HomeContent>
        </HomeWrapper>
      );
}

export default Home;
