import React from "react";
import { useColorMode, Box, IconButton } from "@chakra-ui/core";

function ThemeToggler() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <IconButton
        icon={colorMode === "light" ? "moon" : "sun"}
        onClick={toggleColorMode}
        variant="ghost"
      />
    </>
  );
}

export default ThemeToggler;
