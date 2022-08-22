import React from "react";
import { Box, Flex, Heading, Text, Stack } from "@chakra-ui/react";
import Script from "next/script";

export function Depoimentos({data}) {
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
        align="start"
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
          textAlign="start"
        >
          {data.titulo}
        </Heading>
        <Stack
          align="center"
          direction="row"
          py={12}
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
        
          <div id="fb-root"></div>
          <Script
            async
            defer
            crossOrigin="anonymous"
            src="https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v12.0"
            nonce="qEJO4DSg"
          ></Script>
          <div
            className="fb-comments"
            data-href="https://www.facebook.com/adschoolbrasil"
            data-width="100%"
            data-numposts="5"
            data-colorscheme="dark"
            colorscheme="dark"
            style={{ backgroundColor:'white'}}
          ></div>
      </Flex>
    </Flex>
  );
}
