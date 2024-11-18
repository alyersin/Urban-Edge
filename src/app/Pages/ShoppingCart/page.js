"use client";
import { Box, Heading } from "@chakra-ui/react";
import Item from "./Item";
import Summary from "./Summary";
import { useState, useEffect } from "react";

export default function ShoppingCartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    // SIMLATE DATABASE
    const fetchCartItems = async () => {
      const items = [
        {
          id: "20322914",
          brand: "Brand A",
          name: "Product A",
          image: "https://via.placeholder.com/100",
          price: 50,
          size: "41 EU",
        },
        {
          id: "20322915",
          brand: "Brand B",
          name: "Product B",
          image: "https://via.placeholder.com/100",
          price: 70,
          size: "42 EU",
        },
      ];

      setCartItems(items);

      // Initialize quantities for each item
      const initialQuantities = {};
      items.forEach((item) => {
        initialQuantities[item.id] = 1;
      });
      setQuantities(initialQuantities);
    };

    fetchCartItems();
  }, []);

  const updateQuantity = (id, newQuantity) => {
    setQuantities((prev) => ({ ...prev, [id]: newQuantity }));
  };

  const removeItem = (id) => {
    // Remove item from cart
    setCartItems((prev) => prev.filter((item) => item.id !== id));

    // Remove the corresponding quantity
    setQuantities((prev) => {
      const updatedQuantities = { ...prev };
      delete updatedQuantities[id];
      return updatedQuantities;
    });
  };

  const deliveryFee = 12;

  return (
    <Box
      display="flex"
      flexDirection="column"
      maxW="1280px"
      mx="auto"
      px={8}
      py={12}
      borderWidth={1}
      borderRadius="lg"
      boxShadow="md"
    >
      <Heading size="lg" mb={5}>
        SHOPPING BAG
      </Heading>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="flex-start"
        gap="36px"
        width="100%"
      >
        {/* Items Section */}
        <Box flex="2">
          {cartItems.map((item) => (
            <Item
              key={item.id}
              item={item}
              quantity={quantities[item.id]}
              updateQuantity={updateQuantity}
              onRemove={removeItem}
              onMoveToWishlist={() =>
                console.log(`Moved ${item.name} to wishlist`)
              }
            />
          ))}
        </Box>

        {/* Summary Section */}
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-end"
          flex="1"
          maxWidth="400px"
          ml="auto"
          p={4}
          borderRadius="md"
        >
          <Summary
            items={cartItems}
            quantities={quantities}
            deliveryFee={deliveryFee}
          />
        </Box>
      </Box>
    </Box>
  );
}
