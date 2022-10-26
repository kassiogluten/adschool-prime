import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Button,
  filter,
} from "@chakra-ui/react";
import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useMyContext } from "../contexts/Context";

export function Hero({ data }) {
  const { setIsModalOpen } = useMyContext();
  return (
    <Flex
      position="relative"
      as="section"
      justify="center"
      align="center"
      w="100%"
      bg="#0f00f077"
      zIndex={2}
    >
      <Box
        left={0}
        zIndex={1}
        w="full"
        h="100%"
        pos="absolute"
        bgColor="#00000077"
      />
      <Image
        zindex={1}
        objectPosition="left top"
        objectFit="cover"
        alt="AdSchool"
        src="/bg-header.jpg"
        layout="fill"
      />
      <Flex
        zIndex={2}
        p="5rem 1rem"
        align="start"
        maxW={1200}
        w="full"
        justify="space-between"
        flexDir="column"
        lineHeight={1.5}
      >
        <Image alt="Logo Adschool" src="/logo2.png" width={100} height={41} />
        <Stack
          align="center"
          spacing={2}
          pt={4}
          direction="row"
          // direction={{ base: "column", sm: "row" }}
          justify="center"
        >
          <Box w={4} h={4} borderRadius="50%" bg="amarelo" />
          <Text
            fontFamily="OrkneyRegular"
            letterSpacing="3px"
            fontSize="13px"
            lineHeight={1}
          >
            {data.slogan}
          </Text>
        </Stack>
        <Heading
          fontFamily="OrkneyMedium"
          py={8}
          maxW={800}
          fontSize={{ base: "28px", sm: "48px" }}
        >
          {data.titulo}
        </Heading>
        <Text fontFamily="OrkneyRegular" maxW={800} fontSize="16px">
          {data.subtitulo}
        </Text>
        {/*  <Text pt={4} fontFamily="OrkneyRegular" maxW={800} fontSize="14px">
          Aprenda tudo sobre Estratégia, Funis de Vendas, Tráfego, Copywriting,
          Analytics e CRM em <br /> 6 Formações e mais de 20 Treinamentos.
        </Text> */}

        <Button
          as="a"
          href="#planos"
          mt={8}
          _hover={{ color: "white", bg: "amarelo" }}
          color="black"
          bg="azul"
          w={225}
          fontWeight={400}
          fontFamily="OrkneyRegular"
          rightIcon={<FaLongArrowAltRight />}
        >
          <Text pr={2} pt={1}>
            FAZER INSCRIÇÃO
          </Text>
        </Button>
        <Button
          variant="ghost"
          as="a"
          href="https://adschool.cademi.com.br/"
          mt={2}
          _hover={{ color: "azul" }}
          color="white"
          w={225}
          fontWeight={400}
          fontFamily="OrkneyRegular"
          rightIcon={<FaLongArrowAltRight />}
        >
          <Text pr={2} pt={1}>
            Já sou aluno
          </Text>
        </Button>
      </Flex>
    </Flex>
  );
}
