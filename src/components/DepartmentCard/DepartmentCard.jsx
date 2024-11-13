import { Box, Image, Text, Link } from "@chakra-ui/react";

export default function DepartmentCard({ image, title, link }) {
  return (
    <Link href={link} style={{ textDecoration: "none" }}>
      <Box
        position="relative"
        width="100%"
        maxWidth="320px"
        height="400px"
        overflow="hidden"
        borderRadius="lg"
        boxShadow="md"
        _hover={{ transform: "scale(1.05)", transition: "all 0.3s ease" }}
      >
        <Image
          src={image}
          alt={title}
          width="100%"
          height="100%"
          objectFit="cover"
        />
        <Box
          position="absolute"
          bottom="0"
          width="100%"
          textAlign="center"
          bg="rgba(0, 0, 0, 0.5)"
          color="white"
          py={2}
        >
          <Text fontSize="xl" fontWeight="bold">
            {title}
          </Text>
        </Box>
      </Box>
    </Link>
  );
}
