import React from 'react';
import { styled } from 'styled-components';

function Intro(props) {
    return (
        <IntroWrap>
            <IntroSubTitle>Portfolio</IntroSubTitle>
            <IntroTitle>Jooyoung Shin</IntroTitle>
            <IntroSubTitle>Front-End Developer</IntroSubTitle>
        </IntroWrap>
    );
}

export const IntroWrap = styled.div`
    display: flex;
    flex-direction: column;
    height: calc(100vh - 54px);
    justify-content: center;
`
export const IntroTitle = styled.h1`
    margin-top: 5vh;
    font-size: 72px;
    font-weight: 700;
    text-align: center;

`
export const IntroSubTitle = styled.h2`
    font-size: 40px;
    font-weight: 700;
    text-align: center;
`
export default Intro;