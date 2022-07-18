import React, { useContext } from 'react';
import {
  CssBaseline, ThemeProvider,
} from '@mui/material';
import About from './components/About';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Context from './context/Context';

function App() {
  const { theme } = useContext(Context);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <ContactMe />
      <Footer />
    </ThemeProvider>

  );
}

export default App;
