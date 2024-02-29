import axios from "axios"

const base_url = import.meta.env.VITE_BASE_URL;
export const signup = async (data) => {
    try {
        if (data) {
            const response = await axios.post(`${base_url}/signup`, {
                first_name: data.firstname,
                last_name: data.lastname,
                contact_no: data.phone,
                email: data.email,
                password: data.password,
                role_id: data.role_id
            });

            return response.data;
        }
    } catch (error) {
        throw error.response.data;
    }

}


export const login = async (data) => {
    try {
        if (data) {
            const response = await axios.post(`${base_url}/login`, {
                email: data.email,
                password: data.password
            })
            return response.data;
        }
    } catch (error) {
        throw error.response.data;
    }
}


export const logout = async () => {
    try {
        localStorage.removeItem('user')
        localStorage.removeItem('access_token')
    } catch (error) {
        console.log(error)
    }
}