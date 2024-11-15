"use client";
import BlackBar from "@/components/BlackBar/BlackBar.jsx";

import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";

export default function Women() {
  return (
    <>
      <Box>
        <BlackBar />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        maxWidth="1280px"
        width="100%"
        mx="auto"
        textAlign="center"
        py={8}
      >
        <Heading mb={8}>Kids's Collection</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} width="100%">
          {/* Replace these with actual product cards or components */}
          <Box border="1px solid gray" padding="4">
            <Text>Kids's Item 1</Text>
          </Box>
          <Box border="1px solid gray" padding="4">
            <Text>Kids's Item 2</Text>
          </Box>
          <Box border="1px solid gray" padding="4">
            <Text>Kids's Item 3</Text>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
}
