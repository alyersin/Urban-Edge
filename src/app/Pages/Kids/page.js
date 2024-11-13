import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";

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
    </Box>
  );
}
