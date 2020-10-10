import React from "react";
import { Box, Image, Badge, Text, Stack } from "@chakra-ui/core";

import BuildingImage from "./building.jpg";

function Card() {
  return (
    <>
      <Box justifyContent="center" d="flex" alignItems="center">
        <Box
          w="400px"
          rounded="20px"
          boxShadow="sm"
          overflow="hidden"
          bg="gray.200"
        >
          <Image src={BuildingImage} alt="Building" />
          <Box p={5}>
            <Stack isInline align="baseline">
              <Badge variant="solid" variantColor="teal" rounded="full" px={2}>
                NEW
              </Badge>
              <Badge variant="solid" variantColor="teal" rounded="full" px={2}>
                REACT
              </Badge>
              <Text
                textTransform="uppercase"
                fontSize="sm"
                color="gray.500"
                letterSpacing="wide"
              >
                2 hours &bull; Hooks Components
              </Text>
            </Stack>
            <Text as="h2" fontSize="xl" fontWeight="semibold" my={2}>
              Introduction to React and Chakra-UI
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Card;
