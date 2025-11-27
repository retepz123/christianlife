import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: ['http://localhost:3000/api', 'https://christianlifeparanaque.onrender.com/api'],
  withCredentials: true,
});