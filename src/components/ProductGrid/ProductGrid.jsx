import { SimpleGrid } from "@chakra-ui/react";
import ProductCard from "../Cards/ProductCard";

export default function ProductGrid({ products = [] }) {
  return (
    <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing={6}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </SimpleGrid>
  );
}
