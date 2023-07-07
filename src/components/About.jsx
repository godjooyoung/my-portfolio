import React from 'react';
import { styled } from 'styled-components';

function About() {
    return (
        <AboutWrap>
            <AboutTitle>ABOUT</AboutTitle>
            <AboutSubTitle>프론트앤드 개발자 신주영에 대해 소개</AboutSubTitle>
            <AboutContentWrap>
                <h3>프론트앤드 개발자 신주영입니다.</h3>
                <p>함께 일하고 싶은 개발자가 되고자 합니다.</p>
                <p>서로 지식을 공유하고 성장하는 개발자 문화를 좋아합니다.</p>
                <p>오래 살아남는 코드를 추구하며 서비스를 만드는 생산자라는 자부심으로 일합니다.</p>
            </AboutContentWrap>
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
    margin-top: 5vh;
    font-size: 72px;
    font-weight: 700;
    text-align: center;
`
export const AboutSubTitle = styled.h2`
    font-size: 40px;
    font-weight: 700;
    text-align: center;
`
export const AboutContentWrap = styled.div`
    font-size: 36px;
    font-weight: 400;
    h3{
        color: var(--po-00);
    }
`
export default About;