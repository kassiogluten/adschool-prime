import React from "react";
import { Box, Flex, Heading, Text, Stack } from "@chakra-ui/react";
import Image from "next/image";

export function Footer() {
  return (
    <Flex
      flexDir="column"
      as="footer"
      justify="center"
      align="center"
      w="100%"
      overflow="hidden"
    >
      <Flex p="2rem 1rem" align="center" maxW={1000} w="full" flexDir="column">
        <Image alt="Pagamento" src="/pagamento.png" width={450} height={30} />
        <Text fontSize="13px" textAlign="center" pt={8} pb={2}>
          Todos os direitos reservados à Adschool Brasil LTDA, CNPJ:
          42.695.278/0001-70, situada na Avenida Olegário Maciel, 490, Centro,
          Caratinga/MG.
        </Text>
        <Image alt="Logo Adschool" src="/logo.png" width={70} height={17} />
      </Flex>
    </Flex>
  );
}
