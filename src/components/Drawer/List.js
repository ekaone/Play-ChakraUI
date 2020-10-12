import React from "react";
import { Link } from "react-router-dom";
import { List, ListItem, ListIcon, Stack } from "@chakra-ui/core";

export default function ListComponent() {
  return (
    <>
      <Stack>
        <List styleType="disc">
          <Link as={Link} to="/">
            <ListItem>Home</ListItem>
          </Link>
          <Link as={Link} to="/card">
            <ListItem>Card</ListItem>
          </Link>
          <ListItem>Form</ListItem>
          <ListItem>Form Tabs</ListItem>
          <ListItem>Badge</ListItem>
        </List>
      </Stack>
    </>
  );
}
