"use client";
import { Box, Button, Flex, IconButton, Text } from "@chakra-ui/react";
import Slider from "react-slick";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

export default function BigCarousel({ images }) {
  const [slideIndex, setSlideIndex] = useState(0);
  const sliderRef = useRef(null);
  const router = useRouter(); // Next.js router for navigation

  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setSlideIndex(next),
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <Box
      position="relative"
      width="100vw"
      height="80vh"
      mx="0"
      overflow="hidden"
    >
      <Slider {...settings} ref={sliderRef}>
        {images.map((image, index) => (
          <Box key={index} position="relative" width="100%" height="100%">
            <Box
              as="img"
              src={image.src}
              alt={`carousel-image-${index}`}
              width="100%"
              height="100%"
              objectFit="cover"
              mx="auto"
              draggable="false"
            />
            <Box
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              color="white"
              textAlign="center"
              maxWidth="300px"
              zIndex="10"
            >
              <Text fontSize="sm" mb={2}>
                {image.captionSmall}
              </Text>
              <Text fontSize="4xl" fontWeight="bold" mb={4}>
                {image.captionLarge}
              </Text>
              <Button
                variant="outline"
                size="lg"
                fontSize="1rem"
                bg="white"
                color="black"
                outline="none"
                border="none"
                onClick={() => router.push(image.href || "#")}
              >
                {image.buttonText || "Explorează"}
              </Button>
            </Box>
          </Box>
        ))}
      </Slider>

      {/* Loading Bar Indicator */}
      <Flex
        justifyContent="center"
        position="absolute"
        bottom="0"
        left="50%"
        transform="translateX(-50%)"
        mb="10px"
      >
        {images.map((_, index) => (
          <Box
            key={index}
            width="30px"
            height="4px"
            mx="4px"
            borderRadius="md"
            bg={index === slideIndex ? "white" : "gray.400"}
            transition="background-color 0.3s ease"
          />
        ))}
      </Flex>

      {/* Custom Navigation Arrows */}
      <IconButton
        icon={<ArrowBackIcon />}
        position="absolute"
        top="50%"
        left="10px"
        transform="translateY(-50%)"
        zIndex="10"
        onClick={() => sliderRef.current?.slickPrev()}
        aria-label="Previous Slide"
      />
      <IconButton
        icon={<ArrowForwardIcon />}
        position="absolute"
        top="50%"
        right="10px"
        transform="translateY(-50%)"
        zIndex="10"
        onClick={() => sliderRef.current?.slickNext()}
        aria-label="Next Slide"
      />
    </Box>
  );
}
