import { Box, Select, HStack, Text, Button } from "@chakra-ui/react";

export default function FilterBar({ onFilterChange }) {
  return (
    <HStack spacing={4} width="100%" mb={4}>
      {/* Sort Dropdown */}
      <Box>
        <Text fontSize="sm" fontWeight="bold" mb={1}>
          Sort By
        </Text>
        <Select
          placeholder="Select Sort"
          onChange={(e) => onFilterChange("sort", e.target.value)}
        >
          <option value="price_asc">Price: Low to High</option>
          <option value="price_desc">Price: High to Low</option>
          <option value="new">Newest</option>
        </Select>
      </Box>

      {/* Filter Options */}
      <Box>
        <Text fontSize="sm" fontWeight="bold" mb={1}>
          Price Range
        </Text>
        <Select
          placeholder="Select Range"
          onChange={(e) => onFilterChange("price", e.target.value)}
        >
          <option value="0-100">0 - 100 lei</option>
          <option value="101-500">101 - 500 lei</option>
          <option value="501+">501+ lei</option>
        </Select>
      </Box>

      {/* Reset Button */}
      <Button onClick={() => onFilterChange("reset")}>Reset Filters</Button>
    </HStack>
  );
}
