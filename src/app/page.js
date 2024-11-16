import { Box, SimpleGrid, Link, Image } from "@chakra-ui/react";
import SmallCarousel from "@/components/Carousel/SmallCarousel.jsx";
import InfoCard from "@/components/Cards/InfoCard";
import { FaShoppingBag, FaQuestionCircle, FaComments } from "react-icons/fa";
import Slider from "@/components/Carousel/Slider";

const images = [
  { src: "/assets/small-carousel/mode-lane.png", alt: "mode-lane" },
  { src: "/assets/small-carousel/neon-vogue.png", alt: "neon-vogue" },
  { src: "/assets/small-carousel/nexis.png", alt: "nexis" },
  { src: "/assets/small-carousel/origo.png", alt: "origo" },
  { src: "/assets/small-carousel/veloria.png", alt: "veloria" },
  { src: "/assets/small-carousel/zyra.png", alt: "zyra" },
];

const sliderImages = [
  {
    default: "/assets/Slider/geaca1.avif",
    hover: "/assets/Slider/geaca2.avif",
    alt: "geaca 1",
  },
  {
    default: "/assets/Slider/geaca3.avif",
    hover: "/assets/Slider/geaca4.avif",
    alt: "geaca 2",
  },
  {
    default: "/assets/Slider/geaca5.avif",
    hover: "/assets/Slider/geaca6.avif",
    alt: "geaca 3",
  },
  {
    default: "/assets/Slider/geaca7.avif",
    hover: "/assets/Slider/geaca8.avif",
    alt: "geaca 4",
  },
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
      {/* Promo Image */}
      <Link>
        <Image
          src="/assets/homepage/adidas.jpg"
          alt="Adidas Promo"
          draggable="false"
        />
      </Link>

      {/* SmallCarousel */}
      <SmallCarousel items={images} />

      <Slider items={sliderImages} />

      {/* Information Cards */}
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
