import * as yup from "yup";

const schema = yup.object({
    firstname: yup.string().min(2).max(30).required("Restaurant Name is required!!").matches("^[a-zA-Z ]*$", "Only alphabets are allowed for this field"),
    lastname: yup.string().min(2).max(30).required("Restaurant Name is required!!").matches("^[a-zA-Z ]*$", "Only alphabets are allowed for this field"),
    email: yup.string().email().matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Invalid email address"),
    phone: yup.string().phone().required(),
    password: yup.string().min(9).max(100).required("Password is required"),
    confirmpassword: 
    
})


export default schema;