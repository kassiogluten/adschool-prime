import React from "react";
import { Box, Flex, Heading, Text, Stack, Button } from "@chakra-ui/react";
import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";

export function Hero() {
  return (
    <Flex
      position="relative"
      as="section"
      justify="center"
      align="center"
      w="100%"
      bg="#00000077"
    >
      <Image
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
        <Image alt="Logo Adschool" src="/logo.png" width={70} height={17} />
        <Stack
          align="center"
          spacing={2}
          pt={4}
          direction={{ base: "column", sm: "row" }}
          justify="center"
        >
          <Box w={4} h={4} borderRadius="50%" bg="amarelo" />
          <Text
            fontFamily="OrkneyRegular"
            letterSpacing="3px"
            fontSize="13px"
            lineHeight={1}
          >
            A ESCOLA DO GESTOR DE TRÁFEGO
          </Text>
        </Stack>
        <Heading py={8} maxW={800} fontSize={{ base: "32px", sm: "56px" }}>
          Transformamos jovens em anunciantes profissionais e conectamos com o
          mercado​
        </Heading>
        <Text fontFamily="OrkneyRegular" maxW={800} fontSize="18px">
          Aprenda na prática tudo sobre tráfego e marketing de performance e
          seja conectado com vagas para trabalhar nas maiores empresas e
          startups do Brasil.
        </Text>

        <Button
          mt={8}
          _hover={{ color: "white", bg: "amarelo" }}
          color="black"
          bg="azul"
          w={225}
          rightIcon={<FaLongArrowAltRight />}
        >
          <Text pr={2} pt={1}>
            FAZER INSCRIÇÃO
          </Text>
        </Button>
      </Flex>
    </Flex>
  );
}
