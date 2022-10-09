import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import MomentUtils from '@date-io/moment';
import { Provider as StoreProvider } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { renderRoutes } from 'react-router-config';
import { Redirect } from 'react-router-dom';

import theme from './theme';
import { Authroutes, DashboardUser, DashboardManager } from './routes';
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

const Protected = ({ isLoggedIn, userType }) => {
  const pathname = window.location.pathname.split('/')[1];
  const user = JSON.parse(localStorage.getItem('user'));

  console.log(pathname);
  const { t, i18n } = useTranslation();
  // & (userType == 'super') & (pathname == 'SuperuserLayout')

  switch (user?.role) {
    case 1:
      return <div>{renderRoutes(DashboardUser)}</div>;

    case 2:
      return <div>{renderRoutes(DashboardManager)}</div>;
    case 3:
      return <div>{renderRoutes(DashboardManager)}</div>;

    default:
      return <Redirect to="/auth/login" />;

      break;
  }
};

export default Protected;
