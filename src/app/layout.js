import { ChakraProvider, Box } from "@chakra-ui/react";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ overflowX: "hidden", margin: 0 }}>
        {" "}
        {/* Prevents horizontal scrolling */}
        <ChakraProvider>
          <Box minHeight="100vh" display="flex" flexDirection="column">
            <Header />
            <Box
              as="main"
              flex="1"
              width="100vw" // Full viewport width to avoid restricting the carousel
              mx="0" // Remove horizontal margin
              px={0} // Remove padding to avoid overflow
              py={0}
              overflowX="hidden" // Prevent any horizontal overflow
            >
              {children} {/* Page-specific content goes here */}
            </Box>
            <Footer />
          </Box>
        </ChakraProvider>
      </body>
    </html>
  );
}
