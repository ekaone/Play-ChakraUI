import React from "react";
import { Box, Text, Stack } from "@chakra-ui/core";
// components
import Drawer from "../Drawer";
import ThemeToggler from "../ThemeToggler";

export default function Header() {
  return (
    <>
      <Box bg="tomato" w="100%" p={4} color="white">
        <Stack isInline justify="space-between">
          <ThemeToggler />
          <Text>logo</Text>
          <Drawer />
        </Stack>
      </Box>
    </>
  );
}
