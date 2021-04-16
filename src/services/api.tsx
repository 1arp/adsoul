import axios from "axios";

export const api = axios.create({
  baseURL:"https://api.npoint.io/"
})

export default api