import axios from "axios";

const http = axios.create({
  baseURL: `https://fakestoreapi.com`,
  timeout: 30000,
  headers: {},
});
// Change request data/error here
http.interceptors.request.use(
  (config: any) => {
    config.headers = {
      ...config.headers,
    };

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default http;
