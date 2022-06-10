import React, { useEffect, useState } from "react";
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
  Image,
  ListItem,
  ListIcon,
  List,
  CloseButton,
} from "@chakra-ui/react";

import * as Icon from "react-icons/fa";
import * as FontAwesome from "react-icons/fa";

import { CTA } from "./CTA";

import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
// import { cursos } from "../components/cursos";

export function Cursos({ cursos }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedCurso, setSelectedCurso] = useState(cursos[0]);
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
        align="start"
        maxW={1200}
        w="full"
        justify="space-between"
        flexDir="column"
      >
        <Heading
          maxW={650}
          color="azul"
          fontSize="32px"
          fontFamily="OrkneyRegular"
          fontWeight={400}
          textAlign="start"
        >
          Aprenda as ferramentas que te farão criar estratégias e Funis de alta
          Conversão
        </Heading>

        <Stack
          align="center"
          direction="row"
          py={8}
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
            UMA ÚNICA ASSINATURA, 6 FORMAÇÕES E TODOS OS TREINAMENTOS
          </Text>
        </Stack>
      </Flex>
      <Wrap justify="center" maxW={1200} spacing={12}>
        {cursos &&
          cursos.map((curso) => {
            return (
              <VStack
                boxShadow="85px -13px 200px 11px rgb(11 175 233 / 24%) inset"
                maxW={350}
                p="32px"
                borderRadius="16px"
                lineHeight={1}
                align="start"
                spacing={4}
                key={curso.cursoYId}
              >
                <HStack align="flex-start">
                  <Icone
                    iconName={curso.curso.icone}
                    size={50}
                    color="#12DDFF"
                  />

                  <Box
                    dangerouslySetInnerHTML={{
                      __html: curso.title.replace("\n", "</br>"),
                    }}
                    fontSize="13px"
                    letterSpacing="2px"
                    fontFamily="OrkneyRegular"
                    pl={4}
                  />
                </HStack>
                <Text>{curso.curso.descricaoBreve}</Text>
                <HStack>
                  <Icon.FaHourglassHalf color="#F7B500" />
                  <Text>{curso.curso.horas} horas</Text>
                </HStack>
                <HStack pb={4}>
                  <Icon.FaListUl color="#F7B500" />
                  <Text>{curso.curso.aulas} aulas</Text>
                </HStack>
                <Button
                  aria-label="Abrir detalhes do curso"
                  onClick={() => {
                    onOpen();
                    setSelectedCurso(curso);
                  }}
                  variant="solid"
                  _hover={{ color: "white", bg: "transparent", border: "none" }}
                  bg="transparent"
                  color="azul"
                  borderColor="transparent"
                  border="0px"
                  w={225}
                  rightIcon={<Icon.FaArrowCircleRight />}
                >
                  <Text pr={2} pt={1}>
                    SAIBA MAIS
                  </Text>
                </Button>
              </VStack>
            );
          })}
      </Wrap>
      <SideBar
        isOpen={isOpen}
        onClose={onClose}
        selectedCurso={selectedCurso}
      />
    </Flex>
  );
}

const SideBar = ({ isOpen, onClose, selectedCurso }) => (
  <Drawer
    autoFocus={false}
    returnFocusOnClose={false}
    isOpen={isOpen}
    placement="left"
    onClose={onClose}
    size="md"
  >
    <DrawerOverlay backdropFilter="blur(3px)" />
    <DrawerContent bgImage="/bg-pattern.jpg">
      <DrawerCloseButton m={3} />

      <DrawerBody pt={8}>
        <VStack align="start">
          <Text
            w="full"
            textAlign="center"
            fontSize={28}
            color="azul"
            dangerouslySetInnerHTML={{ __html: selectedCurso.title }}
          />
          {selectedCurso.curso?.descricaoCompleta && (
            <Box
              dangerouslySetInnerHTML={{
                __html: selectedCurso.curso.descricaoCompleta,
              }}
            />
          )}
          {/* <Box dangerouslySetInnerHTML={{ __html: selectedCurso.nome }} /> */}
          {/* <Text dangerouslySetInnerHTML={{ __html: selectedCurso.descricaoCompleta.html}} /> */}

          {/* <Text> {selectedCurso.descricaoCompleta.text || selectedCurso.descricaoCompleta.markdown} </Text> */}

          {selectedCurso.curso?.video && (
            <Box maxW={500} w="full">
              <LiteYouTubeEmbed id={selectedCurso.curso.video} />
            </Box>
          )}

          <HStack>
            <Icon.FaHourglassHalf color="#F7B500" />
            <Text>{selectedCurso.curso?.horas} horas</Text>
          </HStack>
          <HStack pb={4}>
            <Icon.FaListUl color="#F7B500" />
            <Text>{selectedCurso.curso?.aulas} aulas</Text>
          </HStack>
          {selectedCurso.curso.ementa?.length > 0 && (
            <>
              <Text w="full" textAlign="center" fontSize={28} color="azul">
                Ementa do curso
              </Text>
              <Flex as={List} w="full" flexWrap="wrap" flexDir="column">
                {selectedCurso.curso.ementa.map((item) => {
                  return (
                    <ListItem key={item.nome}>
                      <ListIcon color="azul" as={Icon.FaCheckCircle} />
                      {item.nome}
                    </ListItem>
                  );
                })}
              </Flex>
            </>
          )}
          <CTA />
          <CloseButton alignSelf="center" onClick={onClose} />
        </VStack>
      </DrawerBody>
    </DrawerContent>
  </Drawer>
);

const Icone = (props) => {
  const { iconName, size, color } = props;
  const icon = React.createElement(FontAwesome[iconName]);
  return <div style={{ fontSize: size, color: color }}>{icon}</div>;
};
