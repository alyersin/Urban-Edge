"use client";
import { Box, Button, HStack, Icon, Image, Text } from "@chakra-ui/react";
import { FaGlobe, FaRegUser, FaRegHeart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import LoginModal from "@/components/LoginModal/LoginModal.jsx";
import Link from "next/link";
import { useDisclosure } from "@chakra-ui/react";

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      bg="gray.300"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      paddingY="10px"
      paddingX={{ base: "10px", md: "40px" }}
      maxWidth="1280px"
      mx="auto"
    >
      {/* LEFT SECTION */}
      <HStack spacing={6}>
        <Link href="/Pages/Women">
          <Text>Women</Text>
        </Link>
        <Link href="/Pages/Men">
          <Text>Men</Text>
        </Link>
        <Link href="/Pages/Kids">
          <Text>Kids</Text>
        </Link>
      </HStack>

      {/* CENTER LOGO */}
      <Link href="/">
        <Image
          src="/assets/urbanedge_logo.png"
          alt="urban_logo"
          boxSize="60px"
          objectFit="contain"
          width="100%"
        />
      </Link>

      {/* RIGHT SECTION */}
      <HStack spacing={6}>
        <Link href="">
          <Icon as={FaGlobe} boxSize={4} />
        </Link>
          <Button onClick={onOpen} variant="ghost">
            <Icon as={FaRegUser} boxSize={4} />
          </Button>
        <Link href="">
          <Icon as={FaRegHeart} boxSize={4} />
        </Link>
        <Link href="">
          <Icon as={AiOutlineShoppingCart} boxSize={4} />
        </Link>
      </HStack>

        {/* LOGINMODAL COMPONENT */}
        <LoginModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
}
