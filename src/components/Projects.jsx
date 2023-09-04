import React from 'react';
import { styled } from 'styled-components';
function Projects() {
    const pjts = [
        {
            title: '다이다이',
            subTitle: '롤 악성 유저 신고 서비스',
            keywords: ['React', 'styled-components', 'TypeScript', 'esLint', '반응형'],
            desc: '게임 내에서 욕설을 하는 악성 유저를 신고하는 커뮤니티, 게임 화면을 캡처해서 올릴 수 있으며 라이엇 API와 연동해 게임 유저를 검색 할 수 있다. 타입스크립트와 반응형을 도전과제로 구현하였으며, esLint를 적용해 코드 컨벤션을 준수하였습니다. gitFlow를 적용해 협력하며 코드 충돌 방지',
            term: '진행중',
            mainFunction: '다국어 처리, 반응형, 유저 검색, 파일 업로드, 랭킹 조회',
            thumbnail: '/image/pjt/pjtThumbnailDiedie.svg',
            btns: {
                isGithub: true,
                gitHubURL: 'https://github.com/diedielolorg',
                isSite: false,
                siteURL: ''
            }
        },
        {
            title: '포트폴리오',
            subTitle: '포트폴리오 웹페이지',
            keywords: ['React', 'styled-components', 'Vercel'],
            desc: '정적 페이지로 포트폴리오 웹사이트를 구현했습니다.\r\n개인프로젝트로 작업한 포트폴리오 웹사이트 입니다. 다양한 CSS 효과를 사용하려고 노력하였습니다. 필터링, 스크롤이벤트 등 지속적으로 기능을 추가하고 리팩토링 합니다.',
            term: '진행중',
            thumbnail: '/image/pjt/pjtThumbnailPortfolio.svg',
            btns: {
                isGithub: true,
                gitHubURL: 'https://github.com/godjooyoung',
                isSite: false,
                siteURL: ''
            }
        },
        {
            title: '모각코ON:',
            subTitle: '위치기반 화상채팅 서비스',
            keywords: ['React', 'WebRTC', '데이터 시각화', 'SSE', 'WebSocket', '지도 API', '코드에디터', '성능 최적화', '인터렉티브 튜토리얼', 'styled-components', 'Redux-toolkit', 'React Query', 'Redux-thunk', 'Geolocation API'],
            desc: '코드리뷰를 하며 함께 성장할 수 있는 개발자들의 문화인 \'모여서 각자 코딩\'을 위한 위치기반 화상 채팅 서비스입니다. 실제 서비스를 운영하며 사용자 피드백을 반영하여 튜토리얼, 공지사항, 쪽지 등 기능 추가와 서비스 안정화를 진행하였습니다. 웹페이지 최적화를 위해 이미지 최적화, 폰트 최적화를 거쳐 라이트하우스 퍼포먼스 점수를 52점에서 85점으로 향상시켰습니다.',
            term: '23.05.19. - 23.06.29.',
            mainFunction: 'N:M 화상채팅, 화면공유, 실시간채팅, 코드에디터, 위치기반 모각코 참여, 실시간 알림, 마이페이지 통계데이터 시각화',
            thumbnail: '/image/pjt/pjtThumbnailMogakkoon.svg',
            btns: {
                isGithub: true,
                gitHubURL: 'https://github.com/godjooyoung/mogakko_on',
                isSite: true,
                siteURL: 'https://mogakko-on.vercel.app/'
            }
        },
        {
            title: '웨어비앤비',
            subTitle: '에어비앤비 클론',
            keywords: ['React', '필터링', '소셜 로그인', 'SSE', '다중 이미지 업로드', 'date-picker 라이브러리', '캐러셀'],
            desc: '여행은 어디든 살아 보는거야! 웨어비앤비. 숙소 공유를 위한 숙소 등록 서비스입니다. 짧은 기간 동안 에어비앤비 웹사이트를 클론코딩 하였습니다.',
            term: '23.05.12. - 23.05.18',
            mainFunction: '에어비엔비 메인의 필터링 검색기능, 날짜별 검색 기능, 호스트 방 등록화면, 실시간 알림 기능, 소셜 로그인, 프로그래스바, 드래그드랍 이미지 등록',
            thumbnail: '/image/pjt/pjtThumbnailWherebnb.svg',
            btns: {
                isGithub: true,
                gitHubURL: 'https://github.com/godjooyoung/where_bnb_fe',
                isSite: false,
                siteURL: '사이트 주소'
            }
        }
    ]

    const pjtUrlHandler = (url) => {
        window.open(url, "_blank", "noopener, noreferrer");
    }
    return (
        <ProjectsWrap id="projects">
            <ProjectsTitle>PROJECTS</ProjectsTitle>
            <PjtsWrap>
                <PjtItemWrap>
                    {
                        pjts.map((pjt, idx) => {
                            return (
                                <PjtWrapDiv>
                                    <PjtOutlineWrap>
                                        <PjtOutline>
                                            <PjtTitle>{pjt.title}</PjtTitle>
                                            <PjtSubTitle>{pjt.subTitle}</PjtSubTitle>
                                            <PjtKeywordWrap>
                                                {pjt.keywords.map((keyword, idx) => {
                                                    return (
                                                        <PjtKeyword>{keyword}</PjtKeyword>
                                                    )
                                                })}
                                            </PjtKeywordWrap>
                                        </PjtOutline>
                                        <PjtBtnWrap>
                                            {pjt.btns.isGithub ?
                                                <PjtButton onClick={() => { pjtUrlHandler(pjt.btns.gitHubURL) }}>
                                                    GitHub<BtnImg src={`${process.env.PUBLIC_URL}/image/arrow.svg`} />
                                                </PjtButton> : null}
                                            {pjt.btns.isSite ?
                                                <PjtButton onClick={() => { pjtUrlHandler(pjt.btns.siteURL) }}>
                                                    Site<BtnImg src={`${process.env.PUBLIC_URL}/image/arrow.svg`} />
                                                </PjtButton> : null}
                                        </PjtBtnWrap>
                                    </PjtOutlineWrap>
                                    <PjtDetailsWrap>
                                        <PjtDetails>
                                            <PjtDetailTitle>프로젝트 개요</PjtDetailTitle>
                                            <PjtDetailDesc>{pjt.desc}</PjtDetailDesc>
                                        </PjtDetails>
                                        <PjtDetails>
                                            <PjtDetailTitle>프로젝트 기간</PjtDetailTitle>
                                            <PjtDetailDesc>{pjt.term}</PjtDetailDesc>
                                        </PjtDetails>
                                        {pjt.mainFunction ?
                                            <PjtDetails>
                                                <PjtDetailTitle>주요 기능</PjtDetailTitle>
                                                <PjtDetailDesc>{pjt.mainFunction}</PjtDetailDesc>
                                            </PjtDetails>
                                            : null}

                                    </PjtDetailsWrap>
                                    <PjtThumbnailImg src={`${process.env.PUBLIC_URL}${pjt.thumbnail}`} />
                                </PjtWrapDiv>
                            )
                        })
                    }
                </PjtItemWrap>
            </PjtsWrap>
        </ProjectsWrap>
    );
}

