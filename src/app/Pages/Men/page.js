"use client";
import BlackBar from "@/components/BlackBar/BlackBar.jsx";
import BigCarousel from "@/components/Carousel/BigCarousel.jsx";

import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";

export default function Men() {
  const images = [
    {
      src: "/assets/men/carousel-1.avif",
      captionSmall: "LA INTERSECȚIA DINTRE LUX ȘI RELAXARE",
      captionLarge: "Pregătită pentru orice ocazie",
      buttonText: "Explorează",
    },
    {
      src: "/assets/men/carousel-2.avif",
      captionSmall: "STIL ȘI COMFORT",
      captionLarge: "Piese esențiale pentru orice garderobă",
      buttonText: "Explorează",
    },
    {
      src: "/assets/men/carousel-3.avif",
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
        <Heading mb={8}>Men&apos;s Collection</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} width="100%">
          <Box border="1px solid gray" padding="4">
            <Text>Men&apos;s Item 1</Text>
          </Box>
          <Box border="1px solid gray" padding="4">
            <Text>Men&apos;s Item 2</Text>
          </Box>
          <Box border="1px solid gray" padding="4">
            <Text>Men&apos;s Item 3</Text>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
}
