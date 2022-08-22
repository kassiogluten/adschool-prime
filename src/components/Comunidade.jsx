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

import * as FontAwesome from "react-icons/fa";

export function Comunidade({ data }) {
  const lista = data.vantagens;

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
            flexDir="column"
            key={item.titulo}
            boxShadow="85px -13px 200px 11px rgb(11 175 233 / 24%) inset"
            maxW={312}
            p="32px"
            borderRadius="16px"
            align="start"
            justify="space-between"
            spacing={4}
          >
            <HStack spacing={0} h={12}>
              {/* <item.icone size={60} color="#12DDFF" /> */}
              <Icone iconName={item.icone} size={40} color="#12DDFF" />
              <Text
                dangerouslySetInnerHTML={{ __html: item.titulo }}
                fontSize="20px"
                fontFamily="OrkneyRegular"
                pl={4}
              />
            </HStack>
            <Text lineHeight={1.5} pt={6}>
              {item.texto}
            </Text>
          </Flex>
        ))}
      </Wrap>
    </Flex>
  );
}

export const Icone = (props) => {
  const { iconName, size, color } = props;
  const icon = React.createElement(FontAwesome[iconName]);
  return <div style={{ fontSize: size, color: color }}>{icon}</div>;
};
