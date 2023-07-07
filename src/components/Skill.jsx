import React from 'react';
import { styled } from 'styled-components';

function Skill() {
    return (
        <SkillWrap>
            <SkillTitle>SKILL</SkillTitle>
            <SkillSubTitle>스킬들 사진으로 뿅뿅 넣기</SkillSubTitle>
        </SkillWrap>
    );
}

export const SkillWrap = styled.div`
    display: flex;
    flex-direction: column;
    height: calc(100vh - 54px);
    background-color: var(--bg-01);
`
export const SkillTitle = styled.h1`
    font-size: 72px;
    font-weight: 700;
    text-align: center;
`
export const SkillSubTitle = styled.h2`
    font-size: 40px;
    font-weight: 700;
    text-align: center;
`

export default Skill;