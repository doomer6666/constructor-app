// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { logout, setCredentials } from '../slices/authSlice';

// export const refreshApi = createApi({
//     reducerPath: 'refreshApi',
//     baseQuery: fetchBaseQuery({
//         baseUrl: 'http://localhost:8000',
//         prepareHeaders: (headers, { getState }) => {
//             const token = getState().auth.token;
//             if (token) {
//                 headers.set('Authorization', `Bearer ${token}`);
//             }
//             return headers;
//         },
//     }),
//     endpoints: (builder) => ({
//         refreshToken: builder.mutation({
//             query: (refresh) => ({
//                 url: '/token/refresh/',
//                 method: 'POST',
//                 body: { refresh },
//             }),
//         }),
//     }),
// });

// // Пример middleware для обработки 401
// export const baseQueryWithRefresh = async (args, api, extraOptions) => {
//     let result = await fetchBaseQuery({ baseUrl: 'http://localhost:8000' })(args, api, extraOptions);
//     if (result.error && result.error.status === 401) {
//         const refreshToken = api.getState().auth.refresh;
//         console.log(refreshToken)
//         if (refreshToken) {
//             try {
//                 const refreshResult = await api.dispatch(
//                     refreshApi.endpoints.refreshToken.initiate({ refresh: refreshToken })
//                 ).unwrap();
//                 api.dispatch(setCredentials({
//                     token: refreshResult.access,
//                     refresh: refreshToken,
//                 }));
//                 // Повторяем исходный запрос с новым токеном
//                 result = await fetchBaseQuery({ baseUrl: 'http://localhost:8000' })(args, api, extraOptions);
//             } catch (err) {
//                 console.error('Не удалось обновить токен:', err);
//                 api.dispatch(logout());
//             }
//         }
//     }
//     return result;
// };