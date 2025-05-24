import axios from "axios";
import { BASE_URL } from './authApi.js'
import autoRefresh from "./responseUtils.js";

const api = axios.create({
    baseURL: BASE_URL,
});

autoRefresh(api);

export const getPages = async () => {
    try {
        const response = await api.get(`${BASE_URL}/api/sample/list`)
        return response.data;
    } catch (err) {
        console.error('Ошибка получения страниц:', err);
        throw err;
    }
}

