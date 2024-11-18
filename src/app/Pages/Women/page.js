"use client";
import BlackBar from "@/components/TermsBar/TermsBar.jsx";

import BigCarousel from "@/components/Carousel/BigCarousel.jsx";
import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import TermsBar from "@/components/TermsBar/TermsBar.jsx";

export default function Women() {
  const images = [
    {
      src: "/assets/women/carousel-8.avif",
      captionSmall: "LA INTERSECȚIA DINTRE LUX ȘI RELAXARE",
      captionLarge: "Pregătită pentru orice ocazie",
      buttonText: "Explorează",
      href: "/Pages/Women/WomenItems/",
    },
    {
      src: "/assets/women/carousel-10.avif",
      captionSmall: "STIL ȘI COMFORT",
      captionLarge: "Piese esențiale pentru orice garderobă",
      buttonText: "Explorează",
      href: "/Pages/Women/WomenItems/",
    },
    {
      src: "/assets/women/carousel-9.avif",
      captionSmall: "MODERNITATE ȘI ELEGANȚĂ",
      captionLarge: "Descoperă noua colecție de toamnă!",
      buttonText: "Explorează",
      href: "/Pages/Women/WomenItems/",
    },
  ];

  return (
    <>
      <Box>
        <TermsBar
          items={[
            "FREE DELIVERY AND RETURNS",
            "30 DAYS RIGHT OF RETURN",
            "CASH ON DELIVERY",
          ]}
        />
        <BigCarousel images={images} href="/Pages/Womnen/WomenItems/" />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        maxWidth="1280px"
        width="100%"
        mx="auto"
        textAlign="center"
        py={8}
      >
        <Heading mb={8}>Women&apos;s Collection</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} width="100%">
          <Box border="1px solid gray" padding="4">
            <Text>Women&apos;s Item 1</Text>
          </Box>
          <Box border="1px solid gray" padding="4">
            <Text>Women&apos;s Item 2</Text>
          </Box>
          <Box border="1px solid gray" padding="4">
            <Text>Women&apos;s Item 3</Text>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
}
