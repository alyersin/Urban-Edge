import { Box, Image, Text, Badge, IconButton, VStack } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";

export default function ProductCard({ product }) {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      _hover={{ boxShadow: "lg" }}
      cursor="pointer"
      bg="white"
    >
      {/* Product Image */}
      <Box position="relative" width="100%" height="250px">
        <Image
          src={product.image}
          alt={product.name}
          width="100%"
          height="100%"
          objectFit="cover"
        />

        {/* Badge */}
        {product.isNew && (
          <Badge position="absolute" top="10px" left="10px" colorScheme="green">
            New
          </Badge>
        )}

        {/* Favorite Icon */}
        <IconButton
          icon={<FaHeart />}
          position="absolute"
          top="10px"
          right="10px"
          bg="whiteAlpha.900"
          _hover={{ bg: "whiteAlpha.800" }}
          aria-label="Add to favorites"
          size="sm"
        />
      </Box>

      {/* Product Details */}
      <VStack spacing={2} align="start" p={4}>
        <Text fontWeight="bold">{product.name}</Text>
        <Text fontSize="sm" color="gray.600">
          {product.description}
        </Text>
        <Text fontWeight="bold">{product.price} lei</Text>
      </VStack>
    </Box>
  );
}
