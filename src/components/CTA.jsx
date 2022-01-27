import React, {  } from "react";
import {
  Flex,
  Text,
  Button,
} from "@chakra-ui/react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useMyContext } from "../contexts/Context";
import { Formulario } from "./Formulario";

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

  const { setIsModalOpen } = useMyContext();
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
