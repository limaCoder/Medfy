import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.15.92:3333',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default api;