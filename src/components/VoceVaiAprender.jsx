import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import {
  FaCheckCircle,
} from "react-icons/fa";

export function VoceVaiAprender() {
  const lista = [
    "Facebook Ads e Instagram Ads",
    "Google Ads e Youtube Ads",
    "Linkedin Ads",
    "Tik Tok Ads",
    "Remarketing",
    "API de Conversão",
    "Distribuição de Conteúdo",
    "Funil de Vendas",
    "Funil de Pixel",
    "Campanhas para Lançamentos",
    "Campanhas para Perpétuo",
    "Campanhas para Delivery",
    "Campanhas para Negócios Locais",
    "Campanhas para Ecommerce",
    "Captação de Leads",
    "Tráfego Direto",
    "Escala de Campanhas",
    "Contigência de Contas",
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
          O que você vai aprender na prática
        </Heading>
        <Stack
          align="center"
          direction={{ base: "column", sm: "row" }}
          pt={8}
          pb={4}
          spacing={2}
          justify="center"
        >
          <Box w={4} h={4} borderRadius="50%" bg="amarelo" />
          <Text
            fontFamily="OrkneyRegular"
            letterSpacing="3px"
            fontSize="13px"
            lineHeight={1}
          >
            UM STREAMING DE CAMPANHAS REAIS
          </Text>
        </Stack>
        <Flex pl={16}
          as={List}
          maxW={800}
          w="full"
          flexWrap="wrap"
          flexDir="column"
          h={{base:'fit-content', md:225}}
        >
          {lista.map((item) => {
            return (
              <ListItem key={item}>
                <ListIcon color="azul" as={FaCheckCircle} />
                {item}
              </ListItem>
            );
          })}
        </Flex>
      </Flex>
    </Flex>
  );
}
