import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';

function Career(props) {
    // 메뉴 필터
    const filterMenus = [
        {
            menuName: 'All',
            isSelected: true
        },
        {
            menuName: 'Career',
            isSelected: false
        },
        {
            menuName: 'Certificate',
            isSelected: false
        },
        {
            menuName: 'Education',
            isSelected: false
        }
    ]

    // 경험 목록
    const initExps = [
        {
            type: 'Education',
            expsTitle: '부트캠프 항해99',
            expsDesc: ['23.03. - 23.07.', '온보딩', '디자이너/백앤드/프론트앤드 협업 팀 프로젝트 진행', 'UX/UI 우수 프로젝트 수상', 'React']
        },
        {
            type: 'Career',
            expsTitle: '2월대개봉',
            expsDesc: ['22.12. - 23.02.', '개인정보 보호 코코넛 서비스 리팩토링', '테스트 코드', 'mybatis to jpa', 'svelte']
        },
        {
            type: 'Education',
            expsTitle: '성능 극대화를 위한 SQL 튜닝 및 사례 연구',
            expsDesc: ['20.11.', '디지털 산업 진흥원', 'SQL 최적화 기본 원리, 튜닝 사례 연구 교육']
        },
        {
            type: 'Certificate',
            expsTitle: 'SQLD',
            expsDesc: ['20.10.', '한국 데이터 산업 진흥원', 'SQL 개발자 자격증 취득']
        },
        {
            type: 'Career',
            expsTitle: '(주)SGA',
            expsDesc: ['20.08. - 22.11.', 'Java, JavaScript, Spring, SpringBoot, 엑스빌더, Thymeleaf, db2','차세대 지능형 나이스 프로젝트', '건강상태 자가진단 프로젝트', '나이스 사용자 편의성 개선 사업']
        },
        {
            type: 'Certificate',
            expsTitle: '정보 처리 기사',
            expsDesc: ['20.06.', '한국 산업 인력 공단', '정보 처리 기사 취득']
        },
        {
            type: 'Education',
            expsTitle: '스마트 웹&콘텐츠 개발자 양성 과정',
            expsDesc: ['19.12. - 20.07.', 'Java, JavaScript, Jsp, Spring, Oracle, Linux 등 개발 전반에 대한 실습 및 교육', 'DB모델링, 프로젝트 구현, 시연, 개선']
        },   
    ]

    const [menus, setMenus] = useState(filterMenus)

    const filteringHandler = (type) => {
        const updatedMenus = menus.map(menu => {
            if (menu.menuName === type) {
                return {
                    ...menu,
                    isSelected: true
                }
            } else {
                return {
                    ...menu,
                    isSelected: false
                }
            }
        })
        setMenus(updatedMenus)
    }

    const [exps, setExps] = useState(initExps)

    useEffect(() => {
        menus.map((menu)=>{
            if(menu.isSelected){
                if(menu.menuName === 'All'){
                    setExps(initExps)
                }else{
                    setExps(initExps.filter(exp => exp.type === menu.menuName))
                }
            }
        })

    }, [menus])
    

    return (
        <CareerWrap id="experiences">
            <CareerTitle>EXPERIENCES</CareerTitle>
            <CareeerFilterHeader>
                {
                    menus.map((menu, idx) => {
                        return (
                            <FilterMenu onClick={()=>(filteringHandler(menu.menuName))} isSelected={menu.isSelected}>{menu.menuName}</FilterMenu>
                        )
                    })
                }
            </CareeerFilterHeader>
            <CareersWrap>
                {
                    exps.map((exp, idx) => {
                        return (
                            <CareersItem>
                                <IconImg src={`${process.env.PUBLIC_URL}/image/exp/icon${exp.type}.svg`}/>
                                <ExpOutline>
                                    <ExpType>{exp.type}</ExpType>
                                    <ExpTitle>{exp.expsTitle}</ExpTitle>
                                </ExpOutline>
                                <ExpDesc>
                                    <ExpDescTitle>about</ExpDescTitle>
                                    {
                                        exp.expsDesc.map((desc)=>{
                                            return(
                                                <ExpDescP>- {desc}</ExpDescP>
                                            )
                                        })
                                    }
                                </ExpDesc>
                                
                            </CareersItem>
                        )
                    })
                }

            </CareersWrap>
        </CareerWrap>
    );
}

export const CareerWrap = styled.div`
    display: flex;
    flex-direction: column;
    /* height: calc(100vh - 54px); */
    background-color: var(--bg-01);
    padding-bottom: 5vh;
    height: fit-content;
    gap: 3rem;
    background: rgb(32,35,40);
    background: linear-gradient(180deg, rgba(32,35,40,1) 35%, rgba(40,44,52,1) 79%);
`
export const CareerTitle = styled.h1`
    margin-top: 5vh;
    font-size: 72px;
    font-weight: 700;
    text-align: center;
`
export const CareeerFilterHeader = styled.div`
    display: flex;
    gap: 25px;
    justify-content: center;
`
export const FilterMenu = styled.p`
    font-size: 24px;
    cursor: pointer;
    border-bottom: 1px solid transparent;
    border-color : ${(props) => { return props.isSelected ? 'white' : 'transparent' }};
    transition: .5s;
    &:hover {
    border-color: rgb(255, 255, 255);
    }
    
`
export const CareersWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 2rem;
    margin: 2rem auto;
`
export const CareersItem = styled.div`
    display: flex;
    gap: 10px;
    width: 750px;
    border-bottom: 2px rgba(255, 255, 255, 0.1) dashed;
    padding-bottom: 2.5rem;
`
export const IconImg = styled.img`
    width: 64px;
    height: 64px;
`
export const ExpType = styled.h3`
    font-size: 64px;
    font-style: normal;
    font-weight: 900;
`
export const ExpTitle = styled.h4`
    color: #8A939E;
    font-size: 32px;
    font-style: normal;
    font-weight: 900;
`
export const ExpDescTitle = styled.h5`
    font-size: 16px;
    font-weight: 200;
    margin-top: 1rem;
    margin-bottom: 1rem;
`
export const ExpDescP = styled.p`
    margin-bottom: 0.2rem;
`
export const ExpOutline = styled.div`
    width: 40%;
`
export const ExpDesc = styled.div`
    flex: 1;
    margin-left: 10px;
`
export default Career;