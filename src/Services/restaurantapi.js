import axios from 'axios'

const resturantApi = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
})

resturantApi.interceptors.request.use(
    (config) => {
        const token = JSON.parse(localStorage.getItem('access_token'))
        const resturant = JSON.parse(localStorage.getItem('restaurant'))
        const resturantID = resturant.id
        const userID = resturant.user_id
        if (token && userID && resturantID) {
            config.headers.Authorization = `Bearer ${token}`
            config.headers['user_id'] = userID
            config.headers['restaurant_id'] = resturantID
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    },
)

export default resturantApi
