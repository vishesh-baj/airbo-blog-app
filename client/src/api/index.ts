// api.js
import axios from "axios";

const baseURL = "http://localhost:8080/api";

const API_INSTANCE = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default API_INSTANCE;
