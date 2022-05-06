import axios from "axios";

export const ResasClient = axios.create({
  baseURL: process.env.REACT_APP_RESAS_BASE_URL,
  timeout: 1000,
});
