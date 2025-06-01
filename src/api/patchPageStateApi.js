import axios from "axios";
import { BASE_URL } from './authApi.js'
import autoRefresh from "./responseUtils.js";

const api = axios.create({
    baseURL: BASE_URL,
});

autoRefresh(api);

export const patchPageState = async (data) => {
    try {
        const response = await api.patch(`/api/sample/state`, data);
        console.log(response.data)
        return response.data;
    }
    catch (error) {
        console.error('Ошибка:', error);
    }
}