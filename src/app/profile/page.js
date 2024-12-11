"use client";
import { useEffect, useState } from "react";
import supabase from "../../utils/supabaseClient";
import { useRouter } from "next/navigation";
import { Box, Text } from "@chakra-ui/react";

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      const { data } = await supabase.auth.getSession();

      if (!data.session) {
        router.push("/login");
      } else {
        setUser(data.session.user);
      }
    };

    checkAuth();
  }, [router]);

  return (
    <Box p={8}>
      <Text fontSize="2xl">Welcome to your profile</Text>
      {user && <Text>Email: {user.email}</Text>}
    </Box>
  );
}
