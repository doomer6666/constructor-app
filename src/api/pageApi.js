import axios from "axios";
import { BASE_URL } from './authApi.js'
import { refreshToken } from "./refreshApi.js";

const api = axios.create({
  baseURL: BASE_URL, // Замените на ваш базовый URL
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

api.interceptors.request.use(
  (config) => {
    const access = localStorage.getItem('access');
    if (access) {
      config.headers.Authorization = `Bearer ${access}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Интерсептор для ответов
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const newaccess = await refreshToken();
        originalRequest.headers.Authorization = `Bearer ${newaccess}`;
        return api(originalRequest);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export const savePage = async (data) => {
  await api.post(`/sample`, data, {
  })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error('Ошибка:', error);
    });
}