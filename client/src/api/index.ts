import axios from "axios";

const baseURL = "http://localhost:8080/api";

const API_INSTANCE = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

const getTokenFromLocalStorage = () => {
  return localStorage.getItem("token");
};

API_INSTANCE.interceptors.request.use(
  (config) => {
    const token = getTokenFromLocalStorage();
    if (token) {
      config.headers.Authorization = `${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default API_INSTANCE;
