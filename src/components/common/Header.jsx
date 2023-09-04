import React, { useRef } from 'react';
import { styled } from 'styled-components';

function Header() {

    const scrollToSectionHandler = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <CommonHeader>
            <LogohMenu>DEV JOOYOUNG</LogohMenu>
            <OneDepthMenu onClick={() => scrollToSectionHandler('intro')}>INTRO</OneDepthMenu>
            <OneDepthMenu onClick={() => scrollToSectionHandler('about')}>ABOUT</OneDepthMenu>
            <OneDepthMenu onClick={() => scrollToSectionHandler('skill')}>SKILL</OneDepthMenu>
            <OneDepthMenu onClick={() => scrollToSectionHandler('projects')}>PROJECTS</OneDepthMenu>
            <OneDepthMenu onClick={() => scrollToSectionHandler('experiences')}>EXPERIENCES</OneDepthMenu>
            <OneDepthMenu onClick={() => scrollToSectionHandler('contect')}>CONTECT</OneDepthMenu>
        </CommonHeader>
    );
}

export const CommonHeader = styled.header`
    width: 100%;
    height: 54px;
    background-color: var(--bg-00);
    color: var(--po-01);
    display: flex;
    gap: 15px;
    position: fixed;
    z-index: 2;
    background-color: hsl(216 28% 7%/50%);
    align-items: center;
    padding: 0px 15px;
    backdrop-filter: blur(5px);
    a::after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: #0087ca;
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
    }
    a:hover::after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }
`
export const LogohMenu = styled.p`
    font-size: 24px;
    font-weight: 700;
    transition: .5s;
    background-color:rgba(169, 169, 169,0.0);
    &:hover {
        background-color:rgba(169, 169, 169,0.4);
    }
`
export const OneDepthMenu = styled.p`
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    transition: .5s;
    border-bottom: 1px solid transparent;
    &:hover {
    border-color: rgb(255, 255, 255);
    }
`

export default Header;