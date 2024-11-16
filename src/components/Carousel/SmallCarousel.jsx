"use client";
import { Box, HStack, Image } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }  // Scroll halfway to achieve seamless loop
`;

export default function SmallCarousel({ items = [] }) {
  const doubledItems = items.concat(items);

  return (
    <Box overflow="hidden" whiteSpace="nowrap" position="relative">
      <Box
        display="inline-flex"
        animation={`${scroll} 30s linear infinite`}
        style={{ width: "200%" }}
      >
        {doubledItems.map((item, index) => (
          <HStack key={index} spacing={0}>
            {" "}
            <Image
              src={item.src}
              alt={item.alt}
              boxSize="200px"
              objectFit="contain"
              borderRadius="md"
              draggable="false"
            />
          </HStack>
        ))}
      </Box>
    </Box>
  );
}
