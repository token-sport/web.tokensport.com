import React, { Fragment } from 'react';
import { StoreContext } from 'redux-react-hook';
import { BrowserRouter } from 'react-router-dom';

// ROUTES
import Routes from 'routes';

// COMPONENTS
import Header from 'components/shared/Header';
import OffCanvasMenu from 'components/shared/OffCanvasMenu';
import Footer from 'components/shared/Footer';

// STYLES
import { ThemeProvider } from 'styled-components';
import theme from 'theme';

// REDUX STORE
import store from 'store/';

const App = () => (
  <StoreContext.Provider value={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/">
        <Fragment>
          <Header />
          <OffCanvasMenu />
          <Routes />
          <Footer />
        </Fragment>
      </BrowserRouter>
    </ThemeProvider>
  </StoreContext.Provider>
);

export default App;
