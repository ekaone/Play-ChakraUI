import React from "react";
import { Button, Box } from "@chakra-ui/core";

export default function MyButton() {
  return (
    <>
      <Box
        minHeight="100vh"
        justifyContent="center"
        d="flex"
        alignItems="center"
      >
        <Button variantColor="green">Button</Button>
      </Box>
    </>
  );
}
