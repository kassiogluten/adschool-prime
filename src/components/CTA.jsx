import React, { useEffect, useState } from "react";
import {
  Flex,
  Text,
  Button,
  ModalOverlay,
  Modal,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Center,
  Input,
  Heading,
} from "@chakra-ui/react";
import { FaArrowCircleRight, FaLongArrowAltRight } from "react-icons/fa";
import { useMyContext } from "../contexts/Context";

export function CTA() {
  function notificacao() {
    console.log("render form");
    window.OneSignal = window.OneSignal || [];
    OneSignal.push(function () {
      OneSignal.init({
        appId: "cddc769c-4db1-4950-acba-ce6833641a55",
        safari_web_id: "",
        autoRegister: true,
        autoResubscribe: true,
        // promptOptions: {
        //   customlink: {
        //     enabled: true /* Required to use the Custom Link */,
        //     style: "button" /* Has value of 'button' or 'link' */,
        //     size: "medium" /* One of 'small', 'medium', or 'large' */,
        //     color: {
        //       button:
        //         "#E12D30" /* Color of the button background if style = "button" */,
        //       text: "#FFFFFF" /* Color of the prompt's text */,
        //     },
        //     text: {
        //       subscribe:
        //         "Receber notificações" /* Prompt's text when not subscribed */,
        //       unsubscribe:
        //         "Unsubscribe from push notifications" /* Prompt's text when subscribed */,
        //     },
        //     unsubscribeEnabled: false /* Controls whether the prompt is visible after subscription */,
        //   },
        // },

        allowLocalhostAsSecureOrigin: true,
      });
    });
    setIsModalOpen(true);
  }
  const { isModalOpen, setIsModalOpen } = useMyContext();
  return (
    <Flex
      flexDir="column"
      as="section"
      justify="center"
      align="center"
      w="100%"
      overflow="hidden"
      py="4rem"
    >
      <Button
        onClick={notificacao}
        variant="outline"
        _hover={{ borderColor: "amarelo" }}
        color="amarelo"
        borderColor="azul"
        border="2px"
        w={225}
        rightIcon={<FaLongArrowAltRight />}
      >
        <Text pr={2} pt={1}>
          ME INSCREVER
        </Text>
      </Button>
      <Formulario notificacao={notificacao} />
    </Flex>
  );
}

const Formulario = ({ notificacao }) => {
  const { isModalOpen, setIsModalOpen } = useMyContext();
  /* 
  useEffect(() => {

  }, []); */

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const invalido = !nome || !email || !telefone;
  return (
    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
      <ModalOverlay />
      <ModalContent py={4} bg="gray.800">
        <ModalCloseButton />
        <ModalBody as={Center} flexDir="column">
          <Heading align="center" color="azul">
            Inscrição Adschool Prime
          </Heading>
          <Text mb={4} align="center" color="white">
            Uma única assinatura: Todos os treinamentos. Certificado Físico.
            Conexão com vagas de emprego. Gestor de contas. Suporte por chat… e
            muito mais. Preencha os dados para continuar:
          </Text>
          <Input
            my={2}
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Digite seu nome"
          />
          <Input
            my={2}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu email principal"
          />
          <Input
            my={2}
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
            onClick={notificacao}
          >
            {invalido ? "Preencha os 3 campos" : "CONTINUAR"}
          </Button>

          {/* <div className="onesignal-customlink-container"></div> */}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
