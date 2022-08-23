import axios from "axios";

export const api = axios.create({
  baseURL: "https://ads.school/wp-json/wp/v2/curso", //aws cloudflare
});
