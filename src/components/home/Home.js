import React from "react";
import styled from 'styled-components';

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
                {}
            </HomeContent>
            <HomeContent>
                {}
            </HomeContent>
        </HomeWrapper>
      );
}

export default Home;
