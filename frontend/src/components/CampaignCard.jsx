import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Flex, GridItem, Heading, Image, Progress, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { FaClock } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const CampaignCard = () => {
  return (
    <GridItem w="100%">
          <Card maxW="sm">
            <CardBody>
              <NavLink to={`/campaigns/livingroomsofa`}>
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
                />
                </NavLink>
              <Stack mt="6" spacing="3">
                <Text backgroundColor='lightgreen' width={70} rounded='full' align='center'>Active</Text>
                <Heading size="md">Living room Sofa</Heading>
                <Text>
                  This sofa is perfect for modern tropical spaces, baroque
                  inspired spaces.
                </Text>
                <Flex align="center" gap={2}>
                  <Text color="blue.600" fontSize="lg" fontWeight="bold">
                    0.1
                  </Text>
                  <Text fontSize="sm">ETH funded | Total : 10 ETH</Text>
                </Flex>

                <Box>
                  <Flex align="center">
                    <Progress value={80} flex="1" mr={3} />
                    <Text>80%</Text>
                  </Flex>
                </Box>

                <Box>
                    <Flex gap={3} align='center'>
                    <FaClock />
                    <Text>
                         2 days left
                    </Text>
                    </Flex>
                </Box>
                
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="blue">
                  Read more
                </Button>
                <Button variant="ghost" colorScheme="blue">
                  Fund
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </GridItem>
  )
}

export default CampaignCard