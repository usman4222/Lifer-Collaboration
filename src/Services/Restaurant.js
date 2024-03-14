import api from './api'

export const getCategories = async () => {
    try {
        const response = await api.get('/categories')
        return response.data
    } catch (error) {
        throw error
    }
}

export const getVariants = async () => {
    try {
        const response = await api.get('/variants')
        return response.data
    } catch (error) {
        throw error
    }
}
