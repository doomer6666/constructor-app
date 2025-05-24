import axios from "axios";
import { BASE_URL } from './authApi.js'

export async function refreshToken() {
    try {
        const refresh = localStorage.getItem('refresh');
        if (!refresh) {
            throw new Error('No refresh token available');
        }

        const response = await axios.post(`${BASE_URL}/api/token/refresh`, {
            refresh,
        });

        const { access, refresh: newrefresh } = response.data;
        localStorage.setItem('access', access);
        localStorage.setItem('refresh', newrefresh || refresh);
        return access;
    } catch (error) {
        console.error('Ошибка обновления токена:', error);
        localStorage.removeItem('access');
        localStorage.removeItem('refresh');
        window.location.href = '/auth';
        throw error;
    }
}