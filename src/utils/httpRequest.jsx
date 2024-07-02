import axios from "axios";

export const req = axios.create({
  baseURL: `${process.env.REACT_API_URL_BACKEND}`,
  withCredentials: true,
});
console.log(import.meta.env);
console.log(process.env);

export const axiosJWT = axios.create({
  baseURL: `${process.env.REACT_API_URL_BACKEND}`,
  withCredentials: true,
});
