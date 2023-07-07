import React from 'react';
import { styled } from 'styled-components';
function Projects(props) {
    return (
        <ProjectsWrap>
            <ProjectsTitle>PROJECTS</ProjectsTitle>
            <ProjectsSubTitle>프로젝트</ProjectsSubTitle>
        </ProjectsWrap>
    );
}

export const ProjectsWrap = styled.div`
    display: flex;
    flex-direction: column;
    height: calc(100vh - 54px);
    background-color: var(--bg-00);
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
export default Projects;