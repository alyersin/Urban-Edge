"use client";

import React from "react";
import { Box, Text, HStack, Link, Icon, Divider } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <Box as="footer" width="100%" bg="#b4b4b6" color="black" py="16px">
      <Box
        maxWidth="1280px"
        mx="auto"
        textAlign="center"
        px="10px"
        py="14px 0 34px 0"
      >
        <Box display="inline-block" mb={2} lineHeight="1" position="relative">
          <Text
            fontSize="xs"
            fontWeight="bold"
            color="orange.500"
            position="relative"
            left="-8px"
          >
            URBAN
          </Text>
          <Text fontSize="2xl" fontWeight="bold" color="orange.500">
            EDGE
          </Text>
        </Box>
        {/* <Text fontSize="xs" mb="8px">
          &copy; {new Date().getFullYear()} All rights reserved.
        </Text> */}
        {/* SOCIAL MEDIA LINKS */}
        <HStack justify="center" spacing="20px">
          <Link href="https://github.com/alyersin" isExternal>
            <Icon as={FaGithub} boxSize="5" _hover={{ color: "gray.400" }} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/ersin-ali-228301107/"
            isExternal
          >
            <Icon as={FaLinkedin} boxSize="5" _hover={{ color: "blue.400" }} />
          </Link>
          <Link href="https://www.facebook.com/aly.ersin" isExternal>
            <Icon as={FaFacebook} boxSize="5" _hover={{ color: "blue.600" }} />
          </Link>
          <Link href="https://x.com/shase6" isExternal>
            <Icon as={FaTwitter} boxSize="5" _hover={{ color: "blue.500" }} />
          </Link>
        </HStack>
      </Box>
      {/* DIVIDER */}
      <Divider borderColor="white" padding="16px 0 0 0" />
      {/* Footer Links */}
      <Box
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        gap="26px"
        justifyContent="center"
        alignItems="center"
        maxWidth="1280px"
        mx="auto"
        py="7"
        px={{ base: "10px", md: "40px" }}
      >
        <Link href="#" textDecoration="underline">
          <Text>Privacy Policy</Text>
        </Link>
        <Link href="#" textDecoration="underline">
          <Text>Terms and Conditions</Text>
        </Link>
        <Link href="#" textDecoration="underline">
          <Text>Accessibility</Text>
        </Link>
        <Link href="#" textDecoration="underline">
          <Text>Sitemap</Text>
        </Link>
        <Link href="#" textDecoration="underline">
          <Text>Protection of Intellectual Property</Text>
        </Link>
      </Box>
      {/* DISCLAIMER */}
      <Text
        maxWidth="1280px"
        mx="auto"
        px={{ base: "10px", md: "40px" }}
        textAlign="center"
        fontSize="xs"
        mt={4}
      >
        'URBAN EDGE' and the 'URBAN EDGE' logo are trademarks of URBAN EDGE RO
        Limited and are registered in numerous jurisdictions around the world. ©
        Copyright {new Date().getFullYear()} URBAN EDGE RO Limited. All rights
        reserved.
      </Text>
    </Box>
  );
}
