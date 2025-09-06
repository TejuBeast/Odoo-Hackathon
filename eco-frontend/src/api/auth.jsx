import axios from "axios";
axios.defaults.withCredentials = true;

export const register = (email, username, password) =>
  axios.post("http://localhost:8000/auth/register", { email, username, password });

export const login = (username, password) =>
  axios.post("http://localhost:8000/auth/login", { username, password });

export const logout = () =>
  axios.post("http://localhost:8000/auth/logout");
