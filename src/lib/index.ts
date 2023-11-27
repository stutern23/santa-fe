import axios from "axios";
import { BACKEND_URL } from "../utils/constants";

export const axiosInstance = axios.create({
  baseURL: BACKEND_URL,
});
