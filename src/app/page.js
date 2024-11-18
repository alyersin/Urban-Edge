import { Box, SimpleGrid, Link, Image, Text, Heading } from "@chakra-ui/react";
import { FaShoppingBag, FaQuestionCircle, FaComments } from "react-icons/fa";
import SmallCarousel from "@/components/Carousel/SmallCarousel.jsx";
import InfoCard from "@/components/Cards/InfoCard";
import Slider from "@/components/Carousel/Slider";
import TermsBar from "@/components/TermsBar/TermsBar";

const images = [
  { src: "/assets/small-carousel/mode-lane.png", alt: "mode-lane" },
  { src: "/assets/small-carousel/neon-vogue.png", alt: "neon-vogue" },
  { src: "/assets/small-carousel/nexis.png", alt: "nexis" },
  { src: "/assets/small-carousel/origo.png", alt: "origo" },
  { src: "/assets/small-carousel/veloria.png", alt: "veloria" },
  { src: "/assets/small-carousel/zyra.png", alt: "zyra" },
];

const winterOutfits = [
  {
    default: "/assets/Slider/geaca1.avif",
    hover: "/assets/Slider/geaca2.avif",
    alt: "geaca 1",
    brand: "BRAND 1",
    price: "149",
  },
  {
    default: "/assets/Slider/geaca3.avif",
    hover: "/assets/Slider/geaca4.avif",
    alt: "geaca 2",
    brand: "BRAND 2",
    price: "119",
  },
  {
    default: "/assets/Slider/geaca5.avif",
    hover: "/assets/Slider/geaca6.avif",
    alt: "geaca 3",
    brand: "BRAND 3",
    price: "64",
  },
  {
    default: "/assets/Slider/geaca7.avif",
    hover: "/assets/Slider/geaca8.avif",
    alt: "geaca 4",
    brand: "BRAND 4",
    price: "89",
  },
];

const trendingImages = [
  {
    default: "/assets/Slider/trending1.avif",
    hover: "/assets/Slider/trending2.avif",
    alt: "trending 1",
    brand: "BRAND 2",
    price: "38",
  },
  {
    default: "/assets/Slider/trending3.avif",
    hover: "/assets/Slider/trending4.jpg",
    alt: "trending 2",
    brand: "BRAND 2",
    price: "69",
  },
  {
    default: "/assets/Slider/trending5.avif",
    hover: "/assets/Slider/trending6.avif",
    alt: "trending 3",
    brand: "BRAND 2",
    price: "98",
  },
  {
    default: "/assets/Slider/trending7.avif",
    hover: "/assets/Slider/trending8.avif",
    alt: "trending 4",
    brand: "BRAND 2",
    price: "124",
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
      {/* PROMO */}
      <Link>
        <Image
          src="/assets/homepage/adidas.avif"
          alt="Adidas Promo"
          draggable="false"
        />
      </Link>
      {/* SmallCarousel */}
      <SmallCarousel items={images} />

      <Heading size="md" fontWeight="medium">
        Winter outfits
      </Heading>

      <Slider items={winterOutfits} />

      <Heading size="md" fontWeight="medium">
        Autumn Sales!
      </Heading>

      {/* Sale Promo with SALE 20% Text */}
      <Box
        position="relative"
        width="100%"
        textAlign="center"
        padding="0 0 40px 0"
      >
        <Link>
          {/* Sale Image */}
          <Image
            src="/assets/homepage/sale.jpg"
            alt="Sale Promo"
            draggable="false"
          />

          {/* Sale Text Overlay */}
          <Text
            position="absolute"
            top="10px"
            left="10px"
            bg="red.500"
            color="white"
            fontWeight="bold"
            fontSize="lg"
            px={3}
            py={2}
            borderRadius="md"
            boxShadow="md"
          >
            SALE 20%
          </Text>
        </Link>
      </Box>

      <Heading size="md" fontWeight="medium">
        Trending
      </Heading>

      <Slider items={trendingImages} />

      <TermsBar
        items={[
          "FREE SHIPPING WORLDWIDE",
          "EASY RETURNS",
          "CUSTOMER SUPPORT 24/7",
        ]}
        bg="#FFEBB7"
        x
        color="black"
        height="74px"
        fontSize="0.7rem"
      />

      {/* Information Cards */}
      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        spacing={10}
        justifyItems="center"
        paddingY={8}
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
