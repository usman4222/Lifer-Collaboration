import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
});

api.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem('access_token');
        const token = JSON.parse(accessToken)
        console.log(token);
        if (accessToken) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;
