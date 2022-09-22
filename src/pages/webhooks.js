import { DownloadIcon, LinkIcon } from "@chakra-ui/icons";
import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Spacer,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { botconversaApi } from "../utils/api";

export default function WebHooksPage() {
  const [data, setData] = useState();
  async function getFlows() {
    const response = await axios.get("api/getFlows");
    setData(response?.data);
  }
  useEffect(() => {
    getFlows();
  }, []);

  return (
    <Center
      fontSize={14}
      align="center"
      flexDirection="column"
      gap={10}
      bgImage="bg-pattern.jpg"
      p={8}
    >
      <Image alt="Logo Adschool" src="/logo2.png" />
      <VStack>
        <Heading fontSize={20}>
          Lista automática de Fluxos do botConversa
        </Heading>
        <Text>para utilização como Webhooks, dentro do ActiveCampain:</Text>
      </VStack>
      <VStack align="start">
        {data?.map((item) => (
          <Flex
            flexDirection={{ base: "column", md: "row" }}
            w="full"
            justify="space-between"
            gap={4}
            p={2}
            bg="gray.700"
            align="center"
            key={item.id}
          >
            <Badge fontWeight={600} bg="azul">
              ID: {item.id}
            </Badge>
            <Text>{item.name}</Text>
            <Spacer />
            <Button
              as="a"
              href={`https://adschool.kassio.site/api/botconversa?fluxo=${item.id}`}
              size="xs"
              colorScheme="blackAlpha"
              leftIcon={<LinkIcon color="azul" />}
            >
              {`https://adschool.kassio.site/api/botconversa?fluxo=${item.id}`}
            </Button>
          </Flex>
        ))}
      </VStack>
    </Center>
  );
}
