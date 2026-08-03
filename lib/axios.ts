import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://fixitnow-backend-seven.vercel.app/api",
  withCredentials: true,
});