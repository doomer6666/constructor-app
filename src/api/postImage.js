import axios from "axios";
import { BASE_URL } from './authApi.js'
import autoRefresh from "./responseUtils.js";

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'multipart/form-data',
    },
});

autoRefresh(api);

export const postImage = async (image) => {
    try {
        const response = await api.post(`/api/image`, image);
        console.log(response.data)
        return response.data;
    }
    catch (error) {
        console.error('Ошибка:', error);
    }
}