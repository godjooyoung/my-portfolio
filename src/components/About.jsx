import React from 'react';
import { styled } from 'styled-components';

function About() {
    return (
        <AboutWrap id="about">
            <AboutTitle>ABOUT</AboutTitle>
            <AboutContentWrap>
                <div>
                    <h3>프론트앤드 개발자</h3>
                    <span>신주영</span>
                </div>
                <p>
                함께 일하고 싶은 개발자가 되고자 합니다.<br/>
                서로 지식을 공유하고 성장하는 개발자 문화를 좋아합니다.<br/>
                간단하면서 오래 살아남는 코드를 추구하며, 서비스를 만드는 생산자라는 자부심으로 일합니다.<br/>
                시각적으로 보여지는 것에 재미를 느껴 프론트앤드 개발을 시작하였습니다.<br/>
                사용자가 제가 만든 서비스를 사용할 때 기쁨을 느낍니다.<br/>
                </p>

            </AboutContentWrap>
        </AboutWrap>
    );
}

export const AboutWrap = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--bg-00);
    margin-top: 54px;
    padding-bottom: 5vh;
    height: fit-content;
    background: linear-gradient(180deg, rgba(14,17,23,1) 0%, rgba(32,35,40,1) 64%, rgba(40,44,52,1) 87%);
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
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 5vh;
    font-size: 36px;
    font-weight: 400;
    h3{
        color: var(--po-00);
        font-weight: 900;
    }
    span{
        font-size: 48px;
        font-weight: 700;
    }
    div{
        display: flex;
        align-items: end;
        gap: 10px;
    }
    p{
        font-size: 18px;
        font-weight: 400;
        margin-top: 1rem;
        margin-left: 1rem;
        margin-right: 1rem;
        line-height: 2rem;
    }


`
export default About;