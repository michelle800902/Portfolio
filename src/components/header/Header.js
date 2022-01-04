import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ReactComponent as LogoSVG } from '../../assets/images/planet.svg';
import { navbarData } from '../../constants/index';
import ThemeToggle from './ThemeToggle';
import GlobalStyle from '../../GlobalStyle';

const HiddenHeader = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    height: ${props => props.height}px;
    background-color: transparent;
    z-index: 10;
`;
const HeaderWrapper = styled.div`
    position: fixed;
    top: ${props => props.top}px;
    height: ${props => props.height}px;
    width: calc(100% - 6%);
    padding: 0 3%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--header);
    transition: top .3s ease-in-out;
    z-index: 10;
`;
const HeaderRight = styled.div`
    display: flex;
`;
const Logo = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform .5s ease-in-out;
    &:hover {
        transform: scale(1.1);
    }
`;
const Title = styled.div`
    padding: 0 8px;
    font-size: 42px;
    font-family: 'Valencia';
    color: var(--pink);
    opacity: 0.5;
`;
const Navbar = styled.div`
    padding: 0 16px;
    display: flex;
    justify-content: flex-end;
`;
const NavbarItem = styled.div`
    height: 100%;
    margin-top: 4px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: ${props => props.focus ? 'bold' : 'unset'};
    &:hover {
        font-weight: bold;
    }
    a {
        text-decoration: none;
        font-family: 'AvenirRoman';
        color: var(--dark-one);
        &::after {
            content: "";
            display: block;
            width: 0;
            height: 4px;
            margin-top: 4px;
        }
        &:hover::after {
            width: 100%;
            background: var(--pink);
            transition: width .3s ease-out 0s;
        }
    }
`;

function Header() {
    const height = 60;
    const [top, setTop] = useState(0);
    const [focusedId, setFocusedId] = useState('');
    const [isLightTheme, setIsLightTheme] = useState(true);

    useEffect(() => {
        let prevScrollPos = window.pageYOffset;
        window.onscroll = function() {
            const currentScrollPos = window.pageYOffset;
            if (prevScrollPos > currentScrollPos) {
                setTop(0);
            } else {
                setTop(-1 * height);
            }
            prevScrollPos = currentScrollPos;
        }
    }, []);

    const onMouseEnterHeader = (e) => {
        setTop(0);
    };

    const onClickLogo = () => {
        window.location.assign(window.location.origin);
    };

    const onClickNavbarItem = (itemId) => {
        setFocusedId(itemId);
    };

    const onSwitchTheme = () => {
        setIsLightTheme(!isLightTheme);
    };

    return (
        <>
            <HiddenHeader height={height} onMouseEnter={onMouseEnterHeader} />
            <HeaderWrapper height={height} top={top}>
                <Logo onClick={onClickLogo}>
                    <LogoSVG width={50} height={50} />
                    <Title>Portfolio</Title>
                </Logo>
                <HeaderRight>
                    <Navbar id="navbar">
                    {
                        navbarData.map((item) => (
                            <NavbarItem
                                key={item.id}
                                focus={focusedId === item.id}
                                onClick={() => onClickNavbarItem(item.id)}
                            >
                                <a href={item.href}>
                                    {item.name}
                                </a>
                            </NavbarItem>
                        ))
                    }
                    </Navbar>
                    <ThemeToggle
                        isLightTheme={isLightTheme}
                        onSwitchTheme={onSwitchTheme}
                    />
                    <GlobalStyle
                        theme={isLightTheme ? 'light' : 'dark'}
                    />
                </HeaderRight>
            </HeaderWrapper>
        </>
    );
}

export default Header;
