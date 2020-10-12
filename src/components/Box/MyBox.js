import React from "react";
import { Box, useColorMode, Flex, Text, Stack } from "@chakra-ui/core";

function MyBox() {
  const { colorMode } = useColorMode();

  return (
    <>
      <Flex width="full" justifyContent="center">
        <Box
          mx="4"
          w="200px"
          h="15vh"
          bg={colorMode === "light" ? "gray.500" : "gray.200"}
          boxShadow="lg"
          rounded="lg"
          justifyContent="center"
          d="flex"
          alignItems="center"
        >
          <Stack>
            <Text fontSize="lg" color="black" textAlign="center">
              Welcome to Chakra UI
            </Text>
            <Text color="black" textAlign="center">
              This is Box
            </Text>
          </Stack>
        </Box>
      </Flex>
    </>
  );
}

export default MyBox;
