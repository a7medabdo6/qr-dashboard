import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

// const { lang } = useSelector(state => state.GlobalState);

const token = localStorage.getItem('token');
const user = JSON.parse(localStorage.getItem('user'));

const headers = {
  Authorization: `Bearer ${JSON.parse(token)}`
};
if (user && user?.tenant?.busisness_name && user?.role != 1) {
  headers.BusisnessName = user ? user.tenant.busisness_name : '';
}

export const api = axios.create({
  baseURL: 'https://onpixie.net/',
  headers: { ...headers }
  // .. other options
});
