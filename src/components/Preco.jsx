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
} from "@chakra-ui/react";
import { FaRegCheckCircle } from "react-icons/fa";

import { useMyContext } from "../contexts/Context";

export function Preco() {
  const { setIsModalOpen } = useMyContext();
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
        align="center"
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
          textAlign="center"
        >
          Adschool Prime: uma única assinatura todos os treinamentos
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
            MAIS ECONOMIA PARA VOCÊ. CANCELE QUANDO QUISER.
          </Text>
        </Stack>

        <VStack
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
          <Center py={6} mt={-8} flexDir="column" bg="azul">
            <Heading fontSize={24} maxW={250}>
              Todos os Treinamentos
            </Heading>
            <Text>Adschool Prime</Text>
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
            POPULAR
          </Text>
          <HStack align="flex-start">
            <Text fontFamily="OrkneyMedium" pt={4} fontSize="14px">
              R$
            </Text>
            <Text fontFamily="OrkneyBold" fontSize="56px">
              97
            </Text>
          </HStack>
          <Text lineHeight={1}>Mensalmente no cartão.</Text>
          <Text lineHeight={1}>Cancele quando quiser</Text>
          <List py={6} spacing={4} textAlign="center">
            <ListItem>
              <ListIcon as={FaRegCheckCircle} />
              Acesso à todos os treinamentos (+15)
            </ListItem>
            <Divider bg="#555" my={2} w="full" />
            <ListItem>
              <ListIcon as={FaRegCheckCircle} />
              Certificado Físico e Digital
            </ListItem>
            <Divider bg="#555" my={2} w="full" />
            <ListItem>
              <ListIcon as={FaRegCheckCircle} />
              Conexão com Vagas de Emprego
            </ListItem>
            <Divider bg="#555" my={2} w="full" />
            <ListItem>
              <ListIcon as={FaRegCheckCircle} />
              Acesso à comunidade e suporte
            </ListItem>

          </List>
          <Button
            onClick={() => setIsModalOpen(true)}
            my={8}
            p={6}
            colorScheme="none"
            color="white"
            bgGradient="linear(to-b,  #F79102 0%, #B3450F 100%)"
          >
            ME INSCREVER
          </Button>
          <Text pt={4} fontSize="13px">
            Últimas Vagas
          </Text>
        </VStack>
      </Flex>
    </Flex>
  );
}
