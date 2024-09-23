import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
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
  Stack,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { CiSearch } from "react-icons/ci";
import CampaignCard from "../components/CampaignCard";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

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
            <Button>About us</Button>
          </ButtonGroup>
        </Center>
        <Flex></Flex>
      </div>

      <Box>
        <Center flexDirection="column">
          <Flex gap="7px" mt="60px" mb="30px" fontSize="32px">
            <Text color="black" fontWeight="bold">
              Open
            </Text>{" "}
            <Text color="#13ADB7">Donations</Text>
          </Flex>
          <Box
            border="1px solid"
            display="flex"
            alignItems="center"
            rounded="full"
            dropShadow="2"
          >
            <Input
              border="0"
              width="500px"
              rounded="full"
              placeholder="Find donations"
            />
            <CiSearch size="25" />
          </Box>

          <Stack direction="row" spacing={5} align="center" mt={7}>
            <Button colorScheme="teal" variant="solid" rounded="full">
              All
            </Button>
            <Button colorScheme="teal" variant="outline" rounded="full">
              Disaster
            </Button>
            <Button colorScheme="teal" variant="outline" rounded="full">
              Children
            </Button>
            <Button colorScheme="teal" variant="outline" rounded="full">
              Food Crisis
            </Button>
            <Button colorScheme="teal" variant="outline" rounded="full">
              Health
            </Button>
            <Button colorScheme="teal" variant="outline" rounded="full">
              Education
            </Button>
            <Button colorScheme="teal" variant="outline" rounded="full">
              Homeless
            </Button>
            <Button colorScheme="teal" variant="outline" rounded="full">
              Animal
            </Button>
            <Button colorScheme="teal" variant="outline" rounded="full">
              Pandemic
            </Button>
            <Button colorScheme="teal" variant="outline" rounded="full">
              War Crisis
            </Button>
          </Stack>
        </Center>

        <Box>
          <Grid
            templateColumns={{ lg: "repeat(4, 1fr)", md: "repeat(2, 1fr)" }}
            rowGap={10}
            pl={20}
            pt={10}
            pr={20}
          >
            <CampaignCard />
            <CampaignCard />
            <CampaignCard />
            <CampaignCard />
            <CampaignCard />
            <CampaignCard />
          </Grid>
        </Box>

        <Box p={20} pt={10} display="flex" gap={20} alignItems='center' mt={6}>
          <Flex align="center" gap="20px" color="#13ADB7" >
            <MdKeyboardArrowLeft />
            <Text
              rounded="full"
              width={6}
              backgroundColor="#13ADB7"
              color="white"
              display="flex"
              justifyContent="center"
            >
              1
            </Text>
            <Text>2</Text>
            <Text>3</Text>
            <Text>4</Text>
            <Text>5</Text>
            <Text>6</Text>
            <Text>7</Text>
            <MdKeyboardArrowRight />
          </Flex>

          <Box>
            <Text color="#13ADB7">View All</Text>
          </Box>
        </Box>
      </Box>

      <Box p={20} pt={3}>
        <Box>
          <Flex justify="space-between" align="center">
            <Box>
              <Text fontSize="sm">MODERN CROWDFUNDING PLATFORM</Text>
              <Text fontSize="5xl" fontWeight="semibold" w="700px">
                <Highlight
                  query={["easily", "quickly", "transparently"]}
                  styles={{ color: "#13ADB7" }}
                >
                  Distribute aid easily, quickly, and transparently.
                </Highlight>
              </Text>
            </Box>

            <Box>
              <Stat mt={5}>
                <StatLabel>Total amount donated</StatLabel>
                <StatNumber color="#13ADB7">$5,25,000</StatNumber>
                <StatHelpText>Feb 12 - Feb 28</StatHelpText>
              </Stat>
            </Box>
          </Flex>

          <Box mt={7}>
            <Text fontSize="lg" fontWeight="semibold" mb={5}>
              Frequently asked questions
            </Text>
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left" color='#13ADB7'>
                      What is blockchain crowdfunding?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                Blockchain crowdfunding utilizes blockchain technology to raise funds for 
                projects, startups, or causes, ensuring transparency and security in 
                financial transactions.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left" color='#13ADB7'>
                      How does blockchain crowdfunding work?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Projects launch campaigns on our platform, detailing their funding goals. 
                  Backers can contribute using cryptocurrencies, with all transactions securely 
                  recorded on the blockchain.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left" color='#13ADB7'>
                    What types of projects can I fund?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                You can fund a variety of projects, including startups, charitable initiatives, 
                and creative endeavors, depending on our platform's focus.
                </AccordionPanel>
              </AccordionItem>

            </Accordion>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Homepage;
