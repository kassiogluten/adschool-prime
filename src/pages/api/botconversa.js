// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";
import { botconversaApi } from "../../utils/api";

export default async function handler(req, res) {
  const request = req.body;
  const queryFlow = req.query.fluxo;
  console.log({ queryFlow });
  const flows = [
    {
      id: 521295,
      name: "01",
    },
    {
      id: 521296,
      name: "02",
    },
    {
      id: 521297,
      name: "03",
    },
    {
      id: 521298,
      name: "04",
    },
    {
      id: 521299,
      name: "05",
    },
    {
      id: 521300,
      name: "06",
    },
    {
      id: 521301,
      name: "07",
    },
  ];
  // const flow = flows.find((item) => item.name === queryFlow).id;
  const flow = queryFlow;

  const phone = `+55${request["contact[phone]"]}`;
  const formatedReq = {
    phone,
    first_name: request["contact[first_name]"],
    last_name: request["contact[last_name]"],
  };

  async function enviarFluxo(id) {
    console.log("### enviarFluxo");
    if (id) {
      try {
        const response = await botconversaApi.post(
          `subscriber/${id}/send_flow/`,
          {
            flow,
          }
        );
        console.log("### RESPONSE", response?.data);
        res.status(200).json({ id });
      } catch (err) {
        console.log("### catch enviarFluxo");
        console.log({ err });
        res.status(404).send(err);
      }
    } else {
      console.log("### SEM ID");
      res.status(404).send(err);
    }
  }

  async function verificarSeExisteNoBotConversa() {
    console.log("### verificarSeExisteNoBotConversa");
    try {
      const response = await botconversaApi.get(`subscriber/${phone}`);
      console.log("RESPONSE", response?.data);
      enviarFluxo(response.data.id);
    } catch (err) {
      console.log("ERR", err);
      cadastraNoBotConversa();
    }
  }

  async function cadastraNoBotConversa() {
    console.log("### cadastraNoBotConversa");
    try {
      const response = await botconversaApi.post("subscriber/", formatedReq);
      console.log("### formatedReq", formatedReq);
      console.log("RESPONSE", response?.data);
      verificarSeExisteNoBotConversa();
    } catch (err) {
      console.log("ERR", err);
      res.status(400).send(err);
    }
  }
  if (req.method === "GET")
    return res
      .status(404)
      .send(
        "Webhook ativo e funcionando, cole o link na automação do ActiveCampain, verifique se os dados do Lead estão corretos, telefone com DDD + 9 dígitos"
      );
  await verificarSeExisteNoBotConversa();
}
