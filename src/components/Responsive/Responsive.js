import React from "react";
import { Flex, Stack, Box, Text, Grid } from "@chakra-ui/core";

export default function Responsive() {
  return (
    <>
      <Flex
        align="center"
        width="full"
        justifyContent="center"
        minHeight="100vh"
      >
        <Grid
          templateColumns={{
            lg: "repeat(3, 1fr)",
            md: "repeat(2, 1fr)",
            sm: "repeat(1, 1fr)"
          }}
          gap={10}
          maxWidth="86em"
          ml="auto"
          mr="auto"
        >
          {Array(6)
            .fill("")
            .map((_, index) => (
              <MyBox key="index" />
            ))}
        </Grid>
      </Flex>
    </>
  );
}

const MyBox = () => (
  <>
    <Box
      mx="4"
      w="200px"
      h="15vh"
      boxShadow="lg"
      rounded="lg"
      justifyContent="center"
      d="flex"
      alignItems="center"
      bg="teal.500"
    >
      <Stack>
        <Text fontSize="lg" color="black" textAlign="center">
          Welcome to Chakra UI
        </Text>
        <Text color="black" textAlign="center">
          This is Grid Responsive
        </Text>
      </Stack>
    </Box>
  </>
);
