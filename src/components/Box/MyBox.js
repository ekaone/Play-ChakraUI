import React from "react";
import { Box, useColorMode } from "@chakra-ui/core";

function MyBox() {
  const { colorMode } = useColorMode();

  return (
    <>
      <Box
        mx="4"
        w="200px"
        h="15vh"
        bg={colorMode === "light" ? "gray.500" : "gray.200"}
        boxShadow="lg"
        rounded="lg"
      />
    </>
  );
}

export default MyBox;
