import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Flex,
  Grid,
  Heading,
  Highlight,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";

import CampaignCard from "../components/CampaignCard";

const Homepage = () => {
  return (
    <div>
      <div>
        <Center
          backgroundImage="/Banner.jpg"
          h="93vh"
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          flexDirection="column"
          gap="30px"
        >
          <Box
            fontSize="80px"
            display="flex"
            flexDirection="column"
            alignItems="center"
            fontWeight="bold"
          >
            <Text color="white" display="flex" gap="4">
              <Text color="#13ADB7">Happiness</Text> comes from{" "}
            </Text>
            <Text color="#13ADB7">your action.</Text>
            <Text fontSize="20px" color="white" mt="5">
              Be a part of the breakthrough and make someone’s dream come true.
            </Text>
          </Box>

          <ButtonGroup>
            <Button colorScheme="blue">Donate now</Button>
            <Button>Watch</Button>
          </ButtonGroup>
        </Center>
        <Flex></Flex>
      </div>

      <Box>
        <Center>
          <Flex gap="7px" mt="60px" mb="30px" fontSize="32px">
            <Text color="black" fontWeight="bold">
              Open
            </Text>{" "}
            <Text color="#13ADB7">Donations</Text>
          </Flex>
          <Input placeholder="Basic usage" />
        </Center>

        <Box>
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
      </Box>
    </div>
  );
};

export default Homepage;
