import React from "react";
import styled from 'styled-components';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import './style.css';
// import './App.css';

const AppWrapper = styled.div`
    background-color: #ffffff;
`;

function App() {
    return (
        <AppWrapper>
            <Header />
            <Home />
            <About />
            <Experience />
            <Projects />
            <Contact />
            <Footer />
        </AppWrapper>
    );
}

export default App;
