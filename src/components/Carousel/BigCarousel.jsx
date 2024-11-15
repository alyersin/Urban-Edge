"use client";
import { Box, Button, Flex, IconButton, Text } from "@chakra-ui/react";
import Slider from "react-slick";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { useState, useRef } from "react";

export default function BigCarousel({ images }) {
  const [slideIndex, setSlideIndex] = useState(0);
  const sliderRef = useRef(null);

  // Settings for react-slick
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
      width="100vw" // Full viewport width
      height="80vh" // Adjusted to 80% of viewport height
      mx="0"
      overflow="hidden" // Prevent overflow scrolling
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
              objectFit="contain" // Keep the full image visible without cropping or stretching
              mx="auto"
            />
            <Box
              position="absolute"
              bottom="20%"
              left="10%"
              color="white"
              textAlign="left"
              maxWidth="300px"
            >
              <Text fontSize="sm" mb={2}>
                {image.captionSmall}
              </Text>
              <Text fontSize="4xl" fontWeight="bold" mb={4}>
                {image.captionLarge}
              </Text>
              <Button colorScheme="whiteAlpha" variant="outline" size="lg">
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
