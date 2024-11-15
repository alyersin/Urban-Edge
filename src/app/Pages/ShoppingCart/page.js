"use client";
import { Box, Heading } from "@chakra-ui/react";
import Item from "./Item";
import Summary from "./Summary";
import { useState } from "react";

export default function ShoppingCartPage() {
  const [quantity, setQuantity] = useState(1);

  const item = {
    brand: "Paris Texas",
    name: "Stiletto 80mm crocodile-effect leather boots",
    id: "20322914",
    image: "https://via.placeholder.com/100",
    price: 774,
    size: "41 EU",
  };
  const deliveryFee = 12;

  return (
    <Box
      display="flex"
      flexDirection="column"
      maxW="1280px"
      mx="auto"
      p={12}
      borderWidth={1}
      borderRadius="lg"
      boxShadow="md"
    >
      <Heading size="lg" mb={5}>
        SHOPPING BAG
      </Heading>
      <Box display="flex" flexDirection="row">
        <Box flex="2">
          <Item
            item={item}
            quantity={quantity}
            onMoveToWishlist={() => console.log("Moved to wishlist")}
          />
        </Box>

        <Box flex="1">
          <Summary
            itemPrice={item.price}
            quantity={quantity}
            deliveryFee={deliveryFee}
          />
        </Box>
      </Box>
    </Box>
  );
}