export const ProjectsWrap = styled.div`
    display: flex;
    flex-direction: column;
    height: calc(100vh - 54px);
    height: fit-content;
    padding-bottom: 5vh;
    background-color: var(--bg-00);
    gap: 3rem;
`
export const ProjectsTitle = styled.h1`
    margin-top: 5vh;
    font-size: 72px;
    font-weight: 700;
    text-align: center;
`
export const PjtsWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 20px;
`

export const PjtItemWrap = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 40px;
`

export const PjtTitle = styled.h3`
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
`
export const PjtSubTitle = styled.h4`
    color: #8A939E;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    margin-bottom: 20px;
`
export const PjtKeywordWrap = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    flex-wrap: wrap;
`
export const PjtKeyword = styled.div`
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    border-radius: 10px;
    border: 1px solid #ffffff;
    height: 20px;
    padding: 1px;
    padding-left: 10px;
    padding-right: 10px;
    width: fit-content;
`
export const PjtOutlineWrap = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 50px 10px 50px 40px;
`
export const PjtOutline = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 5px;
`

export const PjtDetailsWrap = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 50px 40px 50px 10px;
    display: none;
`

export const PjtDetails = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
`
export const PjtDetailTitle = styled.h5`
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
`
export const PjtDetailDesc = styled.pre`
    color: #8A939E;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    white-space: pre-wrap;
`
export const PjtBtnWrap = styled.div`
    display: flex;
    column-gap: 10px;
`
export const BtnImg = styled.img`
    width: 24px;
    height: 24px;
    filter: brightness(0.2);
`
export const PjtButton = styled.button`
    height: 48px;
    background-color: transparent;
    border-radius: 5px;
    border: 1px solid rgba(255, 255, 255, 0.30);
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 10px;
    &:hover {
        transition: 0.5s;
        border: 1px solid rgb(255, 255, 255);
        ${BtnImg} {
            transition: 0.5s;
            filter: brightness(1);
        }
    }
`

export const PjtThumbnailImg = styled.img`
    border-radius: 20px;
    margin-top: 50px;
    margin-bottom: 50px;
    margin-left: 10px;
    margin-right: 40px;
`

export const PjtWrapDiv = styled.div`
    max-width: 1000px;
    height: 470px;
    border-radius: 20px;
    background-color: rgba(13,17,23,.8);
    border: 1px solid #21252c;
    display: flex;
    &:hover {
        /* box-shadow: inset 0 0 0 2px #ffffff; */
        ${PjtDetailsWrap} {
            display: flex;
        }
        ${PjtThumbnailImg} {
            display: none;
        }
    }
`

export default Projects;