import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const switchOff = () => keyframes`
    0% {
        left: 2px;
    }
    60% {
        left: 2px;
        width: 40px;
    }
    100% {
        left: 34px;
        width: 20px;
    }
`;
const switchOn = () => keyframes`
    0% {
        left: 34px;
        width: 20px;
    }
    60% {
        left: 10px;
        width: 40px;
    }
    100% {
        left: 2px;
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
    width: 60px;
    height: 30px;
    background: #96dcee;
    border-radius: 30px;
    border: 3px solid #72cce3;
    display: flex;
    position: relative;
    transition: all 350ms ease-in;

    &::before {
        animation-name: ${switchOn};
        animation-duration: 350ms;
        animation-fill-mode: forwards;
        transition: all 350ms ease-in;
        content: "";
        width: 20px;
        height: 20px;
        border: 3px solid #f5eb71;
        top: 2px;
        left: 2px;
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
        left: 56px;
        top: 10px;
        width: 2px;
        height: 2px;
        background: transparent;
        border-radius: 50%;
        opacity: 0;
    }
`;
const ToggleSpan = styled.span`
    width: 10px;
    height: 2px;
    border-radius: 2px;
    position: relative;
    background: #fff;
    left: 48px;
    top: 12px;
    transition: all 150ms ease-in;

    &::before {
        content: '';
        position: absolute;
        top: -5px;
        width: 20px;
        height: 2px;
        border-radius: 2px;
        background: #fff;
        left: -20px;
        transition: all 150ms ease-in;
    }
    &::after {
        content: '';
        position: absolute;
        top: 5px;
        width: 18px;
        height: 2px;
        border-radius: 2px;
        background: #fff;
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
        background: #fff;
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
        left: 28px;
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

function ThemeToggle() {
    return (
        <ThemeToggleWrapper>
            <Toggle>
                <ToggleCheckbox type="checkbox" id="toggle" />
                <ToggleLabel htmlFor="toggle"><ToggleSpan /></ToggleLabel>
            </Toggle>
        </ThemeToggleWrapper>
    );
}

export default ThemeToggle;
