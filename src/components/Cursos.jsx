import React from "react";
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
} from "@chakra-ui/react";
import {
  FaArrowCircleRight,
  FaChartBar,
  FaDatabase,
  FaFacebookSquare,
  FaFunnelDollar,
  FaGoogle,
  FaHome,
  FaHourglassHalf,
  FaLinkedin,
  FaListUl,
  FaMotorcycle,
  FaPen,
  FaRocket,
  FaShoppingCart,
  FaSortAmountUp,
  FaTag,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

export function Cursos() {
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
        //flexDir={{ base: "column", sm: "row" }}
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
        <Curso
          titulo="FACEBOOK <br/> ADS"
          descricao="Aprenda como dominar os anúncios dentro do maior conglomerado de redes sociais do planeta."
          tempo="3 horas"
          aulas="32 aulas"
          icone={<FaFacebookSquare size="50px" color="#12DDFF" />}
        />
        <Curso
          titulo="GOOGLE <br/> ADS"
          descricao="Aprenda como dominar os anúncios dentro do maior site de buscas do planeta Terra."
          tempo="3 horas"
          aulas="35 aulas"
          icone={<FaGoogle size="50px" color="#12DDFF" />}
        />
        <Curso
          titulo="YOUTUBE <br/> ADS"
          descricao="Aprenda como dominar os anúncios dentro da maior rede de conteúdo em vídeos do mundo."
          tempo="1 horas"
          aulas="18 aulas"
          icone={<FaYoutube size="50px" color="#12DDFF" />}
        />
        <Curso
          titulo="LINKEDIN <br/> ADS"
          descricao="Aprenda como dominar anúncios para captação de empresas na maior rede B2B do mundo."
          tempo="2 horas"
          aulas="22 aulas"
          icone={<FaLinkedin size="50px" color="#12DDFF" />}
        />
        <Curso
          titulo="TIKTOK <br/> ADS"
          descricao="Aprenda como dominar anúncios na rede social que mais cresce e viraliza em 2022.."
          tempo="1 horas"
          aulas="18 aulas"
          icone={<FaTiktok size="50px" color="#12DDFF" />}
        />
        <Curso
          titulo="REDATOR <br/> COPYWRITING"
          descricao="Domine as técnicas milionárias de escrita persuasiva e encante seu cliente gerando vendas."
          tempo="2 horas"
          aulas="26 aulas"
          icone={<FaPen size="50px" color="#12DDFF" />}
        />
        <Curso
          titulo="GA4: GOOGLE <br/> ANALYTICS "
          descricao="Aprenda como metrificar a origem de qualquer conversão em seu site e otimize seus resultados."
          tempo="2 horas"
          aulas="28 aulas"
          icone={<FaChartBar size="50px" color="#12DDFF" />}
        />
        <Curso
          titulo="GTM: GOOGLE TAG MANAGER "
          descricao="Aprenda como inserir pixels e tags de forma automatizada, além de criar eventos personalizados."
          tempo="2 horas"
          aulas="16 aulas"
          icone={<FaTag size="50px" color="#12DDFF" />}
        />
        <Curso
          titulo="GOOGLE DATA<br/>STUDIO "
          descricao="Aprenda como construir relatórios e dashboards personalizados e com design acima da média."
          tempo="2 horas"
          aulas="14 aulas"
          icone={<FaDatabase size="50px" color="#12DDFF" />}
        />
        <Curso
          titulo="GESTOR DE TRÁFEGO PARA LANÇAMENTO "
          descricao="Aprenda como gerar tráfego para lançamentos semente e internos e gerar picos de vendas."
          tempo="3 horas"
          aulas="32 aulas"
          icone={<FaRocket size="50px" color="#12DDFF" />}
        />
        <Curso
          titulo="GESTOR DE TRÁFEGO PERPÉTUO"
          descricao="Aprenda como gerar tráfego para produtos que vendem todo santo dia, e tenha previsibilidade."
          tempo="2 horas"
          aulas="28 aulas"
          icone={<FaSortAmountUp size="50px" color="#12DDFF" />}
        />
        <Curso
          titulo="GESTOR DE TRÁFEGO PARA NEGÓCIOS"
          descricao="Aprenda como anunciar para negócios corporativos e locais de qualquer nicho e porte."
          tempo="3 horas"
          aulas="30 aulas"
          icone={<FaHome size="50px" color="#12DDFF" />}
        />
        <Curso
          titulo="GESTOR DE TRÁFEGO PARA DELIVERY"
          descricao="Use tráfego pago para causar uma avalanches de pedidos na seu bairro ou cidade."
          tempo="2 horas"
          aulas="24 aulas"
          icone={<FaMotorcycle size="50px" color="#12DDFF" />}
        />
        <Curso
          titulo="GESTOR DE TRÁFEGO PARA ECOMMERCE"
          descricao="Aprenda como criar campanhas de tráfego para catálogos de produtos no facebook e google."
          tempo="3 horas"
          aulas="35 aulas"
          icone={<FaShoppingCart size="50px" color="#12DDFF" />}
        />
        <Curso
          titulo="CONSTRUTOR DE FUNIS DE VENDAS"
          descricao="Aprenda os fundamentos para construir funis de vendas e vender literalmente qualquer produto."
          tempo="2 horas"
          aulas="23 aulas"
          icone={<FaFunnelDollar size="50px" color="#12DDFF" />}
        />
      </Wrap>
    </Flex>
  );
}

export const Curso = (props) => (
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
