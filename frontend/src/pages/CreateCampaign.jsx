import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";

const CreateCampaign = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap="60px">
      <FormControl isRequired>
        <Flex direction="row" justify="center" mt={24} gap={20} align="center">
          <Box w="500px" display="flex" flexDirection="column" gap={5}>
            <Box>
              <FormLabel>Campaign Title</FormLabel>
              <Input placeholder="Title" />
            </Box>
            <Box>
              <FormLabel>Minimum contribution amount</FormLabel>
              <Input placeholder="0.001" />
            </Box>
            <Box>
              <FormLabel>Goal ETH</FormLabel>
              <Input placeholder="0.01" />
            </Box>

            <Box>
              <FormLabel>Campaign Deadline</FormLabel>
              <Input
                placeholder="Select Date and Time"
                size="md"
                type="datetime-local"
              />
            </Box>
          </Box>
          <Box w="500px" display="flex" flexDirection="column" gap={7}>
            <Box>
              <Text mb="8px">Campaign Description</Text>
              <Textarea placeholder="Description" size="sm" />
            </Box>
            <Box>
              <FormLabel>Image Link</FormLabel>
              <Input placeholder="Link" />
            </Box>

            <Box>
              <FormLabel>Wallet Address</FormLabel>
              <Input placeholder="0x1a3442dnacj2243423kjj42" />
            </Box>
          </Box>
        </Flex>
      </FormControl>

      <Flex direction="column" gap="30px">
        <Checkbox>
          I/We understand that, once these fields are set, cannot be updated
        </Checkbox>
        <Button>Create Campaign</Button>
      </Flex>
    </Box>
  );
};

export default CreateCampaign;
