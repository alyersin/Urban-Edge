import { Box, Text } from "@chakra-ui/react";
import React from "react";

export default function TermsBar({
  items = [],
  bg = "black",
  color = "white",
  height = "38px",
  gap = "300px",
  fontSize = "0.7rem",
}) {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="100vw"
      height={height}
      bg={bg}
      color={color}
    >
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        gap={gap}
      >
        {items.map((text, index) => (
          <Text key={index} fontSize={fontSize}>
            {text}
          </Text>
        ))}
      </Box>
    </Box>
  );
}
