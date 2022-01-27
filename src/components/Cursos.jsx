import React, { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  VStack,
  HStack,
  Button,
  Wrap,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  useDisclosure,
} from "@chakra-ui/react";
import { FaArrowCircleRight, FaHourglassHalf, FaListUl } from "react-icons/fa";
import { cursos } from "../components/cursos";

export function Cursos() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedCurso, setSelectedCurso] = useState({});
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
        p="5rem 1rem"
        align="center"
        maxW={1200}
        w="full"
        justify="space-between"
        flexDir="column"
      >
        <Heading
          maxW={650}
          color="azul"
          fontSize="40px"
          fontFamily="OrkneyMedium"
          textAlign="center"
        >
          Aprenda ferramentas de tráfego e estratégias de vendas
        </Heading>
        <Stack
          align="center"
          direction={{ base: "column", sm: "row" }}
          py={8}
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
            UMA ÚNICA ASSINATURA, TODOS OS TREINAMENTOS
          </Text>
        </Stack>
      </Flex>
      <Wrap justify="center" maxW={1200} spacing={8}>
        {cursos.map((curso, i) => (
          <Curso
            key={i}
            setSelectedCurso={setSelectedCurso}
            onOpen={onOpen}
            curso={curso}
            titulo={curso.titulo}
            descricao={curso.descricao}
            tempo={curso.tempo}
            aulas={curso.aulas}
            icone={curso.icone}
          />
        ))}
      </Wrap>
      <Drawer
        autoFocus={false}
        returnFocusOnClose={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        size="sm"
      >
        <DrawerOverlay backdropFilter="blur(3px)" />
        <DrawerContent bg="gray.800">
          <DrawerCloseButton m={3} />

          <DrawerBody pt={8} onClick={onClose}>
            <VStack align="start">
              <Text
                dangerouslySetInnerHTML={{ __html: selectedCurso?.titulo }}
              />
              <Text>{selectedCurso?.descricao}</Text>
              <HStack>
                <FaHourglassHalf color="#F7B500" />
                <Text>{selectedCurso?.tempo}</Text>
              </HStack>
              <HStack pb={4}>
                <FaListUl color="#F7B500" />
                <Text>{selectedCurso?.aulas}</Text>
              </HStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}

export const Curso = (props) => {
  return (
    <VStack
      boxShadow="85px -13px 200px 11px rgb(11 175 233 / 24%) inset"
      maxW={350}
      p="32px"
      borderRadius="16px"
      lineHeight={1}
      align="start"
      spacing={4}
    >
      <HStack align="flex-start">
        {props.icone}
        <Text
          dangerouslySetInnerHTML={{ __html: props.titulo }}
          fontSize="13px"
          letterSpacing="2px"
          fontFamily="OrkneyRegular"
          pl={4}
        />
      </HStack>
      <Text py={4}>{props.descricao}</Text>
      <HStack>
        <FaHourglassHalf color="#F7B500" />
        <Text>{props.tempo}</Text>
      </HStack>
      <HStack pb={4}>
        <FaListUl color="#F7B500" />
        <Text>{props.aulas}</Text>
      </HStack>
      <Button
        aria-label="Abrir menu de navegação"
        onClick={() => {
          props.onOpen();
          props.setSelectedCurso(props.curso);
        }}
        variant="outline"
        _hover={{ color: "white", bg: "amarelo", border: "none" }}
        color="azul"
        borderColor="azul"
        border="2px"
        w={225}
        rightIcon={<FaArrowCircleRight />}
      >
        <Text pr={2} pt={1}>
          SAIBA MAIS
        </Text>
      </Button>
    </VStack>
  );
};
