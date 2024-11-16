"use client";
import { Box, HStack, Image, IconButton } from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { useState } from "react";

export default function Slider({ items = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleImages = 3;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const getVisibleItems = () => {
    const end = currentIndex + visibleImages;
    if (end <= items.length) {
      return items.slice(currentIndex, end);
    } else {
      return [
        ...items.slice(currentIndex),
        ...items.slice(0, end - items.length),
      ];
    }
  };

  return (
    <Box position="relative" width="100%" overflow="hidden">
      {/* Image Container */}
      <HStack spacing={0} width="100%" justifyContent="center">
        {getVisibleItems().map((item, index) => (
          <Box
            key={index}
            position="relative"
            width={`${100 / visibleImages}%`}
            height="480px"
            px={2.5}
            borderRadius="md"
          >
            {/* Default Image */}
            <Image
              src={item.default}
              alt={item.alt}
              width="100%"
              height="100%"
              objectFit="cover"
              transition="opacity 0.3s ease"
              _hover={{ opacity: 0 }}
            />

            {/* Hover Image */}
            <Image
              src={item.hover}
              alt={`${item.alt} Hover`}
              position="absolute"
              top="0"
              left="0"
              width="100%"
              height="100%"
              objectFit="cover"
              opacity="0"
              transition="opacity 0.3s ease"
              _hover={{ opacity: 1 }}
            />
          </Box>
        ))}
      </HStack>

      {/* Left Arrow */}
      <IconButton
        icon={<ArrowBackIcon />}
        position="absolute"
        top="50%"
        left="10px"
        transform="translateY(-50%)"
        zIndex="10"
        onClick={handlePrev}
        aria-label="Previous Slide"
        bg="whiteAlpha.800"
        _hover={{ bg: "whiteAlpha.900" }}
        borderRadius="full"
        boxShadow="md"
      />

      {/* Right Arrow */}
      <IconButton
        icon={<ArrowForwardIcon />}
        position="absolute"
        top="50%"
        right="10px"
        transform="translateY(-50%)"
        zIndex="10"
        onClick={handleNext}
        aria-label="Next Slide"
        bg="whiteAlpha.800"
        _hover={{ bg: "whiteAlpha.900" }}
        borderRadius="full"
        boxShadow="md"
      />
    </Box>
  );
}
