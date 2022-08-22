import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  HStack,
  Wrap,
} from "@chakra-ui/react";
import {
  FaAddressCard,
  FaDesktop,
  FaMoneyBill,
  FaRegHandshake,
  FaUserTie,
} from "react-icons/fa";

export function Vagas({ data }) {
  const lista = data.listarVagas;

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
        <Heading
          pt={8}
          maxW={500}
          color="azul"
          fontSize="32px"
          fontFamily="OrkneyMedium"
          textAlign="start"
        >
          {data.titulo}
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
            {data.subtitulo}
          </Text>
        </Stack>
        {/* <Text textAlign="start" pt={6} fontSize="14px" color="cinza">
          A Adschool não é um produto digital. Nós somos uma escola preocupada
          com a sua aprendizagem. E pensando nisso, nós temos o compromisso de
          encaminhar TODOS os nossos alunos certificados para o mercado, através
          do programa AdHiring, onde conectamos você à uma vaga dentro de uma
          grande empresa ou startup.
        </Text> */}
      </Flex>
      <Wrap justify="center" maxW={1000} spacing={12}>
        {lista.map((item) => (
          <Flex
            flexDir="column"
            key={item.titulo}
            boxShadow="85px -13px 200px 11px rgb(11 175 233 / 24%) inset"
            maxW={300}
            p="32px"
            borderRadius="16px"
            lineHeight={1}
            align="start"
            justify="space-between"
            spacing={4}
          >
            <HStack spacing={0} h={12}>
              <FaRegHandshake size={80} color="#12DDFF" />
              <Text
                dangerouslySetInnerHTML={{ __html: item.nome }}
                fontSize="20px"
                fontFamily="OrkneyMedium"
                fontWeight={600}
                pl={4}
              />
            </HStack>
            <Flex flexWrap="wrap" w="full" mt={8} flexDirection="column" h={12}>
              <HStack pb={4} w="45%">
                <FaUserTie color="#F7B500" />
                <Text>{item.nivel}</Text>
              </HStack>
              <HStack w="45%">
                <FaMoneyBill color="#F7B500" />
                <Text>{item.salario}</Text>
              </HStack>
              <HStack pb={4} w="45%">
                <FaAddressCard color="#F7B500" />
                <Text>{item.regime}</Text>
              </HStack>
              <HStack w="45%">
                <FaDesktop color="#F7B500" />
                <Text>{item.local}</Text>
              </HStack>
            </Flex>
          </Flex>
        ))}
      </Wrap>
    </Flex>
  );
}
