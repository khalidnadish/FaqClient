import Axios from "axios";

export const axios = Axios.create({
  baseURL: "http://localhost:3001",
  headers: { auth: "Faq Auth" },
  // timeout: 1000 * 5,
  timeout: 0,
  params: { limit: 5 },
});
