import React from "react";
import { Box, Text, Stack, Image } from "@chakra-ui/core";
// components
import Drawer from "../Drawer";
import ThemeToggler from "../ThemeToggler";
import ChakraLogo from "../../assets/chakra-logo.png";

export default function Header() {
  return (
    <>
      <Box w="100%" p={2} color="gray.600">
        <Stack isInline justify="space-between" align="baseline">
          <ThemeToggler />
          <Image rounded="full" size="20px" src={ChakraLogo} alt="Chakra-UI" />
          <Drawer />
        </Stack>
      </Box>
    </>
  );
}
