import React from 'react';
import { styled } from 'styled-components';

function Skill() {
    return (
        <SkillWrap>
            <SkillTitle>SKILL</SkillTitle>
            <SkillsWrap>
                <SkillPartWrap>
                    <SkillPart>
                        <SkillItem>
                            <SkillImg src={`${process.env.PUBLIC_URL}/image/skills/_skill_html.png`} alt="html아이콘" />
                            <SkillDesc>
                                <SkillDescTitle>
                                    HTML
                                </SkillDescTitle>
                                <SkillDescDetails>
                                    웹표준을 준수합니다.
                                </SkillDescDetails>
                            </SkillDesc>
                        </SkillItem>
                        <SkillItem>
                            <SkillImg src={`${process.env.PUBLIC_URL}/image/skills/_skill_css.png`} alt="css아이콘" />
                            <SkillDesc>
                                <SkillDescTitle>
                                    CSS
                                </SkillDescTitle>
                                <SkillDescDetails>
                                    <p>애니메이션</p>
                                    <p>크로스브라우징</p>
                                </SkillDescDetails>
                            </SkillDesc>
                        </SkillItem>
                        <SkillItem>
                            <SkillImg src={`${process.env.PUBLIC_URL}/image/skills/_skill_js.png`} alt="js아이콘" />
                            <SkillDesc>
                                <SkillDescTitle>
                                    JAVASCRIPT
                                </SkillDescTitle>
                                <SkillDescDetails>
                                    <p>ES6문법에 익숙합니다.</p>
                                </SkillDescDetails>
                            </SkillDesc>
                        </SkillItem>
                        <SkillItem>
                            <SkillImg src={`${process.env.PUBLIC_URL}/image/skills/_skill_react.png`} alt="react아이콘" />
                            <SkillDesc>
                                <SkillDescTitle>
                                    REACT
                                </SkillDescTitle>
                                <SkillDescDetails>
                                    <p>컴포넌트 최적화 및 재사용에 관심이 많습니다.</p>
                                </SkillDescDetails>
                            </SkillDesc>
                        </SkillItem>
                        <SkillItem>
                            <SkillImg src={`${process.env.PUBLIC_URL}/image/skills/_skill_sc.png`} alt="sc아이콘" />
                            <SkillDesc>
                                <SkillDescTitle>
                                    Styled-Components
                                </SkillDescTitle>
                                <SkillDescDetails>
                                    <p>props를 통한 동적 스타일링에 관심이 많습니다.</p>
                                </SkillDescDetails>
                            </SkillDesc>
                        </SkillItem>
                    </SkillPart>
                    <SkillPart>
                        <SkillItem>
                            <SkillImg src={`${process.env.PUBLIC_URL}/image/skills/_skill_spring.png`} alt="spring아이콘" />
                            <SkillDesc>
                                <SkillDescTitle>
                                    SPRING
                                </SkillDescTitle>
                                <SkillDescDetails>
                                    <p>Spring, SpringBoot 앤드포인트에 대해 이해하고 있습니다.</p>
                                </SkillDescDetails>
                            </SkillDesc>
                        </SkillItem>
                        <SkillItem>
                            <SkillImg src={`${process.env.PUBLIC_URL}/image/skills/_skill_spring.png`} alt="oracle아이콘" />
                            <SkillDesc>
                                <SkillDescTitle>
                                    ORACLE
                                </SkillDescTitle>
                                <SkillDescDetails>
                                    <p>오라클 전문 기관에서 ORACLE DBMS에 대해 배웠으며 SQLD 자격증 취득을 통해 쿼리에 대한 이해를 가지고 있습니다.</p>
                                </SkillDescDetails>
                            </SkillDesc>
                        </SkillItem>
                    </SkillPart>
                    <SkillPart>
                        <SkillItem>
                            <SkillImg src={`${process.env.PUBLIC_URL}/image/skills/_skill_vercel.png`} alt="vercel아이콘" />
                            <SkillDesc>
                                <SkillDescTitle>
                                    VERCEL
                                </SkillDescTitle>
                                <SkillDescDetails>
                                    <p>Vercel을 통한 정적페이지 배포 경험이 있습니다.</p>
                                </SkillDescDetails>
                            </SkillDesc>
                        </SkillItem>
                        <SkillItem>
                            <SkillImg src={`${process.env.PUBLIC_URL}/image/skills/_skill_figma.png`} alt="figma아이콘" />
                            <SkillDesc>
                                <SkillDescTitle>
                                    FIGMA
                                </SkillDescTitle>
                                <SkillDescDetails>
                                    <p>Figma를 통한 디자이너와 협업이 가능합니다.</p>
                                </SkillDescDetails>
                            </SkillDesc>
                        </SkillItem>
                        <SkillItem>
                            <SkillImg src={`${process.env.PUBLIC_URL}/image/skills/_skill_git.png`} alt="git아이콘" />
                            <SkillDesc>
                                <SkillDescTitle>
                                    GIT
                                </SkillDescTitle>
                                <SkillDescDetails>
                                    <p>형상관리도구인 GIT을 이해하며 업무에서 충분히 다룰줄 압니다.</p>
                                </SkillDescDetails>
                            </SkillDesc>
                        </SkillItem>
                        <SkillItem>
                            <SkillImg src={`${process.env.PUBLIC_URL}/image/skills/_skill_github.png`} alt="github아이콘" />
                            <SkillDesc>
                                <SkillDescTitle>
                                    GITHUB
                                </SkillDescTitle>
                                <SkillDescDetails>
                                    <p>GitHub를 통한 이슈관리 및 PullReqeust를 통해 효과적으로 협업합니다.</p>
                                </SkillDescDetails>
                            </SkillDesc>
                        </SkillItem>
                    </SkillPart>
                </SkillPartWrap>

            </SkillsWrap>
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
    gap: 15px;
    width: 66%;
    margin: 0 auto;
    flex: 1;
`

export const SkillsWrap = styled.div`
    flex: 1;
    display: flex;
    justify-items: center;
    align-items: center;
    width: 66%;
    margin: 0 auto;
`

export const SkillPart = styled.div`
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
    border-radius: 14px;
    position: absolute;
    top: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
`
export const SkillDescTitle = styled.h3`
    font-size: 30px;
    font-weight: 700;
    margin: 0 1rem 0 1rem;
`
export const SkillDescDetails = styled.div`
    margin: 0 1rem 0 1rem;
    text-align: center;
`

export const SkillImg = styled.img`
    width: 190px;
    height: 190px;
`
export const SkillItem = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    &:hover ${SkillDesc} {
        opacity: 1;
    }
`

export default Skill;