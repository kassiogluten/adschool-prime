import {
  Box,
  Flex,
  Heading,
  HStack,
  IconButton,
  Text,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  useColorMode,
  VStack,
} from "@chakra-ui/react";

import { FaMoon, FaSun, FaThList } from "react-icons/fa";
import { FiMoon, FiSun } from "react-icons/fi";
import React from "react";
import { LogoSvg } from "../icons";
import Image from "next/image";

export function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex justify="center" align="center" w="100%" bg="#00000011" as="header">
      <Flex
        p="1rem"
        w="full"
        align="center"
        maxW={1200}
        justify="space-between"
      >
        <Image alt="Logo Adschool" src="/logo.png" width={70} height={17} />
        <HStack display={{ base: "none", sm: "flex" }} spacing={10}>
          <Menu />
        </HStack>
        <IconButton
          aria-label="Abrir menu de navegação"
          onClick={onOpen}
          display={{ base: "flex", sm: "none" }}
        >
          <FaThList />
        </IconButton>
      </Flex>
      <Drawer
        autoFocus={false}
        returnFocusOnClose={false}
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton m={3} />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody onClick={onClose}>
            <VStack spacing={10}>
              <Menu />
            </VStack>
            <Button variant="outline" mr={3} onClick={onClose}>
              Botao1
            </Button>
            <Button colorScheme="blue">Botao2</Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}

function Menu() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Button variant="ghost" onClick={toggleColorMode}>
        {colorMode === "light" ? <FaMoon /> : <FaSun />}
      </Button>
      <Text as="a" href="#">
        Link1
      </Text>
      <Text as="a" href="#">
        Link2
      </Text>
      <Text as="a" href="#">
        Link3
      </Text>
    </>
  );
}
