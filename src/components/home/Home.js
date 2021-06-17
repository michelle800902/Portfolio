import React from "react";
import styled from 'styled-components';
import laptopImg from '../../assets/images/laptop.png';
import Type from "./Type";

const HomeWrapper  = styled.div`
    width: calc(100% - 100px);
    height: calc(100vh - 100px);
    padding: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
`;
const HomeContent = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
        width: 100%;
        pointer-events: none;
    }
    div, strong {
        color: #ED6EA4;
    }
`;

function Home() {
    return (
        <HomeWrapper id="home">
            <HomeContent>
                <h1>Hi All ! <span>👋🏻</span></h1>
                <h1>I'm <strong>Michelle Chen</strong></h1>
                <h1><Type /></h1>
            </HomeContent>
            <HomeContent>
                <img src={laptopImg} alt="laptopImg" width="250"/>
            </HomeContent>
        </HomeWrapper>
      );
}

export default Home;
