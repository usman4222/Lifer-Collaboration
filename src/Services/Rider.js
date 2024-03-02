import axios from "axios";

const base_url = import.meta.env.VITE_BASE_URL;
const token = localStorage.getItem('access_token');

export const createRestaurant = async (modifiedFormData) => {
    try {
        const res = await fetch(`${base_url}/restaurants`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(modifiedFormData),
        });

        const data = await res.json();

        if (!res.ok) {
            console.error("Error:", data.message);
            return { success: false, message: data.message };
        }

        console.log("Response:", data);
        return { success: true, message: "Restaurant created successfully", data: data.data };
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
};
