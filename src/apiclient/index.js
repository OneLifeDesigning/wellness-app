import axios from "axios";
const http = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:3010/",
  withCredentials: true,
});

http.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    if (error.response?.status === 401) {
      localStorage.clear();
      window.location.assign("/");
    }

    return Promise.reject(error);
  }
);

export const getAll = () => http.get("/data");
export const patch = (id, body) => http.patch(`/data/${id}`, body);
