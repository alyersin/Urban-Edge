"use client";

import React from "react";
import { Box, Text, HStack, Link, Icon } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <Box as="footer" width="100%" bg="gray.700" color="white" paddingY="16px">
      <Box maxWidth="1280px" mx="auto" textAlign="center" paddingX="10px">
        <Text fontSize="xs" mb="8px">
          &copy; {new Date().getFullYear()} Fav City. All rights reserved.
        </Text>
        <HStack justify="center" spacing="20px">
          <Link href="https://github.com/alyersin" isExternal>
            <Icon as={FaGithub} boxSize="6" _hover={{ color: "gray.400" }} />
          </Link>
          <Link href="https://www.linkedin.com/in/ersin-ali-228301107/">
            <Icon as={FaLinkedin} boxSize="6" _hover={{ color: "blue.400" }} />
          </Link>
          <Link href="https://www.facebook.com/aly.ersin" isExternal>
            <Icon as={FaFacebook} boxSize="6" _hover={{ color: "blue.600" }} />
          </Link>
          <Link href="https://x.com/shase6" isExternal>
            <Icon as={FaTwitter} boxSize="6" _hover={{ color: "blue.500" }} />
          </Link>
        </HStack>
      </Box>
    </Box>
  );
}
