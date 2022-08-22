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
import { FaCheckCircle } from "react-icons/fa";

export function VoceVaiAprender({ data }) {
  const lista = data.streaming.map((item) => item.titulo);

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
        <Flex
          pt={4}
          as={List}
          maxW={800}
          w="full"
          flexWrap="wrap"
          flexDir="column"
          h={{ base: "fit-content", md: 250 }}
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
