import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
} from "@chakra-ui/react";

export function Depoimentos() {
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
        align="center"
        maxW={1000}
        w="full"
        justify="space-between"
        flexDir="column"
      >
        <Heading
          pt={8}
          maxW={350}
          color="azul"
          fontSize="32px"
          fontFamily="OrkneyMedium"
          textAlign="center"
        >
          Depoimentos de pessoas reais
        </Heading>
        <Stack
          align="center"
          direction={{ base: "column", sm: "row" }}
          py={12}
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
            VEJA EM TEMPO REAL O QUE ESTÃO FALANDO DE NÓS
          </Text>
        </Stack>
      </Flex>
    </Flex>
  );
}