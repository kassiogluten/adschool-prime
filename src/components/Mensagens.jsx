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

export function Mensagens({data}) {
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
          {data.mensagem}
        </Heading>
        <Divider my={8} w={50} />
        <Text fontFamily="OrkneyBold" color="azul">
          Bill Gates
        </Text>
        <Text fontSize="12px" color="cinza">
          Microsoft
        </Text>
        <Text pt={6} fontSize="14px" color="cinza">
         {data.texto}
        </Text>
        {/* <Text pt={6} fontSize="14px" color="cinza">
          Dentro do Adschool Prime, nossa plataforma digital e-Learning, você
          vai aprender na prática como dominar as ferramentas tráfego, análise
          de dados e marketing de performance, elém de dominar as principais
          estratégias: lançamentos, perpétuo, e-commerce, negócios locais,
          deliverys, e qualquer funil de venda que deseje.
        </Text> */}
      </Flex>
    </Flex>
  );
}
