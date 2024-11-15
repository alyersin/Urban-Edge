"use client";
import { Box, HStack, Image } from "@chakra-ui/react";
import { keyframes } from "@emotion/react"; // Import keyframes from emotion

// Define keyframes to scroll the carousel left and loop back
const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }  // Scroll halfway to achieve seamless loop
`;

export default function SmallCarousel({ items = [] }) {
  // Duplicate the items array to achieve a smooth transition
  const doubledItems = items.concat(items);

  return (
    <Box overflow="hidden" whiteSpace="nowrap" position="relative">
      <Box
        display="inline-flex"
        animation={`${scroll} 30s linear infinite`} // Adjust duration for speed
        style={{ width: "200%" }} // Expand the width to fit the duplicated items
      >
        {doubledItems.map((item, index) => (
          <HStack key={index} spacing={0}>
            {" "}
            {/* Set spacing to 0 to remove gaps */}
            <Image
              src={item.src}
              alt={item.alt}
              boxSize="200px"
              objectFit="cover"
              borderRadius="md"
            />
          </HStack>
        ))}
      </Box>
    </Box>
  );
}
