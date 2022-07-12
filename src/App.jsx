import React from 'react';
import About from './components/About';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import Learning from './components/Learning';
import NavBar from './components/NavBar';
import Skills from './components/Skills';

function App() {
  return (
    <>
      <NavBar />
      <About />
      <Skills />
      <Learning />
      <ContactMe />
      <Footer />
    </>
  );
}

export default App;
