"use client";
import { Box, HStack, Image, Text, IconButton } from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { FaRegHeart, FaHeart } from "react-icons/fa"; // Import empty and full heart icons
import { useState } from "react";

export default function Slider({ items = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [favorites, setFavorites] = useState({}); // Track favorite state for each item
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

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
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
      <HStack spacing={6} width="100%" justifyContent="center" margin="auto">
        {getVisibleItems().map((item, index) => (
          <Box
            key={index}
            position="relative"
            padding={2}
            width={`${100 / visibleImages - 2}%`}
            height="520px"
            borderRadius="md"
            cursor="pointer"
            overflow="hidden"
            bg="white"
            _hover={{
              "& .hoverImage": { opacity: 1 },
              "& .defaultImage": { opacity: 0 },
              border: "1px solid",
              borderColor: "gray.300",
            }}
            transition="opacity 0.3s ease"
          >
            {/* Heart Icon */}
            <IconButton
              icon={favorites[item.id] ? <FaHeart /> : <FaRegHeart />}
              color={favorites[item.id] ? "black.500" : "gray.500"}
              position="absolute"
              top="14px"
              right="8px"
              zIndex="10"
              aria-label="Toggle Favorite"
              variant="unstyled" // Removes any default button styles
              onClick={() => toggleFavorite(item.id)}
            />

            {/* Image Wrapper */}
            <Box width="100%" height="85%" position="relative">
              {/* Default Image */}
              <Image
                className="defaultImage"
                src={item.default}
                alt={item.alt}
                position="absolute"
                top="0"
                left="0"
                width="100%"
                height="100%"
                objectFit="cover"
                opacity="1"
                transition="opacity 0.3s ease"
              />

              {/* Hover Image */}
              <Image
                className="hoverImage"
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
              />
            </Box>

            {/* Text Section */}
            <Box
              // border="1px solid black"
              position="absolute"
              // bottom="0"
              fontSize="xs"
              width="96%"
              bg="white"
              textAlign="center"
              p={3}
              zIndex="10"
            >
              <Text fontWeight="bold">{item.brand}</Text>
              <Text color="gray.600">{item.price} €</Text>
            </Box>
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
