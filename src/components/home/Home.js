import React from "react";
import styled from 'styled-components';
// import { ReactComponent as LaptopSVG } from '../../assets/images/laptop.svg';
import Reveal from "./Reveal";
import Type from "./Type";

const HomeWrapper  = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const HomeContent = styled.div`
    h1, h2 {
        width: 100%;
        pointer-events: none;
    }
    strong {
        color: #aaa;
    }
`;

function Home() {
    return (
        <HomeWrapper id="home">
            {/* <LaptopSVG /> */}
            <Reveal text="Michelle Chen" fontFam="Valencia" timeDelay={500} />
            <HomeContent>
                <h2><strong><Type /></strong></h2>
            </HomeContent>
        </HomeWrapper>
      );
}

export default Home;
