import axios from "axios";
let api = "";
console.log("VITE", import.meta.env);
console.log("Process", process.env);

if (process.env.MODE === "dev") {
  api = "http://localhost:8017";
} else {
  api = "https://testda-2.onrender.com";
}
export const req = axios.create({
  baseURL: api,
  withCredentials: true,
});

export const axiosJWT = axios.create({
  baseURL: api,
  withCredentials: true,
});
