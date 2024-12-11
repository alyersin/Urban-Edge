"use client";
import { useState } from "react";
import supabase from "../../utils/supabaseClient";
import { Box, Button, Input, VStack, Text } from "@chakra-ui/react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setMessage(`Error: ${error.message}`);
    } else {
      setMessage("Login successful!");
    }
  };

  return (
    <Box p={8}>
      <Text fontSize="2xl" mb={4}>
        Log In
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
        <Button colorScheme="blue" onClick={handleLogin}>
          Log In
        </Button>
        {message && <Text>{message}</Text>}
      </VStack>
    </Box>
  );
}
