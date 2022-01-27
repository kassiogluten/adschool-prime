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

export const Formulario = ({ notificacao }) => {
  const { isModalOpen, setIsModalOpen } = useMyContext();
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
          console.log(data);
        });
    } catch (err) {
      alert(err.erro || "Erro, não foi possível fazer sua inscrição");
    }
    setLoading(false);
  }

  return (
    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
      <ModalOverlay />
      <ModalContent p={6} bgImage="/texture.jpg" bg="gray.800">
        <ModalCloseButton />
        <ModalBody align="start" flexDir="column">
          <Heading pb={4} fontSize={28} align="center" color="azul">
            Inscrição Adschool Prime
          </Heading>
          <Text mb={4} align="center" color="white">
            Uma única assinatura: Todos os treinamentos. Certificado Físico.
            Conexão com vagas de emprego. Gestor de contas. Suporte por chat… e
            muito mais. Preencha os dados para continuar:
          </Text>
          <Text pt={2} mb={0}>
            Primeiro nome
          </Text>
          <Input
            bg="white"
            color="black"
            _placeholder={{ color: "gray.300" }}
            mb={2}
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Digite seu nome"
          />
          <Text pt={2} mb={0}>
            Email principal
          </Text>
          <Input
            bg="white"
            color="black"
            _placeholder={{ color: "gray.300" }}
            mb={2}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu email principal"
          />
          <Text pt={2} mb={0}>
            Whatsapp
          </Text>
          <Input
            bg="white"
            color="black"
            _placeholder={{ color: "gray.300" }}
            mb={2}
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            placeholder="Digite seu Whatsapp"
          />
          <Button
            disabled={invalido}
            _hover={{ color: "white" }}
            mt={4}
            w="full"
            bg="azul"
            color="black"
            onClick={handleForm}
            isLoading={loading}
            rightIcon={<FaLongArrowAltRight />}
          >
            {invalido ? "Preencha os 3 campos" : "CONTINUAR"}
          </Button>
          {message && (
            <Alert mt={4} status="success">
              <AlertIcon />
              <Box flex="1">
                <AlertTitle>Inscrição realizada!</AlertTitle>
                <AlertDescription display="block">
                  Redirecionando...
                </AlertDescription>
                <Progress size="xs" isIndeterminate />
              </Box>
              <CloseButton />
            </Alert>
          )}

          {/* <div className="onesignal-customlink-container"></div> */}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
