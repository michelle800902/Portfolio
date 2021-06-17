import React from "react";
import styled from 'styled-components';
import { navbarData } from '../../constants/index';

const HeaderWrapper = styled.div`
    width: 100%;
    height: 50px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Title = styled.div`
`;
const Navbar = styled.div`
    display: flex;
    justify-content: flex-end;
`;
const NavbarItem = styled.div`
    height: 100%;
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    a {
        text-decoration: none;
        color: #000000;
        &::after {
            content: "";
            display: block;
            width: 0;
            height: 6px;
            margin-top: 8px;
            border-radius: 16px;
        }
        &:hover::after {
            width: 100%;
            background: #FFABCA;
            transition: width .3s ease-out 0s;
        }
    }
`;

function Header() {
    return (
        <HeaderWrapper>
            <Title>
                <img src="" alt="" />
            </Title>
            <Navbar id="navbar">
            {
                navbarData.map((item) => (
                    <NavbarItem key={item.id}>
                        <a href={item.href}>
                            {item.name}
                        </a>
                    </NavbarItem>
                ))
            }
            </Navbar>
        </HeaderWrapper>
    );
}

export default Header;
