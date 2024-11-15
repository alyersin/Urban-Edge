import { Box, SimpleGrid } from "@chakra-ui/react";
import SmallCarousel from "@/components/Carousel/SmallCarousel.jsx";
import InfoCard from "@/components/InfoCard/InfoCard";
import { FaShoppingBag, FaQuestionCircle, FaComments } from "react-icons/fa";

const images = [
  { src: "/assets/womenswear.jpg", alt: "Womenswear" },
  { src: "/assets/menswear.jpg", alt: "Menswear" },
  { src: "/assets/kidswear.jpg", alt: "Kidswear" },
  { src: "/assets/womenswear.jpg", alt: "Womenswear" },
  { src: "/assets/menswear.jpg", alt: "Menswear" },
  { src: "/assets/kidswear.jpg", alt: "Kidswear" },
];

export default function Home() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="30px"
      alignItems="center"
      justifyContent="center"
      maxWidth="1280px"
      mx="auto"
      textAlign="center"
      p={4}
    >
      <SmallCarousel items={images} />

      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        spacing={6}
        justifyItems="center"
      >
        <InfoCard
          href="/Pages/Information/How-to-shop/"
          icon={<FaShoppingBag />}
          title="HOW TO SHOP"
          description="Your guide to shopping and placing orders"
        />
        <InfoCard
          href="/Pages/Information/Faqs/"
          icon={<FaQuestionCircle />}
          title="FAQS"
          description="Your questions answered"
        />
        <InfoCard
          href="/Pages/Information/Need-help/"
          icon={<FaComments />}
          title="NEED HELP?"
          description="Contact our global Customer Service team"
        />
      </SimpleGrid>
    </Box>
  );
}
