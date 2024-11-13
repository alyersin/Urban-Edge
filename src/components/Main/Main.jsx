import React from "react";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import DepartmentCard from "@/components/DepartmentCard/DepartmentCard";

export default function Main() {
  return (
    <div>
      <Heading mb={8}>Choose a department</Heading>
      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        spacing={6}
        justifyItems="center"
      >
        <DepartmentCard
          image="/path/to/womenswear.jpg"
          title="WOMENSWEAR"
          link="/Pages/Women"
        />
        <DepartmentCard
          image="/path/to/menswear.jpg"
          title="MENSWEAR"
          link="/Pages/Men"
        />
        <DepartmentCard
          image="/path/to/kidswear.jpg"
          title="KIDSWEAR"
          link="/Pages/Kids"
        />
      </SimpleGrid>
    </div>
  );
}
