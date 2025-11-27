import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://christianlifeparanaque.onrender.com/api',
  withCredentials: true,
});