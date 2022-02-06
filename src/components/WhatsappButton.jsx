import { Box } from "@chakra-ui/react";
import Image from "next/image";

export const WhatsappButton = () => (
  <Box
    h={50}
    w={150}
    zIndex={99}
    position="fixed"
    bottom={4}
    right={1}
    as="a"
    href="https://api.whatsapp.com/send/?phone=5533991957171&text=Ol%C3%A1%21+Gostaria+de+tirar+algumas+d%C3%BAvidas%21&app_absent=0"
    target="_blank"
  >
    <Image src="/whatsapp.png" alt="Chamar no Whatsapp" layout="fill" />
  </Box>
);
