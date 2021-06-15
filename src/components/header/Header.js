import React from "react";
import styled from 'styled-components';
import { headerData } from '../../constants/index';

const HeaderWrapper = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: flex-end;
`;
const HeaderButton = styled.div`
    height: 100%;
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    a {
        text-decoration: none;
        color: #000000;
    }
`;

function Header() {
    return (
        <HeaderWrapper>
            {
                headerData.map((item) => (
                    <HeaderButton key={item.id}>
                        <a href={item.href}>
                            {item.name}
                        </a>
                    </HeaderButton>
                ))
            }
        </HeaderWrapper>
    );
}

export default Header;
