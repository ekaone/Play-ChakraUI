import React from "react";
import {
  Button,
  Input,
  Textarea,
  FormLabel,
  FormControl,
  Heading,
  IconButton,
  Flex,
  Box,
  useColorMode
} from "@chakra-ui/core";

function FormContact() {
  return (
    <>
      <Contact />
    </>
  );
}

const Contact = () => {
  return (
    <Flex minHeight="75vh" width="full" align="center" justifyContent="center">
      <Box
        borderWidth={1}
        px={4}
        width="full"
        maxWidth="1000px"
        borderRadius={4}
        textAlign="center"
        boxShadow="lg"
      >
        <Box p={4}>
          <ContactHeader />
          <ContactForm />
        </Box>
      </Box>
    </Flex>
  );
};

const ContactHeader = () => {
  return (
    <Box textAlign="center">
      <Heading>Contact Us</Heading>
    </Box>
  );
};

const ContactForm = () => {
  return (
    <Box my={8} textAlign="left">
      <form>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input type="text" placeholder="Enter your name" />
        </FormControl>

        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="Enter your email" />
        </FormControl>

        <FormControl>
          <FormLabel>Message</FormLabel>
          <Textarea type="textarea" placeholder="Enter your message" />
        </FormControl>

        <Button variantColor="blue" type="submit" mt={6}>
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default FormContact;
