import Footer from "@/components/Footer/Footer.jsx";
import Header from "@/components/Header/Header.jsx";
import LoginModal from "@/components/LoginModal/LoginModal.jsx";
import { Box, Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <div>
      {/* HEADER */}
      <Header />
      {/* MAIN */}
      <Box>
        <LoginModal />
        <Heading>Main content</Heading>
      </Box>
      {/* FOOTER */}
      <Footer />
    </div>
  );
}
