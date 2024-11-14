"use client";
import { Box, Heading, Icon, SimpleGrid, Text } from "@chakra-ui/react";
import { FaTools } from "react-icons/fa";

export default function Kids() {
  return (
    <Box>
      <Heading mb={8}>Kids' Collection</Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
        {/* Replace these with actual product cards or components */}
        <Box border="1px solid gray" padding="4" borderRadius="md">
          <Text>Kids' Item 1</Text>
        </Box>
        <Box border="1px solid gray" padding="4" borderRadius="md">
          <Text>Kids' Item 2</Text>
        </Box>
        <Box border="1px solid gray" padding="4" borderRadius="md">
          <Text>Kids' Item 3</Text>
        </Box>
        <Box border="1px solid gray" padding="4" borderRadius="md">
          <Text>Kids' Item 4</Text>
        </Box>
        {/* Add more items as needed */}
      </SimpleGrid>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
        textAlign="center"
        bg="gray.50"
        p={4}
      >
        <Icon as={FaTools} boxSize={12} color="orange.400" mb={4} />
        <Text fontSize="3xl" fontWeight="bold" color="gray.700" mb={2}>
          Page Under Development
        </Text>
        <Text fontSize="lg" color="gray.500">
          We’re working hard to bring you this page. Check back soon!
        </Text>
      </Box>
    </Box>
  );
}
