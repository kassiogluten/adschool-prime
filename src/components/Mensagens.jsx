import React from "react";
import {
  Flex,
  Heading,
  Text,
  Divider,
} from "@chakra-ui/react";
import {
  FaQuoteLeft,
} from "react-icons/fa";

export function Mensagens() {
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
        align="start"
        maxW={1000}
        w="full"
        justify="space-between"
        flexDir="column"
      >
        <FaQuoteLeft size="38px" color="#F7B500" />
        <Heading
          pt={8}
          color="white"
          fontSize="32px"
          fontFamily="OrkneyMedium"
          textAlign="start"
        >
          Em alguns anos vão existir dois tipos de empresas: as que vendem pela
          internet e as que estão fora dos negócios
        </Heading>
        <Divider my={8} w={50} />
        <Text fontFamily="OrkneyBold" color="azul">
          Bill Gates
        </Text>
        <Text fontSize="12px" color="cinza">
          Microsoft
        </Text>
        <Text pt={6} fontSize="14px" color="cinza">
          Facebook, Instagram, Twitter, Linkedin, Tik Tok, Google, Youtube…
          Essas plataformas oferecem muito mais que entretenimento. Dentro delas
          estão oportunidades de negócios milionários. E existem empresas que
          pagam muito caro por profissionais que dominam essas ferramentas
          digitais.
        </Text>
        <Text pt={6} fontSize="14px" color="cinza">
          Dentro do Adschool Prime, nossa plataforma digital e-Learning, você
          vai aprender na prática como dominar as ferramentas tráfego, análise
          de dados e marketing de performance, elém de dominar as principais
          estratégias: lançamentos, perpétuo, e-commerce, negócios locais,
          deliverys, e qualquer funil de venda que deseje.
        </Text>
      </Flex>
    </Flex>
  );
}
