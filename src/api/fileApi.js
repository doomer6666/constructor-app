import axios from "axios";
import { BASE_URL } from './authApi.js'

export const filePost = async (file) => {
    try {
        const response = axios.post(`${BASE_URL}/api/register`, file)
        return (await response).data;
    } catch (err) {
        console.error('Ошибка регистрации:', err);
        throw err;
    }
}