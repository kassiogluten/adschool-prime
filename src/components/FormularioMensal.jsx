import React, { useState } from "react";
import {
  Text,
  Button,
  ModalOverlay,
  Modal,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Input,
  Heading,
  Alert,
  AlertIcon,
  Box,
  AlertTitle,
  AlertDescription,
  CloseButton,
  Progress,
} from "@chakra-ui/react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useMyContext } from "../contexts/Context";

export const FormularioMensal = () => {
  const { isModalMensalOpen, setIsModalMensalOpen, activeCampain } = useMyContext();
  /* 
  useEffect(() => {

  }, []); */

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [message, setMessage] = useState(false);
  const [loading, setLoading] = useState(false);
  const invalido = !nome || !email || !telefone;

  async function handleForm() {
    setLoading(true);

    try {
      await fetch("https://api.gdigital.com.br/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: process.env.NEXT_PUBLIC_API_KEY,
        },
        body: JSON.stringify({
          email,
          nome,
          telefone,
          id_form: 26,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (!data.lead_novo && data.msg === "sucesso") {
            alert(data.sucesso);
          } else if (data.lead_novo) {
            setMessage(true);
            setNome("");
            setEmail("");
            setTelefone("");
            window.location.href = "https://pay.greenn.com.br/2410";
          } else {
            alert(data.erro || "Erro, não foi possível fazer sua inscrição");
          }
        });
    } catch (err) {
      alert(err.erro || "Erro, não foi possível fazer sua inscrição");
    }
    setLoading(false);
  }

  return (
    <Modal isOpen={isModalMensalOpen} onClose={() => setIsModalMensalOpen(false)}>
      <ModalOverlay />
      <ModalContent bg="white" >
        <ModalCloseButton color="black" />
        <ModalBody align="start" flexDir="column">
          <Box
            dangerouslySetInnerHTML={{
              __html: activeCampain,
            }}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
