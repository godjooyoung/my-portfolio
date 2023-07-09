import React from 'react';
import { styled } from 'styled-components';
function Projects() {
    return (
        <ProjectsWrap>
            <ProjectsTitle>PROJECTS</ProjectsTitle>
            <PjtsWrap>
                <PjtItemWrap>
                    <PjtItemInfo>
                        <h2>모각코 ON:</h2>
                        <h3>2023.07. (팀프로젝트)</h3>
                    </PjtItemInfo>
                    <PjtItemDescWrap>
                        <PjtThumnailWrap>
                            <PjtThumnailImg src={`${process.env.PUBLIC_URL}/image/pjt/_pjt_thumnail_mo.png`} alt="프로젝트이미지" />
                        </PjtThumnailWrap>
                        <PjtItemDesc>
                            <PjtItemDescContent>
                                <p>
                                    코드리뷰를 하며 함께 성장할 수 있는 개발자들의 문화인 '모여서 각자 코딩' (이하, 모각코)을 위한 <span>위치기반 화상 채팅 서비스</span>입니다.
                                    N:M 화상채팅, 화면공유, 실시간 채팅, 코드에디터, 위치기반 모각코 참여, 실시간 알림 기능, 통계데이터 시각화 등을 제공합니다.<br/>
                                    <span>실제 서비스를 운영</span>하며 사용자 피드백을 반영하여 튜토리얼, 공지사항, 서비스 안정화, 쪽지기능 추가 및 강화를 통해<span>서비스 개선</span>을 하였습니다.<br/>
                                    웹페이지 최적화를 위해 이미지 최적화, 폰트 최적화를 거쳐 <span>라이트하우스</span> 퍼포먼스 점수를 향상시켰습니다.
                                </p>
                                <ul>
                                    <PjtItemListItem>
                                        <p><span>FE - React</span></p>
                                    </PjtItemListItem>
                                    <PjtItemListItem>
                                        <p><span>BE - Spring</span></p>
                                    </PjtItemListItem>
                                    <PjtItemListItem>
                                        <p><span>주요기능</span></p>
                                        <ul>
                                            <li>
                                                N:M 모각코 화상채팅, 화면공유
                                            </li>
                                            <li>
                                                실시간 채팅, 실시간 알림
                                            </li>
                                            <li>
                                                모각코 시간 통계 데이터 시각화
                                            </li>
                                            <li>
                                                인터렉티브 사용자 튜토리얼
                                            </li>
                                        </ul>
                                    </PjtItemListItem>
                                    <PjtItemListItem>
                                        <span>Deployment - Vercel</span>
                                    </PjtItemListItem>
                                    
                                </ul>
                            </PjtItemDescContent>
                            <PjtItemDescBtnsWrap>
                                <PjtItemDescBtn>GitHub</PjtItemDescBtn>
                                <PjtItemDescBtn>Site</PjtItemDescBtn>
                            </PjtItemDescBtnsWrap>
                        </PjtItemDesc>
                    </PjtItemDescWrap>
                </PjtItemWrap>
                <PjtItemWrap>
                    <h2>프로젝트명</h2>
                    <div>
                        <div>이미지</div>
                        <div>
                            <div>
                                <p>프로젝트 간단 설명 이런 절너 프로제트겨다 좋았다 어저고저저쪽</p>
                                <ul>
                                    <li>
                                        <p>프로젝트기간 : 3.3.2.3.23.</p>
                                    </li>
                                    <li>
                                        <p>be : 3.3.2.3.23.</p>
                                    </li>
                                    <li>
                                        <p>fe : 3.3.2.3.23.</p>
                                    </li>
                                    <li>
                                        <p>sdf : 3.3.2.3.23.</p>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <button>버튼1</button><button>버튼2</button>
                            </div>
                        </div>
                    </div>
                </PjtItemWrap>
            </PjtsWrap>

        </ProjectsWrap>
    );
}

export const ProjectsWrap = styled.div`
    display: flex;
    flex-direction: column;
    height: calc(100vh - 54px);
    background-color: var(--bg-00);
    gap: 1rem;
`
export const ProjectsTitle = styled.h1`
    margin-top: 5vh;
    font-size: 72px;
    font-weight: 700;
    text-align: center;
`
export const ProjectsSubTitle = styled.h2`
    font-size: 40px;
    font-weight: 700;
    text-align: center;
`

// 프로젝트들
export const PjtsWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 20px;
`
// 프로젝트 아이템
export const PjtItemWrap = styled.div`
    width: 80%;
    background-color: #30363D;
    border-radius: 6px;
    border: 0.75px solid #6E7681;
    padding: 20px;
`
export const PjtItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
    h2{
        font-size: 48px;
        font-weight: 700;
    }
    h3{
        font-size: 18px;
        font-weight: 500;
    }

`
export const PjtItemDescWrap = styled.div`
    display: grid;
    gap: 10px;
    grid-template-columns: 1fr 1fr;
    padding: 20px;
`
export const PjtThumnailWrap = styled.div`
    width: 80%;
    border-radius: 6px;
    border: 0.75px solid #6E7681;
    overflow: hidden;
    margin: 0 auto;
`
export const PjtThumnailImg = styled.img`
    object-fit: cover;
    height: 100%;
    width: 100%;
`
export const PjtItemDesc = styled.div`
    font-size: 18px;
    line-height: 1.6rem;
    p{
        color: #EBF5FF80
    }
    span {
        color: #ffffff;
    }
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: space-between;
`

export const PjtItemDescContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const PjtItemDescBtnsWrap = styled.div`
    text-align: right;
`
export const PjtItemDescBtn = styled.button`
    width: 100px;
    height: 30px;
`

export const PjtItemListItem = styled.li`
    list-style: disc;
    li{
        list-style: circle;
        list-style-position: inside;
        color: #EBF5FF80
    }
`
export default Projects;