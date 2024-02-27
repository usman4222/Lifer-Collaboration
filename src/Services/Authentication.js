import axios from "axios"

const signup = async ({ name, email, phone, password, confirmPassword, role_id }) => {
    try {
        if (name === "" || email === "" || password === "" || confirmPassword === "" || phone === "" || userrole === "") {
            throw new Error("Please enter all fields");
        }

        if (password !== confirmPassword) {
            throw new Error("Passwords do not match");
        }

        const response = await axios.post("httpzs://reqres.in/api/register", {
            name,
            email,
            phone,
            password
        });

        if (response.status === 201) {
            console.log("Signup successful:", response.data);
            return response.data;
        } else {
            throw new Error("Signup failed");
        }
    } catch (error) {
        throw error;
    }
}



export default signup;