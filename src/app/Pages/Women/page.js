"use client";
import BlackBar from "@/components/BlackBar/BlackBar.jsx";

import BigCarousel from "@/components/Carousel/BigCarousel.jsx";
import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";

export default function Women() {
  const images = [
    {
      src: "/assets/women/carousel-8.jpg",
      captionSmall: "LA INTERSECȚIA DINTRE LUX ȘI RELAXARE",
      captionLarge: "Pregătită pentru orice ocazie",
      buttonText: "Explorează",
    },
    {
      src: "/assets/women/carousel-10.jpg",
      captionSmall: "STIL ȘI COMFORT",
      captionLarge: "Piese esențiale pentru orice garderobă",
      buttonText: "Explorează",
    },
    {
      src: "/assets/women/carousel-9.jpg",
      captionSmall: "MODERNITATE ȘI ELEGANȚĂ",
      captionLarge: "Descoperă noua colecție de toamnă!",
      buttonText: "Explorează",
    },
  ];

  return (
    <>
      <Box>
        <BlackBar />
        <BigCarousel images={images} />
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
          {/* Replace these with actual product cards or components */}
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
