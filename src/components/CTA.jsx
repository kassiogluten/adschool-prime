import React from "react";
import { Flex, Text, Button } from "@chakra-ui/react";
import { FaArrowCircleRight, FaLongArrowAltRight } from "react-icons/fa";

export function CTA() {
  return (
    <Flex
      flexDir="column"
      as="section"
      justify="center"
      align="center"
      w="100%"
      overflow="hidden"
      py="4rem"
    >
      <Button
        variant="outline"
        _hover={{ borderColor: "amarelo" }}
        color="amarelo"
        borderColor="azul"
        border="2px"
        w={225}
        rightIcon={<FaLongArrowAltRight />}
      >
        <Text pr={2} pt={1}>
          ME INSCREVER
        </Text>
      </Button>
    </Flex>
  );
}
