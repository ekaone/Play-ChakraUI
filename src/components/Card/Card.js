import React from "react";
import {
  Box,
  Image,
  Badge,
  Text,
  Stack,
  Icon,
  Button,
  useColorMode
} from "@chakra-ui/core";

import BuildingImage from "./building.jpg";

function Card() {
  const { colorMode } = useColorMode();
  const bgColor = { light: "gray.200", dark: "gray.700" };
  const textColor = { light: "gray.500", dark: "gray.100" };

  return (
    <>
      <Box justifyContent="center" d="flex" alignItems="center">
        <Box
          w="400px"
          rounded="20px"
          boxShadow="sm"
          overflow="hidden"
          bg={bgColor[colorMode]}
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
            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Text>
            <Stack
              isInline
              justify="space-between"
              color={colorMode[textColor]}
              my={2}
            >
              <Text fontWeight="semibold" fontSize="lg">
                $15
              </Text>
              <Box d="flex">
                <Box as="span">
                  {Array(4)
                    .fill("")
                    .map((_, i) => (
                      <Icon name="star" color="teal.500" key={i} />
                    ))}
                  <Icon name="star" mr="2" />
                </Box>
                <Text as="h3" fontSize="lg" fontWeight="semibold">
                  125 Reviews
                </Text>
              </Box>
            </Stack>
            <Box textAlign="center">
              <Button
                variantColor="teal"
                size="lg"
                mt={3}
                boxShadow="sm"
                _hover={{ boxShadow: "md" }}
                _active={{ boxShadow: "lg" }}
              >
                Order Now!
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Card;
