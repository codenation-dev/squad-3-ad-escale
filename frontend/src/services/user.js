import api from "./api"
import { login } from "./auth"

export const getUser = async () => {
    const response = await api.get("/user")
    return response.data
};

export const getPets = async () => {
    const response = await api.get("/user/pets")
    return response.data
};

export const createUser = async (name, email, password, confirmPassword) => {
    await api.post("/user", {name, email, password, confirm_password: confirmPassword})
    await login(email, password)
    return true
}

export const updateUser = async (name, phoneNumber) => {
    const response = await api.put("/user", {name, phone_number: phoneNumber})
    return response.data
}