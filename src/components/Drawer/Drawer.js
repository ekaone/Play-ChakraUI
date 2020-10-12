import React, { useRef } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  useDisclosure,
  Text,
  Stack,
  IconButton,
  useColorMode
} from "@chakra-ui/core";
// components
import MyList from "./List";

export default function SideDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode } = useColorMode();
  const btnRef = useRef();
  const iconColor = { light: "gray.600", dark: "white" };

  return (
    <>
      <IconButton
        ref={btnRef}
        onClick={onOpen}
        aria-label="List menu"
        icon="arrow-left"
        size="sm"
        color={iconColor[colorMode]}
      >
        Open
      </IconButton>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Chakra-UI Components</DrawerHeader>

          <DrawerBody>
            <Stack>
              <MyList />
            </Stack>
          </DrawerBody>

          <DrawerFooter>
            <Text>Footer here</Text>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
