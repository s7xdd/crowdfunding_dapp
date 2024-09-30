import {
  Badge,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  GridItem,
  Heading,
  Image,
  Progress,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaClock } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import StatusBadge from "./StatusBadge";

const CampaignCard = ({title, smallDescription, donations, amount, totalAmount, timeLeft, value}) => {
  return (
    <GridItem w="100%">
      <Card maxW="sm">
        <CardBody>
          <NavLink to={`/campaigns/${title}`}>
            <Image
              src="/th.jpg"
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
          </NavLink>
          <Stack mt="6" spacing="3">
            <Flex justify="space-between">
              <Text>{donations} donations</Text>
              <StatusBadge status='active'/>
            </Flex>
            <Heading size="md">{title}</Heading>
            <Text>
              {smallDescription}
            </Text>
            <Flex align="center" gap={2}>
              <Text color="blue.600" fontSize="lg" fontWeight="bold">
                {amount}
              </Text>
              <Text fontSize="sm">ETH funded | Total : {totalAmount} ETH</Text>
            </Flex>

            <Box>
              <Flex align="center">
                <Progress value={value} flex="1" mr={3}/>
                <Text>{value}%</Text>
              </Flex>
            </Box>

            <Box>
              <Flex gap={3} align="center">
                <FaClock />
                <Text>{timeLeft} days left</Text>
              </Flex>
            </Box>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" backgroundColor='#13ADB7' color='white'>
              Read more
            </Button>
            <Button variant="ghost" color='#13ADB7'>
              Fund
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </GridItem>
  );
};

export default CampaignCard;
