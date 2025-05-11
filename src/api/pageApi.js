import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pageApi = createApi({
  reducerPath: "pageApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5050" }), // Укажите адрес вашего сервера
  endpoints: (builder) => ({
    // Мутация для сохранения страницы
    savePage: builder.mutation({
      query: (blocks) => ({
        url: "/savePage", // URL на сервере для сохранения страницы
        method: "POST",
        body: { blocks }, // Отправляем объект с блоками в свойстве blocks
      }),
    }),
  }),
});

// Хук для использования в компонентах
export const { useSavePageMutation } = pageApi;
