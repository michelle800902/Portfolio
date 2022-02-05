import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { navbarData } from '../../data/index';
import { ReactComponent as LogoSVG } from '../../assets/images/planet.svg';
import device from '../../assets/responsive/breakpoints';
import GlobalStyle from '../../GlobalStyle';
import ThemeToggle from './ThemeToggle';

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
    width: calc(100% - 48px);
    padding: 0 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--header-background-color);
    transition: top .3s ease-in-out;
    z-index: 10;
`;
const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform .5s ease-in-out;
    cursor: pointer;
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
const Toolbar = styled.div`
    display: none;
    @media ${device.laptop} {
        display: flex;
    }
`;
const Navbar = styled.div`
    padding: 0 16px;
    display: flex;
    flex-direction: ${props => props.direction};
`;
const NavbarItem = styled.div`
    height: 100%;
    margin-top: ${props => props.direction === 'row' ? '4px' : '24px'};
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
        color: var(--header-text-color);
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
const SidebarBtn = styled.div`
    width: 50px;
    font-size: 24px;
    align-items: center;
    justify-content: center;
    color: var(--pink);
    cursor: pointer;
    display: flex;
    z-index: 10;
    @media ${device.laptop} {
        display: none;
    }
`;
const Sidebar = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: ${props => props.isOpen ? '200px' : 0};
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background-color: var(--header-background-color);
    transition: 0.3s;
    @media ${device.laptop} {
        display: none;
    }
`;

function Header() {
    const height = 60;
    const [top, setTop] = useState(0);
    const [isLightTheme, setIsLightTheme] = useState(true);
    const [isOpenSidebar, setIsOpenSidebar] = useState(false);
    const [focusedItemId, setFocusedItemId] = useState('');

    useEffect(() => {
        let prevScrollPos = window.pageYOffset;
        window.onscroll = function() {
            const currentScrollPos = window.pageYOffset;
            if (prevScrollPos > currentScrollPos) {
                setTop(0);
            } else {
                setTop(-1 * height);
                setIsOpenSidebar(false);
            }
            prevScrollPos = currentScrollPos;
        }
    }, []);

    const onMouseEnterHeader = () => {
        setTop(0);
    };

    const onClickLogo = () => {
        window.location.assign(window.location.origin);
    };

    const onClickSidebarIcon = () => {
        setIsOpenSidebar(!isOpenSidebar);
    };

    const onClickNavbarItem = (itemId) => {
        setFocusedItemId(itemId);
    };

    const onChangeTheme = () => {
        setIsLightTheme(!isLightTheme);
    };

    const renderNavbarAndThemeToggle = (direction) => {
        return (
            <>
                <Navbar id={`navbar-${direction}`} direction={direction}>
                    {
                        navbarData.map((item) => (
                            <NavbarItem
                                key={item.id}
                                direction={direction}
                                focus={focusedItemId === item.id}
                                onClick={() => onClickNavbarItem(item.id)}
                            >
                                <a href={item.href}>{item.name}</a>
                            </NavbarItem>
                        ))
                    }
                </Navbar>
                <ThemeToggle
                    isLightTheme={isLightTheme}
                    onChangeTheme={onChangeTheme}
                />
            </>
        )
    };

    return (
        <>
            <HiddenHeader height={height} onMouseEnter={onMouseEnterHeader} />
            <HeaderWrapper height={height} top={top}>
                <Logo onClick={onClickLogo}>
                    <LogoSVG width={50} height={50} />
                    <Title>Portfolio</Title>
                </Logo>
                <Toolbar>
                    {
                        renderNavbarAndThemeToggle('row')
                    }
                </Toolbar>
                <SidebarBtn onClick={onClickSidebarIcon}>
                    <FontAwesomeIcon icon={isOpenSidebar ? faXmark : faBars} />
                </SidebarBtn>
                <Sidebar isOpen={isOpenSidebar}>
                    {
                        isOpenSidebar && renderNavbarAndThemeToggle('column')
                    }
                </Sidebar>
            </HeaderWrapper>
            <GlobalStyle theme={isLightTheme ? 'light' : 'dark'} />
        </>
    );
}

export default Header;
