import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import Routes from 'routes';

// STYLES
import { ThemeProvider } from 'styled-components';
import theme from 'theme'

const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </ThemeProvider>
)

export default App;
