import api from "./api";

export const getPets = async () => {
    const response = await api.get("/pets")
    return response.data.pets
};

export const getPet = async (petSlug) => {
    const response = await api.get(`/pets/${petSlug}`)
    return response.data.pet
};

export const searchPets = async (searchTerm) => {
    console.log(searchTerm)
    const response = await api.get("/pets/search", { params: { term: searchTerm } })
    return response.data.pets
};