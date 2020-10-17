import React from "react";
import {
  Input,
  Stack,
  InputLeftAddon,
  Icon,
  InputGroup,
  Button,
  FormControl,
  Divider,
  FormHelperText,
  Flex,
  Box
} from "@chakra-ui/core";

function FormSignUp() {
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
                  <InputLeftAddon children={<Icon name="info" />} />
                  <Input
                    type="name"
                    placeholder="First name"
                    aria-label="First name"
                  />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <InputGroup>
                  <InputLeftAddon children={<Icon name="info" />} />
                  <Input
                    type="name"
                    placeholder="Last name"
                    aria-label="Last name"
                  />
                </InputGroup>
              </FormControl>
              <Divider borderColor="gray.500" />
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
                Sign up!
              </Button>
              <FormHelperText textAlign="center">
                We will never share your Email{" "}
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

export default FormSignUp;
