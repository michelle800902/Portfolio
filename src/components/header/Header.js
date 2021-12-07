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
    background-color: rgba(255, 255, 255, 0.9);
`;
const Logo = styled.div`
    cursor: pointer;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid #000;
    transition: transform .5s ease-in-out;
    &:hover {
        transform: rotate(90deg);
    }
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
        color: #363636;
        &::after {
            content: "";
            display: block;
            width: 0;
            height: 4px;
            margin-top: 8px;
        }
        &:hover::after {
            width: 100%;
            background: #ffe65f;
            transition: width .3s ease-out 0s;
        }
    }
`;

function Header() {
    const onClickLogo = () => {
        window.location.assign(window.location.origin);
    };
    return (
        <HeaderWrapper>
            <Logo onClick={onClickLogo}>
                M
            </Logo>
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
