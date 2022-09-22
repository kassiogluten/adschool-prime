import axios from "axios";

export const api = axios.create({
  baseURL: "https://ads.school/wp-json/wp/v2/curso",
});
export const botconversaApi = axios.create({
  baseURL: "https://backend.botconversa.com.br/api/v1/webhook",
  headers: {
    "API-KEY": "bc828b43-f323-48af-8c24-4ac6cb460b34",
  },
});
