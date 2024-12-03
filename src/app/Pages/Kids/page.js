"use client";

import { useState, useEffect } from "react";
import CategorySidebar from "@/components/CategorySidebar/CategorySidebar";
import ProductGrid from "@/components/ProductGrid/ProductGrid";
import TermsBar from "@/components/TermsBar/TermsBar.jsx";
import FilterBar from "@/components/ProductGrid/FilterBar";
import kidsData from "@/data/kids.json"; // Dynamically importing the JSON data
import { Box } from "@chakra-ui/react";

export default function Kids() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Load data from the imported JSON file
  useEffect(() => {
    const loadProducts = () => {
      try {
        setProducts(kidsData); // Use the imported JSON data
        setFilteredProducts(kidsData);
      } catch (error) {
        console.error("Error loading products:", error);
      }
    };

    loadProducts();
  }, []);

  const handleFilterChange = (filterType, value) => {
    if (filterType === "reset") {
      setFilteredProducts(products);
    } else if (filterType === "sort") {
      const sorted = [...filteredProducts].sort((a, b) =>
        value === "price_asc"
          ? a.price - b.price
          : value === "price_desc"
          ? b.price - a.price
          : 0
      );
      setFilteredProducts(sorted);
    }
    // Add more filter logic here
  };

  return (
    <>
      <Box>
        <TermsBar
          items={[
            "FREE DELIVERY AND RETURNS",
            "30 DAYS RIGHT OF RETURN",
            "CASH ON DELIVERY",
          ]}
        />
      </Box>
      <Box>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="left"
          alignItems="left"
          maxWidth="1280px"
          width="100%"
          mx="auto"
          textAlign="center"
          py={8}
        >
          <Box>
            <CategorySidebar />
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            width="100%"
            border="1px solid black"
          >
            <Box maxWidth="1280px" mx="auto" p={4}>
              {/* Filters */}
              <FilterBar onFilterChange={handleFilterChange} />

              {/* Product Grid */}
              <ProductGrid products={filteredProducts} />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
