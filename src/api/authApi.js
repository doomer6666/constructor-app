import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5050" }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth",
        method: "POST",
        body: credentials,
        // mode: 'no-cors',
        responseHandler: (response) => response.text(),
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
