import Axios from "axios";
const mode = "devlopment";
// const mode = "production";
let baseUR = "";
if (mode === "devlopment") {
  baseUR = "http://localhost:3001/";
}

if (mode === "production") {
  baseUR = "https://faqnadishserver.herokuapp.com/";
}

export const axios = Axios.create({
  baseURL: baseUR,
  headers: { auth: "Faq Auth" },
  timeout: 0,
  params: { limit: 5 },
});
// baseURL: "http://localhost:3001",
