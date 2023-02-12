import axios from "axios";
console.log(process.env);
const API = axios.create({ baseURL: process.env.REACT_APP_API_BASE_URL });

export const logIn = (formData) => API.post("/auth/login", formData);

export const signUp = (formData) => API.post("/auth/register", formData);
