import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { createTheme } from '@mui/material';
import Context from './Context';

function Provider({ children }) {
  const [mode, setMode] = useState('light');

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

  /* const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  console.log(prefersDarkMode); */

  return <Context.Provider value={contextProviderValue}>{ children }</Context.Provider>;
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
