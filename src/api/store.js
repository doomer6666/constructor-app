import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './authApi';
import authReducer from "../slices/AuthSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware)
});