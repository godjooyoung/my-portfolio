import React from 'react';
import { styled } from 'styled-components';

function About() {
    return (
        <AboutWrap>
            <AboutTitle>ABOUT</AboutTitle>
            <AboutSubTitle>프론트앤드 개발자 신주영에 대해 소개</AboutSubTitle>
        </AboutWrap>
    );
}

export const AboutWrap = styled.div`
    display: flex;
    flex-direction: column;
    height: calc(100vh - 54px);
    background-color: var(--bg-00);
    margin-top: 54px;
`

export const AboutTitle = styled.h1`
    font-size: 72px;
    font-weight: 700;
    text-align: center;
`
export const AboutSubTitle = styled.h2`
    font-size: 40px;
    font-weight: 700;
    text-align: center;
`
export default About;