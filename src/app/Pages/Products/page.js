"use client";
import { useEffect, useState } from "react";
import supabase from "@/utils/supabaseClient";
import { Box, Text, VStack, Spinner } from "@chakra-ui/react";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase.from("products").select("*");

      if (error) {
        console.error("Error fetching products:", error);
      } else {
        setProducts(data || []);
      }
      setLoading(false);
    };

    fetchProducts();
  }, []);

  return (
    <Box p={8}>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Products
      </Text>
      {loading ? (
        <Spinner />
      ) : (
        <VStack spacing={4} align="stretch">
          {products.map((product) => (
            <Box
              key={product.id}
              p={4}
              borderWidth="1px"
              borderRadius="md"
              shadow="sm"
            >
              <Text fontSize="lg" fontWeight="bold">
                {product.name}
              </Text>
              <Text>{product.description}</Text>
              <Text color="green.600">${product.price}</Text>
            </Box>
          ))}
        </VStack>
      )}
    </Box>
  );
}
