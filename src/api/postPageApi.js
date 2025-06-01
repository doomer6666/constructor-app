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

export const savePage = async (data, id = null) => {
  if (!id) {
    await api.post(`/api/sample`, data, {
    })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('Ошибка:', error);
      });
  }
  else {
    await api.patch(`/api/sample`, data, {
    })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('Ошибка:', error);
      });
  }
}