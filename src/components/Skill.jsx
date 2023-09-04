import React from 'react';
import { styled } from 'styled-components';

function Skill() {
    const skills = [
        { 
            img : '/image/skills/html5.svg',
            name : 'HTML',
            desc : '웹표준을 준수합니다.'
        },
        { 
            img : '/image/skills/css3.svg',
            name : 'CSS',
            desc : '애니메이션\r\n크로스브라우징'
        },
        { 
            img : '/image/skills/javascript.svg',
            name : 'JavaScript',
            desc : 'ES6문법에 익숙합니다.\r\n엔진 동작 원리에 관심이 많습니다.'
        },
        { 
            img : '/image/skills/react.svg',
            name : 'React',
            desc : '컴포넌트 재사용\r\n랜더링 최적화'
        },
        { 
            img : '/image/skills/redux.svg',
            name : 'Redux',
            desc : 'Redux/Redux-toolkit\n\r활용한 전역 상태 관리'
        },
        { 
            img : '/image/skills/styledcomponents.svg',
            name : 'styled-components',
            desc : 'props를 통한 동적 스타일링에 관심이 많습니다.'
        },
        { 
            img : '/image/skills/spring.svg',
            name : 'Spring',
            desc : '앤드포인트에 대해 이해하며\n\r효율적으로 소통합니다.'
        },
        { 
            img : '/image/skills/oracle.svg',
            name : 'Oracle',
            desc : '오라클 전문기관 교육 수료\n\rSQLD 취득'
        },
        { 
            img : '/image/skills/figma.svg',
            name : 'Figma',
            desc : 'Figma로 디자이너와\n\r협업이 가능합니다.'
        },
        { 
            img : '/image/skills/github.svg',
            name : 'Git/GitHub',
            desc : '형상관리 및 협업\n\rfork,pl 활용'
        },
        { 
            img : '/image/skills/vercel.svg',
            name : 'Vercel',
            desc : 'Vercel을 활용한\n\r정적 페이지 배포 경험'
        },
        
    ]
    return (
        <SkillWrap id="skill">
            <SkillTitle>SKILL</SkillTitle>
            <SkillsWrap>
                <SkillItemWrap>
                    {
                        skills.map((skill, idx) => {
                            return (
                                <SkillWrapDiv>
                                    <SkillImg src={`${process.env.PUBLIC_URL}${skill.img}`}/>
                                    <SkillName>{skill.name}</SkillName>
                                    <SkillDesc>{skill.desc}</SkillDesc>
                                </SkillWrapDiv>
                            )
                        })      
                    }
                </SkillItemWrap>
            </SkillsWrap>
        </SkillWrap>
    );
}

export const SkillTitle = styled.h1`
    margin-top: 5vh;
    font-size: 72px;
    font-weight: 700;
    text-align: center;
`

export const SkillWrap = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 5vh;
    height: fit-content;
    background-color: var(--bg-01);
    background: rgb(40,44,52);
    background: linear-gradient(180deg, rgba(40,44,52,1) 35%, rgba(32,35,40,1) 79%);
    gap: 3rem;
`

export const SkillItemWrap = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
`
export const SkillsWrap = styled.div`
    flex: 1;
    display: flex;
    justify-items: center;
    align-items: center;
    width: 66%;
    margin: 0 auto;
`
export const SkillImg = styled.img`
    width: 60px;
    height: 60px;
    margin-right: 20px;
`
export const SkillName = styled.h3`
    font-size: 60px;
    font-weight: 900;
    text-align: center;
    color: #8B949E;
`
export const SkillDesc = styled.p`
    position: absolute;
    font-size: 25px;
    font-weight: 300;
    text-align: center;
    color: #ffffff;
    left: 0px;
    white-space: pre-wrap;
`
export const SkillWrapDiv = styled.div`
    display: flex;
    position: relative;
    background-color: transparent;
    justify-content: center;
    align-items: center;
    padding: 0px 28px;
    height: 110px;
    border-radius: 10px;
    width: fit-content;
    ${SkillDesc} {
        visibility: hidden;
        opacity: 0;
        width: 0px;
    }
    &:hover {
        transition: 0.3s;
        box-shadow: inset 0 0 0 2px #ffffff;
        ${SkillImg}, ${SkillName} {
            visibility: hidden;
            opacity: 0;
        }
        ${SkillDesc} {
            visibility: initial;
            opacity: 1;
            width: 100%;
        }
    }
    
`
export default Skill;