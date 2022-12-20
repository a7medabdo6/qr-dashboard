import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import MomentUtils from '@date-io/moment';
import { ThemeProvider } from '@material-ui/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { renderRoutes } from 'react-router-config';
import Protected from './protected';
import theme from './theme';
import { Authroutes } from './routes';
import { useTranslation } from 'react-i18next';
import { QueryClient, QueryClientProvider } from 'react-query';
import Toast from 'components/SnackBar/Success';

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
import './assets/scss/rtl.scss';

const history = createBrowserHistory();

const App = () => {
  const { t, i18n } = useTranslation();
  console.log('test8');
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <ThemeProvider theme={theme}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          {/* <h1>{t('Welcome')}</h1> */}
          <Router history={history}>
            <ScrollReset />
            <GoogleAnalytics />
            <CookiesNotification />
            {renderRoutes(Authroutes)}
            <Protected userType="super" />
          </Router>
          <Toast />
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
