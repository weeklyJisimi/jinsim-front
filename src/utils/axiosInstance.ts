import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const axiosInstanceWithAuth = () => {
  const token = localStorage.getItem('token');
  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
