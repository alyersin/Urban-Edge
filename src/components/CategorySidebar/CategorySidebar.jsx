import { Box, Button } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export default function CategorySidebar() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      textAlign="left"
      border="1px solid black"
      width="260px"
      height="auto"
      padding="30px 20px"
    >
      <Button
        as={Link}
        href=""
        colorScheme="#AEAEAE"
        variant="ghost"
        width="100%"
        fontSize="1.2rem"
        opacity="80%"
        justifyContent="flex-start"
        mb={2}
      >
        Babies
      </Button>
      <Button
        as={Link}
        href=""
        colorScheme="#AEAEAE"
        variant="ghost"
        width="100%"
        opacity="80%"
        fontSize="1.2rem"
        justifyContent="flex-start"
        mb={2}
      >
        Girls
      </Button>
      <Button
        as={Link}
        href=""
        colorScheme="#AEAEAE"
        variant="ghost"
        width="100%"
        opacity="80%"
        fontSize="1.2rem"
        justifyContent="flex-start"
      >
        Boys
      </Button>
    </Box>
  );
}
