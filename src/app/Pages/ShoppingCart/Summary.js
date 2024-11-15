"use client";
import { Box, VStack, Flex, Text, Divider, Button } from "@chakra-ui/react";

export default function CartSummary({ itemPrice, quantity, deliveryFee }) {
  const totalPrice = itemPrice * quantity + deliveryFee;

  return (
    <Box>
      <VStack spacing={3} align="stretch">
        <Flex justify="space-between">
          <Text>Subtotal:</Text>
          <Text>{itemPrice * quantity} €</Text>
        </Flex>
        <Flex justify="space-between">
          <Text>Delivery:</Text>
          <Text>{deliveryFee} €</Text>
        </Flex>
        <Divider />
        <Flex justify="space-between" fontWeight="bold">
          <Text>Total:</Text>
          <Text>{totalPrice} €</Text>
        </Flex>
        <Text color="gray.500" fontSize="sm">
          VAT included
        </Text>
        <Button colorScheme="blackAlpha" variant="solid" size="lg">
          Go To Checkout
        </Button>
      </VStack>
    </Box>
  );
}
