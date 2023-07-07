import React from 'react';
import Intro from '../components/Intro';
import About from '../components/About';
import Skill from '../components/Skill';
import Projects from '../components/Projects';

function Main() {
    return (
        <>
            <Intro/>
            <About/>
            <Skill/>
            <Projects/>
        </>
    );
}

export default Main;