import axios from "axios";
let api = "";
console.log("VITE", import.meta.env);
console.log("Process", process.env);

if (process.env.MODE === "dev") {
  api = `${process.env.VITE_API_LOCAL}`;
} else {
  api = `${process.env.VITE_API_BACKEND}`;
}
export const req = axios.create({
  baseURL: api,
  withCredentials: true,
});

export const axiosJWT = axios.create({
  baseURL: api,
  withCredentials: true,
});
console.log("API", api);
