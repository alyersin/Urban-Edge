"use client";
import { FaGoogle, FaApple, FaFacebook } from "react-icons/fa";
import {
  Button,
  Input,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  Checkbox,
  Text,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Tab,
  TabList,
  TabPanels,
  Tabs,
  VStack,
  Icon,
  TabPanel,
  InputGroup,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

export default function LoginModal({ isOpen, onClose }) {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => setShowPassword(!showPassword);

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent maxWidth="400px" padding="4">
        <ModalHeader textAlign="center">LOGIN FORM</ModalHeader>
        <ModalCloseButton />

        {/* PANELS SWITCH SIGN IN / I'M NEW HERE */}
        <ModalBody>
          <Tabs isFitted variant="enclosed">
            <TabList mb="4">
              <Tab fontWeight="bold">SIGN IN</Tab>
              <Tab fontWeight="bold">I'M NEW HERE</Tab>
            </TabList>

            <TabPanels>
              {/* SIGN IN PANEL */}
              <TabPanel>
                <VStack spacing="4">
                  <Input placeholder="Email address" variant="filled" />
                  <Input
                    placeholder="Password"
                    variant="filled"
                    type="password"
                  />
                  <Link
                    href="#"
                    color="blue.500"
                    fontSize="sm"
                    alignSelf="flex-start"
                  >
                    Forgot your password?
                  </Link>
                  <Button colorScheme="blackAlpha" width="full">
                    Sign In
                  </Button>
                  <Button variant="outline" width="full" isDisabled>
                    Continue With One-Time Code
                  </Button>
                  <Text fontSize="sm" color="gray.500">
                    OR
                  </Text>

                  {/* SOCIAL MEDIA LOGIN */}
                  <VStack spacing="2" width="full">
                    <Button
                      width="full"
                      variant="outline"
                      leftIcon={<Icon as={FaGoogle} />}
                    >
                      Continue with Google
                    </Button>
                    <Button
                      width="full"
                      variant="outline"
                      leftIcon={<Icon as={FaApple} />}
                    >
                      Continue With Apple
                    </Button>
                    <Button
                      width="full"
                      variant="outline"
                      leftIcon={<Icon as={FaFacebook} />}
                    >
                      Continue with Facebook
                    </Button>
                  </VStack>
                </VStack>
              </TabPanel>

              {/* I'M NEW HERE PANEL */}
              <TabPanel>
                <VStack spacing="4" align="stretch">
                  <Input placeholder="Name" variant="filled" />
                  <Input placeholder="Email address" variant="filled" />
                  <InputGroup>
                    <Input
                      placeholder="Password"
                      variant="filled"
                      type={showPassword ? "text" : "password"}
                    />
                    <InputRightElement width="4.5rem">
                      <IconButton
                        aria-label={
                          showPassword ? "Hide password" : "Show password"
                        }
                        icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                        onClick={toggleShowPassword}
                        variant="ghost"
                        size="sm"
                      />
                    </InputRightElement>
                  </InputGroup>

                  <InputGroup>
                    <Input
                      placeholder="Confirm password"
                      variant="filled"
                      type="password"
                    />
                  </InputGroup>

                  {/* Terms and Conditions */}
                  <Text fontSize="xs" color="gray.500">
                    By registering, you agree to our{" "}
                    <Link href="#" color="blue.500" isExternal>
                      Terms & Conditions
                    </Link>
                    ,{" "}
                    <Link href="#" color="blue.500" isExternal>
                      Privacy and Cookie Policy
                    </Link>
                    , and to join our loyalty programme.
                  </Text>

                  {/* Newsletter Signup */}
                  <Checkbox colorScheme="gray" size="sm">
                    Sign up and never miss out on exclusive member rewards,
                    tailored new arrivals and new launches. Unsubscribe at the
                    bottom of our emails.{" "}
                    <Link href="#" color="blue.500" isExternal>
                      Find out more
                    </Link>
                  </Checkbox>

                  <Button colorScheme="blackAlpha" width="full">
                    Register
                  </Button>
                  <Text fontSize="sm" color="gray.500">
                    OR
                  </Text>

                  {/* Social Media Registration Buttons */}
                  <VStack spacing="2" width="full">
                    <Button
                      width="full"
                      variant="outline"
                      leftIcon={<Icon as={FaGoogle} />}
                    >
                      Continue With Google
                    </Button>
                    <Button
                      width="full"
                      variant="outline"
                      leftIcon={<Icon as={FaApple} />}
                    >
                      Continue With Apple
                    </Button>
                    <Button
                      width="full"
                      variant="outline"
                      leftIcon={<Icon as={FaFacebook} />}
                    >
                      Continue With Facebook
                    </Button>
                  </VStack>
                </VStack>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
