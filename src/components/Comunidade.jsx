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
  FaRecordVinyl,
  FaUsers,
} from "react-icons/fa";

export function Comunidade() {
  const lista = [
    {
      titulo: "Uma assinatura, todos os cursos",
      descricao:
        "Gere economia pagando um único valor mensal para acessar todos os treinamentos e mentorias.",
      icone: FaPiggyBank,
    },
    {
      titulo: "Mentorias ao Vivo Semanalmente",
      descricao:
        "Dentro do próprio plano, sem pagar nada a mais por isso, sem esteira de produtos e sem guruzagem.",
      icone: FaRecordVinyl,
    },

    {
      titulo: "Seja conectado à vagas de emprego",
      descricao:
        "Todos os nossos alunos certificados, sem excessão, podem participar do programa de encaminhamento profissional.",
      icone: FaHandshake,
    },

    // {
    //   titulo: "Gestor de Contas Individual",
    //   descricao:
    //     "Gere economia pagando um único valor anual para acessar todos os treinamentos. Sem pegadinha.",
    //   icone: FaUserTie,
    // },

    // {
    //   titulo: "Suporte semanal via chat",
    //   descricao:
    //     "Todos os nossos alunos certificados, sem excessão, são encaminhados para empresas e startups.",
    //   icone: FaRocketchat,
    // },

    {
      titulo: "Suporte via Comunidade",
      descricao:
        "Receba suporte online via whatsapp oficial, além do suporte dos próprios membros da Adschool.",
      icone: FaRocketchat,
    },

    {
      titulo: "Apostilas e Certificações",
      descricao:
        "Nós fornecemos apostilas e certificados para a conclusão de todos as formações com mais de 70% de aproveitamento.",
      icone: FaUserGraduate,
    },
    {
      titulo: "Até 3 usuários ao mesmo tempo",
      descricao:
        "Não tá fácil pra ninguém, por isso liberamos até 3 usuários logados ao mesmo tempo por assinatura. Divida com os amigos.",
      icone: FaUsers,
    },

    // {
    //   titulo: "Imersões presenciais",
    //   descricao:
    //     "Nossos alunos têm desconto nas nossas imersões e eventos presenciais realizados em todas as capitais do Brasil.",
    //   icone: FaHouseUser,
    // },
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
        align="start"
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
          textAlign="start"
        >
          Não somos a maior escola de marketing digital do Brasil... e nem
          queremos
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
            NOS PREOCUPAMOS APENAS EM ENTREGAR QUALIDADE
          </Text>
        </Stack>
      </Flex>
      <Wrap justify="center" maxW={1000} spacing={8}>
        {lista.map((item) => (
          <Flex
            flexDir="column"
            key={item.titulo}
            boxShadow="85px -13px 200px 11px rgb(11 175 233 / 24%) inset"
            maxW={312}
            p="32px"
            borderRadius="16px"
            align="start"
            justify="space-between"
            spacing={4}
          >
            <HStack spacing={0} h={12}>
              <item.icone size={60} color="#12DDFF" />
              <Text
                dangerouslySetInnerHTML={{ __html: item.titulo }}
                fontSize="20px"
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
