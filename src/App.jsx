import React from 'react';
import About from './components/About';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import Home from './components/Home';
import Learning from './components/Learning';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Learning />
      <Projects />
      <ContactMe />
      <Footer />
    </>
  );
}

export default App;
