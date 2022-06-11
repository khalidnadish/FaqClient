import Axios from "axios";

export const axios = Axios.create({
  baseURL: "https://faqnadishserver.herokuapp.com/",
  headers: { auth: "Faq Auth" },
  // timeout: 1000 * 5,
  timeout: 0,
  params: { limit: 5 },
});
