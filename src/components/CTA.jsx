import React from "react";
import { Flex, Text, Button } from "@chakra-ui/react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useMyContext } from "../contexts/Context";
import { Formulario } from "./Formulario2";
import { FormularioMensal } from "./FormularioMensal";

export function CTA({ data }) {
  console.log({ dataCTA: data });
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
        as="a"
        href={data?.url || "#planos"}
        variant="outline"
        _hover={{ borderColor: "amarelo" }}
        color="amarelo"
        borderColor="azul"
        border="2px"
        w={225}
        rightIcon={<FaLongArrowAltRight />}
      >
        <Text pr={2} pt={1}>
          {data?.nome || "ME INSCREVER"}
        </Text>
      </Button>
      <Formulario />
      <FormularioMensal />
    </Flex>
  );
}
