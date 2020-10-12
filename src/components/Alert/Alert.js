import React from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
  Flex,
  Box
} from "@chakra-ui/core";

export default function MyAlert() {
  return (
    <>
      <Box justifyContent="center" d="flex" alignItems="center">
        <Alert status="error" w="600px">
          <AlertIcon />
          <AlertTitle mr={2}>Your browser is outdated!</AlertTitle>
          <AlertDescription>
            Your Chakra experience may be degraded.
          </AlertDescription>
          <CloseButton position="absolute" right="8px" top="8px" />
        </Alert>
      </Box>
    </>
  );
}
