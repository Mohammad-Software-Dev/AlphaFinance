import axios from "axios";

export const api = axios.create({
  baseURL: "/api",
  timeout: 10000,
});

api.interceptors.response.use(
  (r) => r,
  (e) =>
    Promise.reject(
      new Error(e?.response?.data?.message ?? e.message ?? "Network error")
    )
);
