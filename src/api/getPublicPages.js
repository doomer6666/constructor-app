import axios from "axios";
import { BASE_URL } from "./authApi";

export const getPublicPages = async () => {
    try {
        const response = axios.get(`${BASE_URL}/api/samples`)
        return (await response).data;
    } catch (err) {
        console.error('Ошибка входа:', err);
        throw err;
    }
}