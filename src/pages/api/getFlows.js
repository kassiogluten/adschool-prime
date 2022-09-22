// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";
import { botconversaApi } from "../../utils/api";

export default async function handler(req, res) {
  try {
    const response = await botconversaApi.get("/flows");
    res.status(200).json(response.data);
  } catch (err) {
    cadastraNoBotConversa();
    res.status(400).send(err);
  }
}
