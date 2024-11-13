import { ChakraProvider, Box } from "@chakra-ui/react";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          <Box minHeight="100vh" display="flex" flexDirection="column">
            <Header />
            <Box
              as="main"
              flex="1"
              width="100%"
              maxWidth="1280px"
              mx="auto"
              px={4}
              py={8}
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
