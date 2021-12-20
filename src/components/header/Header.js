import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { navbarData } from '../../constants/index';

const HeaderWrapper = styled.div`
    position: fixed;
    top: ${(props) => props.top}px;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgba(255, 255, 255, 0.9);
    transition: top .3s ease-in-out;
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
    const [top, setTop] = useState(0);

    const onClickLogo = () => {
        window.location.assign(window.location.origin);
    };

    useEffect(() => {
        let prevScrollPos = window.pageYOffset;
        window.onscroll = function() {
            const currentScrollPos = window.pageYOffset;
            if (prevScrollPos > currentScrollPos) {
                setTop(0);
            } else {
                setTop(-50);
            }
            prevScrollPos = currentScrollPos;
        }
    }, []);

    return (
        <HeaderWrapper top={top}>
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
