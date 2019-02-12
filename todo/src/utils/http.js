import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const http = {
  get: (path, options) => {
    return axios.get(API_URL + path, options);
  },
  put: (path, options) => {
    return axios.put(API_URL + path, options);
  },
  post: (path, options) => {
    return axios.post(API_URL + path, options);
  },
  delete: (path, options) => {
    return axios.delete(API_URL + path, options);
  }
};

export default http;
