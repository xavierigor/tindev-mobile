import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.1.6:3333"
  //   baseURL: "http://127.0.0.1:3333"
  //   baseURL: "http://localhost:3333"
});

export default api;
