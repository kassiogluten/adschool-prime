import axios from "axios";

export const api = axios.create({
  // baseURL: "https://backcalculocerto-production-fdaf.up.railway.app/v1",
  // baseURL: "https://api.calculocerto.app/v1", //aws hostgator
  baseURL: "https://ads.school/wp-json/wp/v2/curso", //aws cloudflare
  // baseURL: "http://18.231.175.70:3000/v1", //aws ip
  // baseURL: "https://calculo.kanel.com.br/v1", //digitalocean cloudflare
  // baseURL: "http://164.92.123.177:888/v1", //digitalocean ip
  // baseURL: "http://170.244.12.128:888/v1", //local ip
  // baseURL: "http://kanel.ddns.net:888/v1", //local dns
});
