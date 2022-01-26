import { background, extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  initialColorMode: "dark",
  useSystemColorMode: false,
  fonts: {
    heading: "OrkneyBold, no-serif",
    body: "OrkneyLight",
  },
  colors: {
    azul: "#12DDFF",
    amarelo: "#F7B500",
    cinza: "#CEC5C5",
  },
  components: {
    Button: {
      baseStyle: {
        rounded: "full",
        fontFamily: "OrkneyMedium",
        fontSize: "15px",
      },
    },
  },
  styles: {
    global: {
      svg: {
        display: "inline",
        lineHeight: "1",
      },
      a: {
        _hover: {
          //textDecoration: "underline",
        },
      },
      body: {
        bg:'url(/bg-pattern.jpg)',
        backgroundAttachment:"fixed"
        /* bg: "var(--white)",
        color: "var(--white)",
        lineHeight: "inherit", */
      },
      button: {
        // _focus: { outlineColor: "#f0f" },
      },
    },
  },
});
