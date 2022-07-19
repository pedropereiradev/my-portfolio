import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { createTheme, useMediaQuery } from '@mui/material';
import Context from './Context';

function Provider({ children }) {
  const [mode, setMode] = useState('light');
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  useEffect(() => {
    const userTheme = localStorage.getItem('theme');
    if (!userTheme) {
      localStorage.setItem('theme', mode);
    } else {
      setMode(userTheme);
    }

    if (prefersDarkMode) setMode('dark');
  }, []);

  useEffect(() => { localStorage.setItem('theme', mode); }, [mode]);

  const colorMode = useMemo(() => ({
    toggleColorMode: () => {
      setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    },
  }), []);

  const theme = useMemo(() => createTheme({
    palette: {
      mode,
    },
  }), [mode]);

  const contextProviderValue = useMemo(
    () => ({ colorMode, theme, mode }),
    [colorMode, theme, mode],
  );

  return <Context.Provider value={contextProviderValue}>{ children }</Context.Provider>;
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
