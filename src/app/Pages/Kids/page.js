import Header from "@/components/Header/Header.jsx";
import { Button, Link } from "@chakra-ui/react";
import React from "react";

export default function page() {
  return (
    <div>
      <Header />
      Kids
      <Link href="/">
        <Button>GO BACK</Button>
      </Link>
    </div>
  );
}
