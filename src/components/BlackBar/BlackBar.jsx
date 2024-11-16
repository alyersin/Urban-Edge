import { Box, Text } from "@chakra-ui/react";
import React from "react";

export default function BlackBar() {
  return (
    <div>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap={4}
        width="100vw"
        height="38px"
        bg="black"
        color="white"
      >
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          gap="300px"
        >
          <Text fontSize="0.7rem">FREE DELIVERY AND RETURNS</Text>
          <Text fontSize="0.7rem">30 DAYS RIGHT OF RETURN</Text>
          <Text fontSize="0.7rem">CASH ON DELIVERY</Text>
        </Box>
      </Box>
    </div>
  );
}
