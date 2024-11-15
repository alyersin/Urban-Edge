"use client";
import {
  Box,
  Flex,
  Image,
  VStack,
  Text,
  Button,
  Divider,
} from "@chakra-ui/react";

export default function Item({ item, quantity, onMoveToWishlist }) {
  return (
    <Box>
      <Divider my={5} />
      <Flex direction="column" mb={5}>
        <Flex align="center">
          <Image src={item.image} alt={item.name} boxSize="100px" mr={5} />
          <VStack align="start" spacing={1}>
            <Text fontWeight="bold">{item.brand}</Text>
            <Text>{item.name}</Text>
            <Text color="gray.500">FARFETCH ID: {item.id}</Text>
            <Text color="red.500" fontWeight="bold">
              Last 1 left
            </Text>
          </VStack>
        </Flex>

        <Flex justify="space-between" align="center" mt={4}>
          <Box>
            <Text fontWeight="bold" fontSize="lg">
              {item.price} €
            </Text>
            <Text color="gray.500" fontSize="sm">
              VAT included
            </Text>
          </Box>
          <Box>
            <Text fontWeight="bold">Size</Text>
            <Text>{item.size}</Text>
          </Box>
          <Box>
            <Text fontWeight="bold">Quantity</Text>
            <Text>{quantity}</Text>
          </Box>
          <Button
            onClick={onMoveToWishlist}
            variant="link"
            color="blue.500"
            fontSize="sm"
          >
            Move to wishlist
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}
