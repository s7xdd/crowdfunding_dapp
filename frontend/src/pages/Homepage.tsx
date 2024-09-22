import { Box, Grid, Heading, Highlight, Text } from "@chakra-ui/react";
import React from "react";

import CampaignCard from "../components/CampaignCard";

const Homepage = () => {
  return (
    <Box p={10}>
      <Heading lineHeight="tall" fontSize="4xl" mt={5}>
        <Highlight
          query="Crowdfund."
          styles={{ px: "2", py: "1", rounded: "full", bg: "red.100" }}
        >
          Welcome to Crowdfund.
        </Highlight>
      </Heading>
      <Text fontSize="lg" pt={2}>
        Made for the community by the community!
      </Text>

      <Heading mt={14} fontSize="2xl">
        Explore campaigns
      </Heading>

      <Text mt={3}>Top 6 campaigns</Text>

      <Grid
        templateColumns={{ lg: "repeat(4, 1fr)", md: "repeat(2, 1fr)" }}
        gap={6}
        mt={7}
      >
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
      </Grid>
    </Box>
  );
};

export default Homepage;
