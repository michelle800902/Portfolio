import React from 'react';
import styled, { keyframes } from 'styled-components';
import { ReactComponent as SunSVG } from '../../assets/images/sun.svg';
import { ReactComponent as MoonSVG } from '../../assets/images/moon.svg';

const switchOff = () => keyframes`
    0% {
        left: 0px;
    }
    60% {
        left: 0px;
        width: 30px;
    }
    100% {
        left: 26px;
        width: 18px;
    }
`;
const switchOn = () => keyframes`
    0% {
        left: 26px;
        width: 18px;
    }
    60% {
        left: 10px;
        width: 30px;
    }
    100% {
        left: 0px;
    }
`;
const ThemeToggleWrapper = styled.div`
    display: flex;
    align-items: center;
`;
const Toggle = styled.div`
    position: relative;
`;
/** Placeholder element, starting at blue **/
/** The sun cloud and moon stars **/
/** Sun & Moon element **/
/** Gray dots on the moon **/
const ToggleLabel = styled.label`
    width: 50px;
    height: 25px;
    background: #96dcee;
    border-radius: 25px;
    border: 3px solid #72cce3;
    display: flex;
    position: relative;
    transition: all 350ms ease-in;
    cursor: pointer;

    &::before {
        animation-name: ${switchOn};
        animation-duration: 350ms;
        animation-fill-mode: forwards;
        transition: all 350ms ease-in;
        content: "";
        width: 18px;
        height: 18px;
        border: 3px solid #f5eb71;
        top: 0px;
        left: 0px;
        position: absolute;
        border-radius: 20px;
        background: #fffaa8;
    }
    &::after {
        transition-delay: 0ms;
        transition: all 250ms ease-in;
        position: absolute;
        content: "";
        box-shadow: #e8e8ea -12px 0 0 2px, #e8e8ea -16px 6px 0 0.5px;
        left: 48px;
        top: 6px;
        width: 2px;
        height: 2px;
        background: transparent;
        border-radius: 50%;
        opacity: 0;
    }
`;
const ToggleSpan = styled.span`
    width: 6px;
    height: 2px;
    border-radius: 2px;
    position: relative;
    background: var(--white);
    left: 42px;
    top: 12px;
    transition: all 150ms ease-in;

    &::before {
        content: '';
        position: absolute;
        top: -5px;
        width: 12px;
        height: 2px;
        border-radius: 2px;
        background: var(--white);
        left: -16px;
        transition: all 150ms ease-in;
    }
    &::after {
        content: '';
        position: absolute;
        top: 5px;
        width: 12px;
        height: 2px;
        border-radius: 2px;
        background: var(--white);
        left: -10px;
        transition: all 150ms ease-in;
    }
`;
/** Checked will all flip from sun to moon **/
/** Change the label color **/
const ToggleCheckbox = styled.input`
    display: none;

    &:checked + ${ToggleLabel} {
        background: #6b7abb;
        border-color: #5d6baa;
    }
    &:checked + ${ToggleLabel}:before {
        background: var(--white);
        border-color: #e8e8ea;
        animation-name: ${switchOff};
        animation-duration: 350ms;
        animation-fill-mode: forwards;
    }
    &:checked + ${ToggleLabel}:after {
        transition-delay: 350ms;
        opacity: 1;
    }
    &:checked + ${ToggleLabel} ${ToggleSpan} {
        left: 20px;
        width: 2px;
    }
    &:checked + ${ToggleLabel} ${ToggleSpan}:before {
        width: 2px;
        height: 2px;
        top: -5px;
    }
    &:checked + ${ToggleLabel} ${ToggleSpan}:after {
        width: 2px;
        height: 2px;
        left: -12px;
        top: 5px;
    }
`;
const Theme = styled.div`
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

function ThemeToggle({ isLightTheme, onSwitchTheme }) {
    return (
        <ThemeToggleWrapper>
            <Toggle>
                <ToggleCheckbox type="checkbox" id="toggle" />
                <ToggleLabel htmlFor="toggle" onClick={onSwitchTheme}>
                    <ToggleSpan />
                </ToggleLabel>
            </Toggle>
            <Theme>
                {
                    isLightTheme
                    ? <SunSVG width={50} height={50} />
                    : <MoonSVG width={36} height={36} />
                }
            </Theme>
        </ThemeToggleWrapper>
    );
}

export default ThemeToggle;
