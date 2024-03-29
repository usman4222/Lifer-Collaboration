import axios from 'axios'

const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
})

api.interceptors.request.use(
    (config) => {
        const user = JSON.parse(localStorage.getItem('user'))
        const token = JSON.parse(localStorage.getItem('access_token'))
        const userID = user.id
        if (token && userID) {
            config.headers.Authorization = `Bearer ${token}`
            config.headers['user_id'] = userID
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    },
)

export default api
