import React, { useEffect } from "react";
import {
  Flex,
  Text,
  Button,
  ModalOverlay,
  Modal,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { FaArrowCircleRight, FaLongArrowAltRight } from "react-icons/fa";
import { useMyContext } from "../contexts/Context";

export function CTA() {
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
        onClick={() => setIsModalOpen(true)}
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
      <Formulario />
    </Flex>
  );
}

const Formulario = () => {
  const { isModalOpen, setIsModalOpen } = useMyContext();

  function notificacao() {
    console.log("render form");
    window.OneSignal = window.OneSignal || [];
    OneSignal.push(function () {
      OneSignal.init({
        appId: "de1f8fb1-9d7d-4828-bfbc-60c5dea86910",
        autoRegister: true,
        autoResubscribe: true,
        notifyButton: {
          enable: true,
          prenotify: true,
        },

        allowLocalhostAsSecureOrigin: true,
      });
    });

    return () => {
      window.OneSignal = undefined;
    };
  }

  return (
    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
      <ModalOverlay />
      <ModalContent h={300} bg="gray.800">
        <ModalCloseButton />
        <ModalBody>
          Formulário em construção <Button onClick={notificacao}>Testar</Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
