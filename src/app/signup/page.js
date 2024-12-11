"use client";
import { useState } from "react";
import supabase from "../../utils/supabaseClient";
import { Box, Button, Input, VStack, Text } from "@chakra-ui/react";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignUp = async () => {
    const { error } = await supabase.auth.signUp({ email, password });

    if (error) {
      setMessage(`Error: ${error.message}`);
    } else {
      setMessage("Sign-up successful! Check your email for confirmation.");
    }
  };

  return (
    <Box p={8}>
      <Text fontSize="2xl" mb={4}>
        Sign Up
      </Text>
      <VStack spacing={4}>
        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button colorScheme="blue" onClick={handleSignUp}>
          Sign Up
        </Button>
        {message && <Text>{message}</Text>}
      </VStack>
    </Box>
  );
}
