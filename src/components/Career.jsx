import React from 'react';
import { styled } from 'styled-components';

function Career(props) {
    return (
        <CareerWrap>
            <CareerTitle>EXPERIENCES</CareerTitle>
            <CareerSubTitle>커리어설명</CareerSubTitle>
        </CareerWrap>
    );
}

export const CareerWrap = styled.div`
    display: flex;
    flex-direction: column;
    height: calc(100vh - 54px);
    background-color: var(--bg-01);
`
export const CareerTitle = styled.h1`
    margin-top: 5vh;
    font-size: 72px;
    font-weight: 700;
    text-align: center;

`
export const CareerSubTitle = styled.h2`
    font-size: 40px;
    font-weight: 700;
    text-align: center;
`

export default Career;