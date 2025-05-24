import axios from "axios";
import { BASE_URL } from './authApi.js'
import autoRefresh from "./responseUtils.js";

const api = axios.create({
    baseURL: BASE_URL,
});

autoRefresh(api);

export const getOnlyPage = async (ip) => {
    try {
        const response = await api.get(`${BASE_URL}/api/sample/${ip}`)
        return response.data;
    } catch (err) {
        console.error('Ошибка получения страницы:', err);
        throw err;
    }
}

