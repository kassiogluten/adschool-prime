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

// import { cursos } from "./cursos";

import { request } from "graphql-request";
// import Image from "next/image";
import { CTA } from "./CTA";

import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

export function CursosPreview() {
  const [cursos, setCursos] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedCurso, setSelectedCurso] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      const { cursos } = await request(
        "https://api-sa-east-1.graphcms.com/v2/ckyymve7a03ms01zcfbwngp0c/master",
        `
               {
                cursos {
                  id
                  horas
                  ementa
                  aulas
                  nome
                  video
                  icone
                  descricaoCompleta {
                    html
                  }
                  descricaoBreve {
                    html
                    markdown
                    text
                  }
                }
              }
      
              `
      );
      setCursos(cursos);
    };

    fetchProducts();
  }, []);

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
            UMA ÚNICA ASSINATURA, TODOS OS TREINAMENTOS
          </Text>
        </Stack>
      </Flex>
      <Wrap justify="center" maxW={1200} spacing={8}>
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
                key={curso.id}
              >
                <HStack align="flex-start">
                  <Icone iconName={curso.icone} size={50} color="#12DDFF" />

                  <Box
                    dangerouslySetInnerHTML={{
                      __html: curso.nome.replace("\n", "</br>"),
                    }}
                    fontSize="13px"
                    letterSpacing="2px"
                    fontFamily="OrkneyRegular"
                    pl={4}
                  />
                </HStack>
                <Box
                  dangerouslySetInnerHTML={{
                    __html: curso.descricaoBreve.html,
                  }}
                />
                <HStack>
                  <Icon.FaHourglassHalf color="#F7B500" />
                  <Text>{curso.horas} horas</Text>
                </HStack>
                <HStack pb={4}>
                  <Icon.FaListUl color="#F7B500" />
                  <Text>{curso.aulas} aulas</Text>
                </HStack>
                <Button
                  aria-label="Abrir detalhes do curso"
                  onClick={() => {
                    onOpen();
                    setSelectedCurso(curso);
                  }}
                  variant="outline"
                  _hover={{ color: "white", bg: "amarelo", border: "none" }}
                  color="azul"
                  borderColor="azul"
                  border="2px"
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
            dangerouslySetInnerHTML={{ __html: selectedCurso.nome }}
          />
          {selectedCurso.descricaoCompleta?.html && (
            <Box
              dangerouslySetInnerHTML={{
                __html: selectedCurso.descricaoCompleta.html,
              }}
            />
          )}
          {/* <Box dangerouslySetInnerHTML={{ __html: selectedCurso.nome }} /> */}
          {/* <Text dangerouslySetInnerHTML={{ __html: selectedCurso.descricaoCompleta.html}} /> */}

          {/* <Text> {selectedCurso.descricaoCompleta.text || selectedCurso.descricaoCompleta.markdown} </Text> */}

          {selectedCurso.video && (
            <Box maxW={500} w="full">
              <LiteYouTubeEmbed
                id={selectedCurso.video}
                title="What’s new in Material Design for the web (Chrome Dev Summit 2019)"
              />
            </Box>
          )}

          <HStack>
            <Icon.FaHourglassHalf color="#F7B500" />
            <Text>{selectedCurso.horas} horas</Text>
          </HStack>
          <HStack pb={4}>
            <Icon.FaListUl color="#F7B500" />
            <Text>{selectedCurso.aulas} aulas</Text>
          </HStack>
          {selectedCurso.ementa?.length > 0 && (
            <>
              <Text w="full" textAlign="center" fontSize={28} color="azul">
                Ementa do curso
              </Text>
              <Flex as={List} w="full" flexWrap="wrap" flexDir="column">
                {selectedCurso.ementa.map((item) => {
                  return (
                    <ListItem key={item}>
                      <ListIcon color="azul" as={Icon.FaCheckCircle} />
                      {item}
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
