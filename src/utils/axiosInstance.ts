import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import environment from "../constants/environment";

const API_URL = environment.API_URL;

const axiosInstance: AxiosInstance = axios.create({
  baseURL: `${API_URL}`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const UNAUTHORIZED_CODES = [401, 403];

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return Promise.resolve(response);
  },
  (errorData: AxiosError) => {
    return Promise.reject(errorData);
  }
);

export default axiosInstance;
