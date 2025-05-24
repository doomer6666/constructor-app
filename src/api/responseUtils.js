import { refreshToken } from "./refreshApi";

export default function autoRefresh(api) {
    api.interceptors.request.use(
        (config) => {
            const access = localStorage.getItem('access');
            if (access) {
                config.headers.Authorization = `Bearer ${access}`;
            }
            return config;
        },
        (error) => Promise.reject(error)
    );

    api.interceptors.response.use(
        (response) => response,
        async (error) => {
            const originalRequest = error.config;

            if (error.response?.status === 401 && !originalRequest._retry) {
                originalRequest._retry = true;

                try {
                    const newaccess = await refreshToken();
                    originalRequest.headers.Authorization = `Bearer ${newaccess}`;
                    return api(originalRequest);
                } catch (refreshError) {
                    return Promise.reject(refreshError);
                }
            }

            return Promise.reject(error);
        }
    );
}