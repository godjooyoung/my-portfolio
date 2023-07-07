import React from 'react';
import { styled } from 'styled-components';

function Skill() {
    return (
        <SkillWrap>
            <SkillTitle>SKILL</SkillTitle>
            <SkillPartWrap>
                <SkillPart>
                    <SkillItem>
                        <SkillImg src={`${process.env.PUBLIC_URL}/image/skills/_skill_html.png`} alt="html아이콘"/>
                        <SkillDesc>HTML설명</SkillDesc>
                    </SkillItem>
                    <SkillItem>
                        <SkillImg src={`${process.env.PUBLIC_URL}/image/skills/_skill_css.png`} alt="css아이콘" />
                        <SkillDesc>css설명</SkillDesc>
                    </SkillItem>
                    <SkillItem>
                        <SkillImg src={`${process.env.PUBLIC_URL}/image/skills/_skill_js.png`} alt="js아이콘" />
                        <SkillDesc>ES6 문법에 익숙합니다.</SkillDesc>
                    </SkillItem>
                    <SkillItem>
                        <SkillImg src={`${process.env.PUBLIC_URL}/image/skills/_skill_react.png`} alt="react아이콘" />
                        <SkillDesc>react 설명</SkillDesc>
                    </SkillItem>
                    <SkillItem>
                        <SkillImg src={`${process.env.PUBLIC_URL}/image/skills/_skill_sc.png`} alt="sc아이콘" />
                        <SkillDesc>스타일드 컴포넌트 설명</SkillDesc>
                    </SkillItem>
                </SkillPart>
                <SkillPart>
                    <SkillImg src={`${process.env.PUBLIC_URL}/image/skills/_skill_spring.png`} alt="spring아이콘" />
                    <SkillImg src={`${process.env.PUBLIC_URL}/image/skills/_skill_spring.png`} alt="oracle아이콘" />
                </SkillPart>
                <SkillPart>
                    <SkillImg src={`${process.env.PUBLIC_URL}/image/skills/_skill_vercel.png`} alt="vercel아이콘" />
                    <SkillImg src={`${process.env.PUBLIC_URL}/image/skills/_skill_figma.png`} alt="figma아이콘" />
                    <SkillImg src={`${process.env.PUBLIC_URL}/image/skills/_skill_git.png`} alt="git아이콘" />
                    <SkillImg src={`${process.env.PUBLIC_URL}/image/skills/_skill_github.png`} alt="github아이콘" />
                </SkillPart>
            </SkillPartWrap>
        </SkillWrap>
    );
}

export const SkillWrap = styled.div`
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 54px);
    height: fit-content;
    background-color: var(--bg-01);
`
export const SkillTitle = styled.h1`
    margin-top: 5vh;
    font-size: 72px;
    font-weight: 700;
    text-align: center;
`
export const SkillSubTitle = styled.h2`
    font-size: 40px;
    font-weight: 700;
    text-align: center;
`

export const SkillPartWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 90%;
    margin: 0 auto;
`

export const SkillPart = styled.div`
    background-color: var(--bg-00);
    display: flex;
    display: grid;
    row-gap: 10px;
    grid-template-columns: repeat(auto-fill, minmax(190px, auto));
`

export const SkillDesc = styled.div`
    width: 190px;
    height: 190px;
    opacity: 0;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 15px;
    position: absolute;
    top: 0px;
`
export const SkillImg = styled.img`
    width: 190px;
    height: 190px;
`
export const SkillItem = styled.div`
    position: relative;
    &:hover ${SkillDesc} {
        opacity: 1;
    }
`

export default Skill;