
import axios from "axios";
import { BASE_URL } from './authApi.js'

const api = axios.create({
    baseURL: BASE_URL
});

export const postEmail = async (data) => {
    try {
        const response = await api.post(`/api/verify-email`, data);
        console.log(response.data)
        return response.data;
    }
    catch (error) {
        console.error('Ошибка:', error);
    }
}