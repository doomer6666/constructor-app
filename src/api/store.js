import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./authApi";
import authReducer from "../slices/AuthSlice";
import { pageApi } from "./pageApi";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [pageApi.reducerPath]: pageApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, pageApi.middleware),
});
