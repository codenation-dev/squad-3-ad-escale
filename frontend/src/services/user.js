import api from "./api";

export const getUser = async () => {
    const response = await api.get("/user")
    return response.data
};

export const getPets = async () => {
    const response = await api.get("/user/pets")
    return response.data
};

export const updateUser = async (name, phoneNumber) => {
    const response = await api.put("/user", {name, phone_number: phoneNumber})
    return response.data
}