import React from "react";
import { Link } from "react-router-dom";
import { List, ListItem, ListIcon, Stack } from "@chakra-ui/core";

export default function ListComponent() {
  const routes = [
    { id: 1, path: "/", list: "Home" },
    { id: 2, path: "/card", list: "Card" },
    { id: 3, path: "/form-contact", list: "Form Contact" },
    { id: 4, path: "/form-signin", list: "Form Sign in" },
    { id: 5, path: "/form-signup", list: "Form Sign up" },
    { id: 6, path: "/tabs", list: "Tabs" },
    { id: 7, path: "/button", list: "Button" },
    { id: 8, path: "/alert", list: "Alert" }
  ];

  return (
    <>
      <Stack>
        <List styleType="disc">
          {routes.map(route => (
            <Link key={route.id} as={Link} to={route.path}>
              <ListItem key={route.id}>{route.list}</ListItem>
            </Link>
          ))}
        </List>
      </Stack>
    </>
  );
}
