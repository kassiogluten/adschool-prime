import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Wrap,
} from "@chakra-ui/react";
import Image from "next/image";

export function Equipe() {
  const lista = [
    {
      nome: "Paulo Bonfá",
      cargo: "Estrategista Digital e CEO na Adschool e no Crifras Academy",
      foto: "/equipe/Paulo.jpg",
    },
    {
      nome: "Serginho Groove",
      cargo: "Copywriter e Redator no Grupo Primo Rico",
      foto: "/equipe/Serginho.jpg",
    },
    {
      nome: "Pedro Hbn",
      cargo:
        "Gestor de Tráfego para Lançamentos e Embaixador Escola Estado da Arte",
      foto: "/equipe/Pedro.jpg",
    },
    {
      nome: "Diego Karvak",
      cargo: "Gestor de Tráfego e Analista para Ecommerce",
      foto: "/equipe/Diego.jpeg",
    },
    {
      nome: "Henrique Fernandes",
      cargo: "Tráfego e Head de Growth na Leadline Brasil",
      foto: "/equipe/Henrique.png",
    },
    {
      nome: "Magno Dias",
      cargo: "Branding e Publicidade e CEO da Suricato Agência e Suri Academy",
      foto: "/equipe/Magno.jpg",
    },
    {
      nome: "Patrícia Carmo",
      cargo: "Tik Tok Ads, conteúdo e CMO da Adschool Brasil",
      foto: "/equipe/Patrícia.png",
    },
    {
      nome: "Nicolas Rodrigues",
      cargo: "Análise de Dados e CEO da Leadline Brasil",
      foto: "/equipe/Nicolas.jpg",
    },
  ];

  return (
    <Flex
      flexDir="column"
      as="section"
      justify="center"
      align="center"
      w="100%"
      overflow="hidden"
    >
      <Flex
        p="1rem 1rem"
        align="center"
        maxW={1000}
        w="full"
        justify="space-between"
        flexDir="column"
      >
        <Heading
          pt={8}
          maxW={400}
          color="azul"
          fontSize="32px"
          fontFamily="OrkneyMedium"
          textAlign="center"
        >
          Aprenda com quem está no campo de batalha
        </Heading>
        <Stack
          align="center"
          direction="row"
          pt={8}
          pb={4}
          spacing={2}
          justify="center"
        >
          <Box minW={4} h={4} borderRadius="50%" bg="amarelo" />
          <Text
            fontFamily="OrkneyRegular"
            letterSpacing="3px"
            fontSize="13px"
            lineHeight={1}
          >
            QUEM VAI TE ENSINAR
          </Text>
        </Stack>
      </Flex>
      <Wrap justify="center" maxW={1200} spacing={8}>
        {lista.map((item) => (
          <Flex
            textAlign="center"
            align="center"
            flexDir="column"
            key={item.nome}
            maxW={250}
          >
            <Box
              height={250}
              width={250}
              position="relative"
              rounded="full"
              overflow="hidden"
            >
              <Image
                quality={90}
                src={item.foto}
                alt={item.nome}
                layout="fill"
              />
            </Box>
            <Heading pt={4} fontSize="18px">
              {item.nome}
            </Heading>
            <Text maxW={200} fontSize="13px">
              {item.cargo}
            </Text>
          </Flex>
        ))}
      </Wrap>
    </Flex>
  );
}
