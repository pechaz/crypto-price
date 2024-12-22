import axios from "axios";

export const axiosApi = axios.create({
  baseURL: process.env.REACT_APP_REST_URL,
  timeout: 5000,
});

axiosApi.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers["X-CoinAPI-Key"] = process.env.REACT_APP_TOKEN;
  }
  return config;
});
