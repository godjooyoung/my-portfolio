import React from 'react';
import { styled } from 'styled-components';

function Contect() {
    return (
        <ContectWrap>
            <ContectTitle>Contect</ContectTitle>
            <ContectSubTitle>설명설명</ContectSubTitle>
        </ContectWrap>
    );
}

export const ContectWrap = styled.div`
    display: flex;
    flex-direction: column;
    height: calc(100vh - 54px);
    background-color: var(--bg-01);
`
export const ContectTitle = styled.h1`
    margin-top: 5vh;
    font-size: 72px;
    font-weight: 700;
    text-align: center;

`
export const ContectSubTitle = styled.h2`
    font-size: 40px;
    font-weight: 700;
    text-align: center;
`
export default Contect;