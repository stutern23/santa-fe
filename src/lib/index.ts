import axios from "axios";
import { BACKEND_URL, MODEL_URL } from "../utils/constants";

export const axiosInstance = axios.create({
  baseURL: BACKEND_URL,
});

export const modelInstance = axios.create({
  baseURL: MODEL_URL,
});
