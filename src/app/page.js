import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import DepartmentCard from "@/components/DepartmentCard/DepartmentCard";

export default function Home() {
  return (
    <Box textAlign="center">
      <Heading mb={8} fontSize="1.6rem">
        Choose a department
      </Heading>
      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        spacing={6}
        justifyItems="center"
      >
        <DepartmentCard
          image="/assets/womenswear.jpg"
          title="WOMENSWEAR"
          link="/Pages/Women"
        />
        <DepartmentCard
          image="/assets/menswear.jpg"
          title="MENSWEAR"
          link="/Pages/Men"
        />
        <DepartmentCard
          image="/assets/kidswear.jpg"
          title="KIDSWEAR"
          link="/Pages/Kids"
        />
      </SimpleGrid>
    </Box>
  );
}
