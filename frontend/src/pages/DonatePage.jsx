import {
  Alert,
  AlertIcon,
  Badge,
  Box,
  Button,
  Checkbox,
  Divider,
  Flex,
  Progress,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import StatusBadge from "../components/StatusBadge";
import { FaExclamationTriangle } from "react-icons/fa";

const DonatePage = () => {
  const [owner, setOwner] = useState(true);
  const [title, setTitle] = useState("Distribution of covid vaccines");
  return (
    <Flex h="900px" p={7} justify="center" gap={16} mt={10}>
      <Box>
        <Flex>
          <Text fontSize="4xl" lineHeight="1.2">
            {title}{" "}
          </Text>
          <StatusBadge status="active" />
        </Flex>
        <Text mt={6} fontWeight="semibold">
          Contribution Details
        </Text>
        <Flex flexDir="column" p={5} gap={5}>
          <Box>
            <Text>Minimum Contribution amount</Text>
            <Text fontSize="2xl">0.001 ETH</Text>
          </Box>

          <Box>
            <Text>Goal</Text>
            <Text fontSize="2xl">0.01 ETH</Text>
          </Box>

          <Box>
            <Text>Wallet Address of FundRaier</Text>
            <Text fontSize="2xl">0xA435BSN233532435B12214N23F</Text>
          </Box>

          <Box>
            <Text>Contributions are accepted till (Deadline)</Text>
            <Text fontSize="2xl">Tue Nov 29 2024 14:45:00 GMT</Text>
          </Box>
        </Flex>

        {owner && (
          <>
            <Text fontWeight="bold" mt={3}>
              Danger Zone
            </Text>
            <Box
              backgroundColor="pink"
              rounded="10px"
              p={5}
              display="flex"
              alignItems="center"
              mt={5}
            >
              <Flex flexDir="column">
                <Text fontWeight="bold">Quit & Refund</Text>
                <Text fontWeight="semibold" mb={3}>
                  Once you end a campaign, there is no going back. Please be
                  Certain
                </Text>
              </Flex>
              <Button backgroundColor="red" color="white" ml={5} h={14} w={32}>
                Abort <br /> Campaign
              </Button>
            </Box>
          </>
        )}
      </Box>

      <Divider orientation="vertical" />

      <Box p="20px">
        <Text fontWeight="semibold">Current status of campaign</Text>
        <Box backgroundColor="yellow" p={5} rounded="10px" mt={3}>
          <Text fontSize="2xl" fontWeight="semibold">
            Campaign balance
          </Text>
          <Text>Amount stored in smart contract</Text>
          <Box>
            <Flex align="center">
              <Progress value={60} flex="1" mr={3} rounded="10px" w="500px" />
              <Text>60%</Text>
            </Flex>
            <Text>100 ETH funded by 1200 backers.</Text>
          </Box>
        </Box>
        <Text mt={5} fontWeight="semibold">
          Withdraw
        </Text>
        <Box Box backgroundColor="#ffcbb9" p={5} rounded="10px" mt={3}>
          <Alert status="info">
            <AlertIcon />
            To withdraw raised funds, campaign has to be ended.
          </Alert>
          <Alert status="warning" mt={2}>
            <Checkbox size="md" colorScheme="orange" border='gray'>
              I/We understand that, once campaign has ended, it cannot be reversed.
            </Checkbox>
          </Alert>
          <Button colorScheme='red' w='full' mt={3}>END CAMPAIGN & WITHDRAW</Button>
        </Box>
      </Box>
    </Flex>
  );
};

export default DonatePage;
