import axios from "axios"

const base_url = import.meta.env.VITE_BASE_URL
const signup = async (data) => {
    if (data) {
        const response = await axios.post(`${base_url}/signup`, {
            first_name: data.firstname,
            last_name: data.lastname,
            contact_no: data.phone,
            email: data.email,
            password: data.password,
            role_id: data.role_id
        });

        return response;
    }

}



export default signup;