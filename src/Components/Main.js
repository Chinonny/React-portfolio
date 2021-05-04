import React from 'react';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import './Main.css';


function Main() {
    return (
        <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        </main>
    )
}

export default Main;