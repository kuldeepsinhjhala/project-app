import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.GATSBY_SERVICE_URL,
  withCredentials: true,
});

export default instance;
