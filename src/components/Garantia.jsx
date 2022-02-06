import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";

export function Garantia() {
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
        p="2rem 1rem"
        maxW={1000}
        w="full"
        flexDir={{ base: "column", md: "row" }}
      >
        <VStack
          pb={{ base: 16, md: 0 }}
          pr={{ base: 0, md: 16 }}
          align="start"
          w="full"
          maxW={650}
        >
          <Heading
            pt={8}
            maxW={600}
            color="azul"
            fontSize="36px"
            fontFamily="OrkneyMedium"
          >
            Garantia Incondicional de 14 dias
          </Heading>
          <Stack
            align="center"
            direction="row"
            py={12}
            spacing={2}
            justify="flex-start"
            w="full"
          >
            <Box minW={4} h={4} borderRadius="50%" bg="amarelo" />
            <Text
              fontFamily="OrkneyRegular"
              letterSpacing="3px"
              fontSize="13px"
              lineHeight={1}
            >
              MAIS SEGURANÇA E TRANSPARÊNCIA
            </Text>
          </Stack>
          <Text>
            Teste a qualidade da Adschool Prime à vontade, nós acreditamos muito
            no nosso propósito de te ensinar e te conectar com as melhores
            vagas, para mudar a sua vida.
          </Text>
          <Text>
            Mas se contudo, você achar que a Adschool não atendeu às suas
            expectativas, ou que não é pra você, basta solicitar reembolso na
            plataforma Green Club, que reembolsaremos todo o seu investimento
            sem enrolação.
          </Text>
        </VStack>
        <Image
          objectFit="contain"
          src="/garantia.png"
          width={400}
          height={400}
          alt="Garantia de 14 dias"
        />
      </Flex>
    </Flex>
  );
}
