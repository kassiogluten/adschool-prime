import React from "react";
import { Box, Flex, Heading, Text, Stack, Wrap } from "@chakra-ui/react";
import Image from "next/image";

export function Equipe({ data }) {
  const lista = data.equipe.map((item) => {
    return {
      nome: item.nome,
      cargo: item.cargo,
      foto: item.foto.mediaItemUrl,
    };
  });

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
          maxW={400}
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
      </Flex>
      <Wrap justify="center" maxW={1000} spacing={8}>
        {lista.map((item) => (
          <Flex
            textAlign="center"
            align="center"
            flexDir="column"
            key={item.nome}
            maxW={220}
          >
            <Box
              height={220}
              width={220}
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
