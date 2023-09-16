import axios from "axios";

const configAxios = {
  baseURL: "https://api.quotable.io/",
  headers: {
    "Content-Type": "application/json",
  },
};

const axiosClient = axios.create(configAxios);

axiosClient.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export { axiosClient };
