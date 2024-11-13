"use client";
import { Box, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";

export default function InfoCard({ icon, title, description, href }) {
  return (
    <Link href={href} passHref>
      <Box
        width="100%"
        maxWidth="400px"
        border="1px solid"
        borderColor="gray.300"
        borderRadius="lg"
        padding={4}
        textAlign="left"
        transition="all 0.3s ease"
        _hover={{ boxShadow: "lg", transform: "translateY(-2px)" }}
        cursor="pointer"
      >
        <VStack align="flex-start" spacing={2}>
          <Box fontSize="2xl">{icon}</Box>
          <Text fontWeight="bold" fontSize="lg">
            {title}
          </Text>
          <Text fontSize="sm" color="gray.600">
            {description}
          </Text>
        </VStack>
      </Box>
    </Link>
  );
}
