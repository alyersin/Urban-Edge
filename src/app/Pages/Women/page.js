import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";

export default function Women() {
  return (
    <Box>
      <Heading mb={8}>Women's Collection</Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
        {/* Replace these with actual product cards or components */}
        <Box border="1px solid gray" padding="4">
          <Text>Women's Item 1</Text>
        </Box>
        <Box border="1px solid gray" padding="4">
          <Text>Women's Item 2</Text>
        </Box>
        <Box border="1px solid gray" padding="4">
          <Text>Women's Item 3</Text>
        </Box>
        {/* Add more items as needed */}
      </SimpleGrid>
    </Box>
  );
}
