import axios from "axios";

const baseUrl = "http://localhost:3030";

const api = axios.create({
  baseURL: baseUrl,
  responseType: "json",
});

export default api;
