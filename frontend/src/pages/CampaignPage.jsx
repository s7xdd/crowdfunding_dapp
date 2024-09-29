import {
  Badge,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Progress,
  Stack,
  Text,
  Flex,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Donate from "./DonatePage";
import { Link } from "react-router-dom";

const CampaignPage = () => {
  const [owner, setOwner] = useState(false)

  return (
    <Box padding={14}>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          objectFit="cover"
          src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
          alt="Caffe Latte"
          h={850}
          w={800}
        />

        <Stack>
          <CardBody p={12}>
            <Heading size="3xl">Tsunami disaster</Heading>

            <Text py="2" mt={5}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. A tempora possimus nisi, exercitationem impedit esse id ab asperiores porro, laboriosam nostrum unde. Eligendi nisi culpa consequatur rerum! Illum, quae facere.
              Doloremque dignissimos veniam, impedit vero et ullam quo id incidunt nemo cum eligendi. Amet nihil fugiat alias minima, maxime magni? Amet, quia dolor vitae aperiam eos accusantium. Obcaecati, velit fugiat?
              Facilis temporibus quod nostrum reprehenderit dolorum repellendus neque, id odio, distinctio similique laborum fugit rem rerum eos excepturi adipisci odit repudiandae quae, cupiditate aperiam. Magnam quia ullam quisquam ea explicabo?
              Eos vitae iusto sapiente sint ipsa sequi! Pariatur ab sunt officia, molestiae quia deserunt aperiam quas earum recusandae explicabo molestias? Quam perspiciatis similique ducimus, velit illum esse eveniet cumque! Repellat?
            </Text>

            <Box mt={28}>
              <Flex justify='space-between' align='center'>
              <Text fontSize='4xl' fontWeight='bold' mb={3}>$2,45,000</Text>
              <Badge colorScheme='green' rounded='full' w='60px' h='30px' display='flex' justifyContent='center' alignItems='center'>Active</Badge>
              </Flex>
              <Flex align="center">
                <Progress value={60} rounded='full' h={3} flex="1" mr={3}/>
                <Text fontWeight='bold'>60%</Text>
              </Flex>
              <Text>80% of $3,00,000</Text>
            </Box>

            <Flex justify='space-between' p={10} align='center'>
              <Box display='flex' gap={12}>
                <Flex flexDir='column' align='center'>
                  <Text fontSize='3xl' fontWeight='semibold'>20</Text>
                  <Text>days left</Text>
                </Flex>
                <Flex flexDir='column' align='center'>
                  <Text fontSize='3xl' fontWeight='semibold'>1500</Text>
                  <Text>backers</Text>
                </Flex>
              </Box>

              <Box>
                {owner ? (
                  <Link to={`/campaigns/edit/livingroomsofa`}>
                    <Button colorScheme='teal' variant='solid'>Edit Campaign</Button>
                  </Link>
                ) : (
                  <Link to={`/campaigns/donate/livingroomsofa`}>
                    <Button colorScheme='teal' variant='solid'>Contribute</Button>
                  </Link>
                )}
              </Box>
            </Flex>
          


          </CardBody>

        </Stack>
      </Card>
    </Box>
  );
};

export default CampaignPage;
