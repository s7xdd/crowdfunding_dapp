import {
  Alert,
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertIcon,
  Badge,
  Box,
  Button,
  Checkbox,
  Divider,
  Flex,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Progress,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import StatusBadge from "../components/StatusBadge";
import { FaExclamationTriangle } from "react-icons/fa";

const DonatePage = () => {
  const { isOpen: isAbortOpen, onOpen: onAbortOpen, onClose: onAbortClose } = useDisclosure();
  const { isOpen: isAnotherAlertOpen, onOpen: onAnotherAlertOpen, onClose: onAnotherAlertClose } = useDisclosure();
  const cancelRef = React.useRef();
  const [owner, setOwner] = useState(false);
  const [title, setTitle] = useState("Distribution of covid vaccines");
  const [wallet, setWallet] = useState(true);
  const [donationStatus, setDonationStatus] = useState(false);
  const [active, setActive] = useState(true);

  return (
    <Flex
      h="900px"
      p={7}
      justify="center"
      justifyContent="space-evenly"
      mt={10}
    >
      <Box>
        <Flex gap="50px">
          <Text fontSize="4xl" lineHeight="1.2">
            {title}{" "}
          </Text>
          {active ? (
            <StatusBadge status="active" />
          ) : (
            <StatusBadge status="expired" />
          )}
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

        {owner && active && (
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
              <Button colorScheme="red" onClick={onAbortOpen} ml={5} h={14} w={32}>
                Abort <br /> Campaign
              </Button>

              <AlertDialog
                isOpen={isAbortOpen}
                leastDestructiveRef={cancelRef}
                onClose={onAbortClose}
              >
                <AlertDialogOverlay>
                  <AlertDialogContent>
                    <AlertDialogHeader fontSize="lg" fontWeight="bold">
                      Abort Campaign
                    </AlertDialogHeader>

                    <AlertDialogBody>
                      <Text fontSize="lg">
                        Why would you like to abort campaign?
                      </Text>
                      <Input mt={3} />
                      <Text mt={2}>
                        The reason will be provided in campaign page to notify
                        viewers and backers
                      </Text>
                    </AlertDialogBody>

                    <AlertDialogFooter
                      display="flex"
                      flexDirection="column"
                      gap={3}
                    >
                      <Button colorScheme="red" onClick={onAbortClose} w="full">
                        ABORT CAMPAIGN
                      </Button>
                      <Button ref={cancelRef} onClick={onAbortClose} w="full">
                        Cancel
                      </Button>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialogOverlay>
              </AlertDialog>
            </Box>
          </>
        )}
      </Box>

      <Divider orientation="vertical" />

      <Box p="20px">
        <Text fontWeight="semibold">Current status of campaign</Text>
        <Box backgroundColor="yellow" p={7} rounded="10px" mt={3}>
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
        {owner ? (
          active && (
            <>
            <Text mt={5} fontWeight="semibold">
              Withdraw
            </Text>
            <Box backgroundColor="#ffcbb9" p={5} rounded="10px" mt={3}>
              <Text fontSize="3xl" fontWeight="semibold">
                Withdraw Raised Funds
              </Text>
              <Alert status="info" rounded="5px" mt={4}>
                <AlertIcon />
                To withdraw raised funds, campaign has to be ended.
              </Alert>
              <Alert status="warning" mt={2} rounded="5px">
                <Checkbox size="md" colorScheme="orange" border="gray">
                  I/We understand that, once campaign has ended, it cannot be
                  reversed.
                </Checkbox>
              </Alert>
              <Button colorScheme="red" w="full" mt={3} onClick={onAnotherAlertOpen}>
                END CAMPAIGN & WITHDRAW
              </Button>

              <AlertDialog
                isOpen={isAnotherAlertOpen}
                leastDestructiveRef={cancelRef}
                onClose={onAnotherAlertClose}
              >
                <AlertDialogOverlay>
                  <AlertDialogContent>
                    <AlertDialogHeader fontSize="lg" fontWeight="bold">
                      End Campaign
                    </AlertDialogHeader>

                    <AlertDialogBody>
                      <Text fontSize="lg">
                        Why would you like to end campaign?
                      </Text>
                      <Input mt={3} />
                      <Text mt={2}>
                        The reason will be provided in campaign page to notify
                        viewers and backers
                      </Text>
                    </AlertDialogBody>

                    <AlertDialogFooter
                      display="flex"
                      flexDirection="column"
                      gap={3}
                    >
                      <Button colorScheme="red" onClick={onAbortClose} w="full">
                        END CAMPAIGN & WITHDRAW
                      </Button>
                      <Button ref={cancelRef} onClick={onAbortClose} w="full">
                        Cancel
                      </Button>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialogOverlay>
              </AlertDialog>
            </Box>
          </>
          )
        ) : (
          <>
            <Text mt={5} fontWeight="semibold">
              Contribute
            </Text>
            <Box backgroundColor="#c8ffc8" p={8} rounded="10px" mt={3}>
              <Text fontSize="2xl" fontWeight="semibold">
                Be a backer
              </Text>
              <Text color="gray" fontSize="15px" mt={2}>
                Enter amount in Ether you want to contribute
              </Text>
              {wallet ? (
                donationStatus ? (
                  <>
                    <Alert
                      status="success"
                      variant="subtle"
                      rounded="10px"
                      mt={3}
                    >
                      <AlertIcon />
                      <Box>
                        <Text>Funded successfully</Text>
                        <Text>Thanks for your valuable contribution</Text>
                      </Box>
                    </Alert>
                  </>
                ) : (
                  <>
                    <Text mt={2}>How much would you like to fund?</Text>
                    <NumberInput
                      precision={2}
                      step={0.001}
                      mt={3}
                      borderColor="gray"
                    >
                      <NumberInputField placeholder="0.001" />
                      <NumberInputStepper>
                        <NumberIncrementStepper border="none" />
                        <NumberDecrementStepper border="none" />
                      </NumberInputStepper>
                    </NumberInput>
                    <Flex justify='center'><Button colorScheme="blue" mt={4}>DONATE</Button></Flex>
                  </>
                )
              ) : (
                <Alert status="error" rounded="15px" mt={4}>
                  <Flex align="center" gap={24}>
                    <Box display="flex">
                      <AlertIcon />
                      Please connect your wallet to proceed
                    </Box>
                    <Button
                      border="none"
                      backgroundColor="transparent"
                      color="darkred"
                    >
                      CONNECT
                    </Button>
                  </Flex>
                </Alert>
              )}
              <Box mt={4} color="gray">
                <Text fontWeight="semibold">Scheme - All or Nothing.</Text>
                <Text>
                  The money you fund will be stored in a smart contract you can
                  trust.
                </Text>
              </Box>
            </Box>
          </>
        )}
      </Box>
    </Flex>
  );
};

export default DonatePage;
