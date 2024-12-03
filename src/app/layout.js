import { ChakraProvider, Box } from "@chakra-ui/react";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          overflowX: "hidden",
          margin: 0,
          boxSizing: "border-box",
          alignItems: "center",
        }}
      >
        {" "}
        <ChakraProvider>
          <Box minHeight="100vh" display="flex" flexDirection="column">
            <Header />
            <Box
              as="main"
              flex="1"
              width="100vw"
              mx="0"
              px={0}
              py={0}
              overflowX="hidden"
            >
              {children}
            </Box>
            <Footer />
          </Box>
        </ChakraProvider>
      </body>
    </html>
  );
}
