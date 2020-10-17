import React from "react";
import {
  Input,
  Stack,
  InputLeftAddon,
  Icon,
  InputGroup,
  Button,
  FormControl,
  FormHelperText,
  Flex,
  Box
} from "@chakra-ui/core";

function FormSignIn() {
  return (
    <>
      <Flex
        minHeight="100vh"
        width="full"
        align="center"
        justifyContent="center"
      >
        <Box
          borderWidth={1}
          px={4}
          py={4}
          width="400px"
          maxWidth="1000px"
          borderRadius={4}
          textAlign="center"
          boxShadow="lg"
        >
          <form action="submit">
            <Stack spacing={2}>
              <FormControl isRequired>
                <InputGroup>
                  <InputLeftAddon children={<Icon name="email" />} />
                  <Input type="email" placeholder="Email" aria-label="Email" />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <InputGroup>
                  <InputLeftAddon children={<Icon name="lock" />} />
                  <Input
                    type="password"
                    placeholder="Password"
                    aria-label="Password"
                  />
                </InputGroup>
              </FormControl>

              <Button
                type="submit"
                boxShadow="sm"
                _hover={{ boxShadow: "md" }}
                _active={{ boxShadow: "lg" }}
              >
                Sign in!
              </Button>
              <FormHelperText textAlign="center">
                Welcome{" "}
                <span role="img" aria-label="Image">
                  ✌
                </span>
              </FormHelperText>
            </Stack>
          </form>
        </Box>
      </Flex>
    </>
  );
}

export default FormSignIn;
