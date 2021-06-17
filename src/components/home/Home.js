import React from "react";
import styled from 'styled-components';
import laptopImg from '../../assets/images/laptop.png';

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
`;

function Home() {
    return (
        <HomeWrapper id="home">
            <HomeContent>
                <h1>Hi All !</h1>
                <h1>I'm Michelle Chen</h1>
            </HomeContent>
            <HomeContent>
                <img src={laptopImg} alt="laptopImg" width="250"/>
            </HomeContent>
        </HomeWrapper>
      );
}

export default Home;
