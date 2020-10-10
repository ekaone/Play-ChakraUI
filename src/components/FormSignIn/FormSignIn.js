import React from "react";
import {
  Input,
  Stack,
  Box,
  InputLeftAddon,
  Icon,
  InputGroup,
  Button,
  FormControl,
  FormHelperText
} from "@chakra-ui/core";

function FormSignIn() {
  return (
    <>
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
          <FormHelperText textAlign="center">Welcome ✌</FormHelperText>
        </Stack>
      </form>
    </>
  );
}

export default FormSignIn;
