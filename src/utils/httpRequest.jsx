import axios from "axios";

export const req = axios.create({
  baseURL: `https://testda-2.onrender.com`,
  withCredentials: true,
});

export const axiosJWT = axios.create({
  baseURL: `https://testda-2.onrender.com`,
  withCredentials: true,
});
