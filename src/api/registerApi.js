import axios from "axios";
import { BASE_URL } from './authApi.js'

export const logup = async (credentials) => {
    try {
        const response = axios.post(`${BASE_URL}/register/`, credentials)
        return (await response).data;
    } catch (err) {
        console.error('Ошибка регистрации:', err);
        throw err;
    }
}

// export const regApi = createApi({
//     reducerPath: "regApi",
//     baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000" }),
//     endpoints: (builder) => ({
//         logUp: builder.mutation({
//             query: (credentials) => ({
//                 url: "/register/",
//                 method: "POST",
//                 body: credentials,
//                 // mode: 'no-cors',
//                 responseHandler: (response) => response.json(),
//             }),
//         }),
//     }),
// });

// export const { useLogUpMutation } = regApi;
