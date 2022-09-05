import axios from 'axios';
const token = localStorage.getItem('token');
const user = JSON.parse(localStorage.getItem('user'));
export const api = axios.create({
  baseURL: 'https://onpixie.net/',
  headers: {
    Authorization: `Bearer ${JSON.parse(token)}`
    // BusisnessName: user ? user.tenant.busisness_name : null
  }
  // .. other options
});
