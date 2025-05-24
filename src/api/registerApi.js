import axios from "axios";
import { BASE_URL } from './authApi.js'

export const logup = async (credentials) => {
    try {
        const response = axios.post(`${BASE_URL}/api/register`, credentials)
        return (await response).data;
    } catch (err) {
        console.error('Ошибка регистрации:', err);
        throw err;
    }
}