import React from 'react'
import { Box, Text, Stack, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      bg="gray.800"
      color="white"
      py={4}
      px={6}
      textAlign="center"
    >
      <Stack spacing={2}>
        <Text fontSize="sm">
          © {new Date().getFullYear()} Crowdfund. All rights reserved.
        </Text>
        <Stack direction="row" spacing={4} justify="center">
          <Link href="/privacy" color="teal.300">Privacy Policy</Link>
          <Link href="/terms" color="teal.300">Terms of Service</Link>
          <Link href="/contact" color="teal.300">Contact Us</Link>
        </Stack>
      </Stack>
    </Box>
  );
}


export default Footer