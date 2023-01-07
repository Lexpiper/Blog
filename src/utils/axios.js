import axios from "axios";
import { getToken } from "./token";

const instance = axios.create({
  baseURL: "http://108.174.203.155:5000",
});

instance.interceptors.request.use(async (config) => {
  try {
    let token = await getToken("auth_token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  } catch (err) {
    console.log(err.message);
  }
});

export default instance;
