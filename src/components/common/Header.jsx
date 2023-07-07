import React from 'react';
import { styled } from 'styled-components';

function Header() {
    return (
        <CommonHeader>
            <div>DEV JOOYOUNG</div>
            <div>INTRO</div>
            <div>ABOUT</div>
            <div>SKILL</div>
            <div>PROJECTS</div>
            <div>EXPERIENCES</div>
            <div>CONTECT</div>
        </CommonHeader>
    );
}

export const CommonHeader = styled.header`
    width: 100%;
    height: 54px;
    background-color: var(--bg-00);
    color: var(--po-01);
    display: flex;
    gap: 10px;
    position: fixed;
`
export default Header;