import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  HStack,
  VStack,
  ListItem,
  ListIcon,
  List,
  Divider,
  Button,
  Center,
  Spacer,
} from "@chakra-ui/react";
import { FaRegCheckCircle } from "react-icons/fa";

import { useMyContext } from "../contexts/Context";

export function Preco({ data }) {
  console.log({data})
  const listPlanItems = [
    "Acesso à todas as Formações e Treinamentos",
    "Apostilas Digitais por Formação",
    "Acesso às Mentorias Semanais",
    "Provas para Certificação",
    "Suporte via Comunidade de Alunos",
    "Conexão com Vagas de Emprego",
    "Até 3 usuários logados ao mesmo tempo",
  ];
  const { setIsModalOpen, setIsModalMensalOpen } = useMyContext();
  return (
    <Flex
      flexDir="column"
      as="section"
      justify="center"
      align="center"
      w="100%"
      overflow="hidden"
      id="planos"
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
          maxW={600}
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

        <Flex
          w="full"
          justify="center"
          gap={6}
          flexDirection={{ base: "column", lg: "row" }}
        >
          {data.planos.map((plano) => (
            <VStack
              key={plano.titulo}
              p={8}
              w="full"
              maxW={550}
              bg="white"
              borderTopRadius={48}
              textAlign="center"
              position="relative"
              overflow="hidden"
              color="#666"
            >
              <Center p={6} mt={-8} flexDir="column" bg="azul">
                <Heading fontFamily="OrkneyMedium" fontSize={24} maxW={250}>
                  {plano.titulo}
                </Heading>
                <Text fontWeight={600} color="black">
                  {plano.subtitulo}
                </Text>
              </Center>

              <HStack align="flex-start">
                <Text fontFamily="OrkneyMedium" pt={4} fontSize="16px">
                  R$
                </Text>
                <Text fontFamily="OrkneyBold" fontSize="56px">
                  {plano.valor}
                </Text>
                <Text fontFamily="OrkneyBold" pt={4} fontSize="16px">
                  {plano.periodo}
                </Text>
              </HStack>
              <Text lineHeight={0}>{plano.legenda}</Text>
              <List h="full" py={6} spacing={4} textAlign="center">
                {plano.conteudo.map((item) => (
                  <ListItem key={item}>
                    <Divider bg="#555" my={2} w="full" />
                    <ListIcon as={FaRegCheckCircle} />
                    {item.titulo}
                  </ListItem>
                ))}
              </List>
              <Button
                onClick={() => setIsModalMensalOpen(true)}
                my={8}
                p={10}
                colorScheme="none"
                color="white"
                bgGradient="linear(to-b,  #F79102 0%, #B3450F 100%)"
                marginTop="auto"
              >
                ME INSCREVER
              </Button>
            </VStack>
          ))}
          {/* <VStack
            p={8}
            w="full"
            maxW={550}
            bg="white"
            borderTopRadius={48}
            textAlign="start"
            position="relative"
            overflow="hidden"
            color="#666"
          >
            <Center p={6} mt={-8} flexDir="column" bg="amarelo">
              <Heading fontFamily="OrkneyMedium" fontSize={24} maxW={250}>
                Plano Anual
              </Heading>
              
            </Center>
            <Text
              transform="rotate(45deg)"
              position="absolute"
              top={6}
              right={-14}
              pt={1}
              w={200}
              fontFamily="OrkneyBold"
              fontSize={14}
              color="white"
              bg="#F79102"
            >
             + POPULAR
            </Text>
            <HStack align="flex-start">
              <Text fontFamily="OrkneyMedium" pt={4} fontSize="16px">
                R$
              </Text>
              <Text fontFamily="OrkneyBold" fontSize="56px">
                89
              </Text>
              <Text fontFamily="OrkneyBold" pt={4} fontSize="16px">
                12x
              </Text>
            </HStack>
            <Text lineHeight={0}>ou R$899 à vista</Text>
            <List py={6} spacing={4} textAlign="center">
              {listPlanItems.map((item) => (
                <ListItem key={item}>
                  <Divider bg="#555" my={2} w="full" />
                  <ListIcon as={FaRegCheckCircle} />
                  {item}
                </ListItem>
              ))}
            </List>
            <Button
              onClick={() => setIsModalOpen(true)}
              my={8}
              p={10}
              colorScheme="none"
              color="white"
              bgGradient="linear(to-b,  #F79102 0%, #B3450F 100%)"
            >
              ME INSCREVER
            </Button>
          </VStack> */}
        </Flex>
      </Flex>
    </Flex>
  );
}
