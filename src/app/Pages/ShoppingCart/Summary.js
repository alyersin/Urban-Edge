"use client";
import { Box, VStack, Flex, Text, Divider, Button } from "@chakra-ui/react";

export default function CartSummary({ items, quantities, deliveryFee }) {
  const subtotal = items.reduce(
    (total, item) => total + item.price * (quantities[item.id] || 0),
    0
  );
  const totalPrice = subtotal + deliveryFee;

  return (
    <Box width="70%">
      <VStack spacing={4} align="stretch">
        <Flex justify="space-between">
          <Text>Subtotal:</Text>
          <Text>{subtotal.toFixed(2)} €</Text>
        </Flex>
        <Flex justify="space-between">
          <Text>Delivery:</Text>
          <Text>{deliveryFee.toFixed(2)} €</Text>
        </Flex>
        <Divider />
        <Flex justify="space-between" fontWeight="bold">
          <Text>Total:</Text>
          <Text>{totalPrice.toFixed(2)} €</Text>
        </Flex>
        <Text color="gray.500" fontSize="sm">
          VAT included
        </Text>
        <Button colorScheme="blackAlpha" variant="solid" size="lg" bg="black">
          Go To Checkout
        </Button>
      </VStack>
    </Box>
  );
}
