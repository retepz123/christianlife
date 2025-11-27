import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://christianlife.onrender.com/api',
  withCredentials: true,
});