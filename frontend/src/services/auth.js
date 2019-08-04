import api from "./api"

export const TOKEN_KEY = "@Farejando-Token"

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null

export const getToken = () => localStorage.getItem(TOKEN_KEY)

export const login = async (email, password) => {
  const response = await api.post("/auth/login", { email, password })
  const token = response.data.token
  localStorage.setItem(TOKEN_KEY, token)
  return token
}

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY)
}