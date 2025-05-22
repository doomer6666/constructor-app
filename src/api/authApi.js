import axios from "axios";
export const BASE_URL = 'http://localhost:8000';

export const login = async (credentials) => {
  try {
    const response = axios.post(`${BASE_URL}/token`, credentials)
    return (await response).data;
  } catch (err) {
    console.error('Ошибка входа:', err);
    throw err;
  }
}
