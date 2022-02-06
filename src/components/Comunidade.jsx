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
import {
  FaFilePdf,
  FaHandshake,
  FaHouseUser,
  FaPiggyBank,
  FaRocketchat,
  FaSitemap,
  FaTools,
  FaUserGraduate,
  FaUserTie,
} from "react-icons/fa";

export function Comunidade() {
  const lista = [
    {
      titulo: "Uma assinatura, todos os cursos",
      descricao:
        "Gere economia pagando um único valor anual para acessar todos os treinamentos. Sem pegadinha.",
      icone: FaPiggyBank,
    },

    {
      titulo: "Seja conectado à vagas",
      descricao:
        "Todos os nossos alunos certificados, sem excessão, são encaminhados para empresas e startups.",
      icone: FaHandshake,
    },

    {
      titulo: "Projeto Prático Hands'On",
      descricao:
        "Na Adschool você aprende na prática com produto real vendendo de verdade. Nada de enrolação.",
      icone: FaTools,
    },

    {
      titulo: "Gestor de Contas Individual",
      descricao:
        "Gere economia pagando um único valor anual para acessar todos os treinamentos. Sem pegadinha.",
      icone: FaUserTie,
    },

    {
      titulo: "Suporte semanal via chat",
      descricao:
        "Todos os nossos alunos certificados, sem excessão, são encaminhados para empresas e startups.",
      icone: FaRocketchat,
    },

    {
      titulo: "Certificado Físico Adschool",
      descricao:
        "Na Adschool você aprende na prática com produto real vendendo de verdade. Nada de enrolação.",
      icone: FaUserGraduate,
    },

    {
      titulo: "Ebooks e materiais de apoio",
      descricao:
        "Mais do que apenas vídeo: você recebe materiais complementares como ebooks e planilhas.",
      icone: FaFilePdf,
    },

    {
      titulo: "Comunidade de alunos",
      descricao:
        "Somos uma comunidade de jovens anunciantes que produzem networkin com grandes empresas e CEO’s.",
      icone: FaSitemap,
    },

    {
      titulo: "Imersões presenciais",
      descricao:
        "Nossos alunos têm desconto nas nossas imersões e eventos presenciais realizados em todas as capitais do Brasil.",
      icone: FaHouseUser,
    },
  ];

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
        align="center"
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
          textAlign="center"
        >
          Estude na Maior Escola de Tráfego do Brasil
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
            UMA COMUNIDADE COM INÚMERAS VANTAGENS
          </Text>
        </Stack>
      </Flex>
      <Wrap justify="center" maxW={1200} spacing={8}>
        {lista.map((item) => (
          <Flex
            flexDir="column"
            key={item.titulo}
            boxShadow="85px -13px 200px 11px rgb(11 175 233 / 24%) inset"
            maxW={350}
            p="32px"
            borderRadius="16px"
            align="start"
            justify="space-between"
            spacing={4}
          >
            <HStack spacing={0} h={12}>
              <item.icone size={60} color="#CEC5C5" />
              <Text
                dangerouslySetInnerHTML={{ __html: item.titulo }}
                fontSize="18px"
                fontFamily="OrkneyRegular"
                pl={4}
              />
            </HStack>
            <Text lineHeight={1.5} pt={6}>
              {item.descricao}
            </Text>
          </Flex>
        ))}
      </Wrap>
    </Flex>
  );
}
