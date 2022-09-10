import axios from 'axios';
const token = localStorage.getItem('token');
const user = JSON.parse(localStorage.getItem('user'));
const headers = { Authorization: `Bearer ${JSON.parse(token)}` };
if (user && user?.tenant?.busisness_name && user?.role != 1) {
  headers.BusisnessName = user ? user.tenant.busisness_name : '';
}
export const api = axios.create({
  baseURL: 'https://onpixie.net/',
  headers
  // .. other options
});
