import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import MomentUtils from '@date-io/moment';
import { Provider as StoreProvider } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { renderRoutes } from 'react-router-config';
import Protected from './protected';
import theme from './theme';
import { configureStore } from './store';
import { Authroutes } from './routes';
import { useTranslation } from 'react-i18next';

import {
  ScrollReset,
  GoogleAnalytics,
  CookiesNotification
} from './components';
import './mixins/chartjs';
import './mixins/moment';
import './mixins/validate';
import './mixins/prismjs';
import './mock';
import 'react-perfect-scrollbar/dist/css/styles.css';
import './assets/scss/prismjs.css';

import './assets/scss/index.css';

const history = createBrowserHistory();
const store = configureStore();

const App = () => {
  const { t, i18n } = useTranslation();

  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={theme}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <h1>{t('Welcome')}</h1>
          <Router history={history}>
            <ScrollReset />
            <GoogleAnalytics />
            <CookiesNotification />
            {renderRoutes(Authroutes)}
            <Protected isLoggedIn={true} userType="super" />
          </Router>
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    </StoreProvider>
  );
};

export default App;
