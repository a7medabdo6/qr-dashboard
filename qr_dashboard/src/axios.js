import axios from 'axios';
const token = localStorage.getItem('token');

export const api = axios.create({
  baseURL: 'https://onpixie.net/',
  headers: {
    Authorization: `Bearer ${JSON.parse(token)}`
  }
  // .. other options
});
