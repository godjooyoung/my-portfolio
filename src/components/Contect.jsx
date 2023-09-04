import React, { useState } from 'react';
import { styled } from 'styled-components';

function Contect() {
    const initChannal = [
        {
            icon : 'phone',
            desc : '010 2694 9436',
            isSelected : false
        },
        {
            icon : 'mail',
            desc : 'xolovesjoo36@naver.com',
            isSelected : false
        },
        {
            icon : 'tistory',
            desc : 'https://youngsimi.tistory.com/',
            isSelected : false
        },
        {
            icon : 'github',
            desc : 'https://github.com/godjooyoung',
            isSelected : false
        },
    ]

    const [contects, setContects] = useState(initChannal)

    const channalClickHandler = (idx) => {
        const updatedChannal = [...contects] // 기존 배열을 복사

        // 해당 항목의 isSelected 값을 반전
        updatedChannal[idx].isSelected = !updatedChannal[idx].isSelected;

        setContects(updatedChannal)
    }

    return (
        <ContectWrap id="contect">
            <ContectTitle>Contect</ContectTitle>
            <ContectSubTitle>제 포트폴리오를 관심 있게 봐주셔서 감사합니다.</ContectSubTitle>
            <ContectChannals>
                {
                    contects.map((item, idx)=>{
                        return (
                            <ContectChannal onClick={()=>(channalClickHandler(idx))}>
                                {
                                    item.isSelected ? <ContectDesc isSelected={item.isSelected}>{item.desc}</ContectDesc> : <ContectIcon src={`${process.env.PUBLIC_URL}/image/${item.icon}.svg`}/>
                                }
                            </ContectChannal>
                        )
                    })
                }
            </ContectChannals>
        </ContectWrap>
    );
}

export const ContectWrap = styled.div`
    display: flex;
    flex-direction: column;
    height: fit-content;
    padding-bottom: 20vh;
    background-color: var(--bg-01);
    gap: 3rem;
`
export const ContectTitle = styled.h1`
    margin-top: 5vh;
    font-size: 72px;
    font-weight: 700;
    text-align: center;

`
export const ContectSubTitle = styled.h2`
    font-size: 24px;
    font-weight: 200;
    text-align: center;
`
export const ContectChannals = styled.div`
    display: flex;
    gap: 2rem;
    justify-content: center;
`
export const ContectChannal = styled.div`
    cursor: pointer;
    transition: 0.5s;
    &:hover {
        background-color: #61d9fb;
    }
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
`
export const ContectIcon = styled.img`
    width: 24px;
    height: 24px;
    margin: 10px;
    display: ${(props) => {return props.isSelected ? 'none' : 'block'}};
`
export const ContectDesc = styled.p`
    transition: 0.5s;
    margin: ${(props) => {return props.isSelected ? '10px' : '0px'}};
    display: ${(props) => {return props.isSelected ? 'block' : 'none'}};
`
export default Contect;