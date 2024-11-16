"use client";
import {
  Box,
  Button,
  HStack,
  Icon,
  Image,
  Text,
  Tooltip,
  InputGroup,
  InputLeftElement,
  Input,
  Tabs,
  TabList,
  Tab,
  TabIndicator,
  Divider,
} from "@chakra-ui/react";
import { FaGlobe, FaRegUser, FaRegHeart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import LoginModal from "@/components/LoginModal/LoginModal.jsx";
import Link from "next/link";
import { useDisclosure } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Box as="header" width="100%" paddingY="10px">
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          maxWidth="1280px"
          mx="auto"
          paddingX={{ base: "10px", md: "40px" }}
        >
          {/* LEFT SECTION */}
          <Tabs variant="unstyled" position="relative">
            <TabList>
              <Tab>
                <Link
                  href="/Pages/Women"
                  prefetch={true}
                  onClick={() => console.log("Navigating to women")}
                >
                  <Text>Women</Text>
                </Link>
              </Tab>
              <Tab>
                <Link
                  href="/Pages/Men"
                  prefetch={true}
                  onClick={() => console.log("Navigating to men")}
                >
                  <Text>Men</Text>
                </Link>
              </Tab>
              <Tab>
                <Link
                  href="/Pages/Kids"
                  prefetch={true}
                  onClick={() => console.log("Navigating to kids")}
                >
                  <Text>Kids</Text>
                </Link>
              </Tab>
            </TabList>
            {/* <TabIndicator
              position="absolute"
              bottom="-10px"
              height="2px"
              bg="black"
              borderRadius="md"
            /> */}
          </Tabs>

          {/* CENTER LOGO */}
          <Link href="/">
            <Image
              src="/assets/urbanedge_logo.png"
              alt="urban_logo"
              boxSize="160px"
              height="auto"
              objectFit="contain"
            />
          </Link>

          {/* RIGHT SECTION */}
          <HStack spacing={5}>
            <Tooltip
              label="Language & Region"
              hasArrow
              placement="bottom"
              openDelay={400}
            >
              <Link href="">
                <Icon as={FaGlobe} boxSize={4} />
              </Link>
            </Tooltip>
            <Tooltip
              label="Profile"
              hasArrow
              placement="bottom"
              openDelay={400}
            >
              <Button
                onClick={onOpen}
                variant="ghost"
                _hover={{ bg: "none" }}
                padding="0"
                minWidth="auto"
              >
                <Icon as={FaRegUser} boxSize={4} />
              </Button>
            </Tooltip>
            <Tooltip
              label="Wishlist"
              hasArrow
              placement="bottom"
              openDelay={400}
            >
              <Link href="/Pages/Wishlist">
                <Icon as={FaRegHeart} boxSize={4} />
              </Link>
            </Tooltip>
            <Tooltip label="Cart" hasArrow placement="bottom" openDelay={400}>
              <Link href="/Pages/ShoppingCart">
                <Icon as={AiOutlineShoppingCart} boxSize={5} />
              </Link>
            </Tooltip>
          </HStack>
        </Box>
        <Divider mt="0px" />
        {/* SEARCH INPUT */}
        <Box
          // border="1px solid black"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          maxWidth="1280px"
          mx="auto"
          paddingX={{ base: "10px", md: "40px" }}
          mt="10px"
        >
          <Tabs>
            <TabList display="flex" flexDirection="row">
              <Tab fontSize="sm" bg="white">
                <Link href="">Sale</Link>
              </Tab>
              <Tab fontSize="sm" bg="white">
                <Link href="">Gifts</Link>
              </Tab>
              <Tab fontSize="sm" bg="white">
                <Link href="">Brands</Link>
              </Tab>
              <Tab fontSize="sm" bg="white">
                <Link href="">Clothing</Link>
              </Tab>
              <Tab fontSize="sm" bg="white">
                <Link href="">Shoes</Link>
              </Tab>
              <Tab fontSize="sm" bg="white">
                <Link href="">Bags</Link>
              </Tab>{" "}
              <Tab fontSize="sm" bg="white">
                <Link href="">Accessories</Link>
              </Tab>{" "}
              <Tab fontSize="sm" bg="white">
                <Link href="">Jewellery</Link>
              </Tab>{" "}
              <Tab fontSize="sm" bg="white">
                <Link href="">Homeware</Link>
              </Tab>
            </TabList>
            {/* <TabIndicator
              mt="-2px" 
              height="2px"
              bg="black" 
              borderRadius="md"
            /> */}
          </Tabs>

          <InputGroup width="260px">
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="gray.400" />
            </InputLeftElement>
            <Input
              type="text"
              placeholder="Search"
              borderColor="gray.300"
              focusBorderColor="black"
              _placeholder={{ color: "gray.500" }}
              borderRadius="md"
            />
          </InputGroup>
        </Box>
        {/* LOGINMODAL COMPONENT */}
        <LoginModal isOpen={isOpen} onClose={onClose} />
      </Box>
    </Box>
  );
}
