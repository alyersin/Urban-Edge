"use client";
import { Box, Text, Icon } from "@chakra-ui/react";
import { FaTools } from "react-icons/fa";
import React from "react";

export default function page() {
  return (
    <div>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
        textAlign="center"
        bg="gray.50"
        p={4}
      >
        <Icon as={FaTools} boxSize={12} color="orange.400" mb={4} />
        <Text fontSize="3xl" fontWeight="bold" color="gray.700" mb={2}>
          Page Under Development
        </Text>
        <Text fontSize="lg" color="gray.500">
          We’re working hard to bring you this page. Check back soon!
        </Text>
      </Box>
    </div>
  );
}
