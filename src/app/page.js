import { Box, Heading, SimpleGrid, VStack } from "@chakra-ui/react";
import DepartmentCard from "@/components/DepartmentCard/DepartmentCard";
import InfoCard from "@/components/InfoCard/InfoCard";
import { FaShoppingBag, FaQuestionCircle, FaComments } from "react-icons/fa";

export default function Home() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="30px"
      alignItems="center"
      alignContent="center"
      justifyContent="center"
      // minHeight="100vh"
      maxWidth="1280px"
      mx="auto"
      textAlign="center"
      p={4}
    >
      <Heading mb={8} fontSize="1.6rem" fontWeight="500" opacity="70%">
        Choose a department
      </Heading>

      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        spacing={6}
        justifyItems="center"
      >
        {/* Column 1 */}
        <VStack spacing={40}>
          <DepartmentCard
            image="/assets/womenswear.jpg"
            title="WOMENSWEAR"
            link="/Pages/Women"
          />
          <InfoCard
            href="/Pages/Information/How-to-shop/"
            icon={<FaShoppingBag />}
            title="HOW TO SHOP"
            description="Your guide to shopping and placing orders"
          />
        </VStack>

        {/* Column 2 */}
        <VStack spacing={40}>
          <DepartmentCard
            image="/assets/menswear.jpg"
            title="MENSWEAR"
            link="/Pages/Men"
          />
          <InfoCard
            href="/Pages/Information/Faqs/"
            icon={<FaQuestionCircle />}
            title="FAQS"
            description="Your questions answered"
          />
        </VStack>

        {/* Column 3 */}
        <VStack spacing={40}>
          <DepartmentCard
            image="/assets/kidswear.jpg"
            title="KIDSWEAR"
            link="/Pages/Kids"
          />
          <InfoCard
            href="/Pages/Information/Need-help/"
            icon={<FaComments />}
            title="NEED HELP?"
            description="Contact our global Customer Service team"
          />
        </VStack>
      </SimpleGrid>
    </Box>
  );
}
