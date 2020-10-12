import React from "react";
import { List, ListItem, ListIcon } from "@chakra-ui/core";

export default function ListComponent() {
  return (
    <>
      <List styleType="disc">
        <ListItem>Lorem ipsum dolor sit amet</ListItem>
        <ListItem>Consectetur adipiscing elit</ListItem>
        <ListItem>Integer molestie lorem at massa</ListItem>
        <ListItem>Facilisis in pretium nisl aliquet</ListItem>
      </List>
    </>
  );
}
