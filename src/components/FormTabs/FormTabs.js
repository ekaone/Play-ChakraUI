import React from "react";
// components
import FormSignUp from "../FormSignUp";
import FormSignIn from "../FormSignIn";
import {
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useColorMode
} from "@chakra-ui/core";

function FormTabs() {
  const { colorMode } = useColorMode();

  return (
    <>
      <Box justifyContent="center" d="flex" alignItems="center">
        <Box
          p="2"
          mx="2"
          bg={colorMode === "light" ? "gray.200" : "gray.600"}
          w="300px"
          h="70vh"
          boxShadow="sm"
          rounded="lg"
        >
          <Tabs variant="enclosed-colored" isFitted m="4">
            <TabList>
              <Tab>Sign up</Tab>
              <Tab>Sign in</Tab>
            </TabList>
            <TabPanels mt={2}>
              <TabPanel>
                <FormSignUp />
              </TabPanel>
              <TabPanel>
                <FormSignIn />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </>
  );
}

export default FormTabs;
