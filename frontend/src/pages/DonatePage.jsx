import { Box, Button, Divider, Flex, Progress, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

const DonatePage = () => {
  const [owner, setOwner] = useState(true)
  const [title, setTitle] = useState('Distribution of covid vaccines')
  return (
    <Flex h='900px' p={7} justify='center' gap={16} mt={20}>
      <Box>
        <Text fontSize='4xl'>{title}</Text>
        <Text>Contribution Details</Text>
        <Flex flexDir='column'>
          <Box>
            <Text>Minimum Contribution amount</Text>
            <Text>0.001 ETH</Text>
          </Box>
          
          <Box>
            <Text>Goal</Text>
            <Text>0.01 ETH</Text>
          </Box>

          <Box>
            <Text>Wallet Address of FundRaier</Text>
            <Text>0xA435BSN233532435B12214N23F</Text>
          </Box>
          
          <Box>
            <Text>Contributions are accepted till (Deadline)</Text>
            <Text>Tue Nov 29 2024 14:45:00 GMT</Text>
          </Box>

          { owner && (
            <>
              <Text fontWeight='bold'>Danger Zone</Text>
              <Box backgroundColor='pink' rounded='10px' p={5} display='flex' alignItems='center'>
                <Flex flexDir='column'>
                  <Text fontWeight='bold'>Quit & Refund</Text>
                  <Text fontWeight='semibold' mb={3}>Once you end a campaign, there is no going back. Please be Certain</Text>
                </Flex>
                <Button backgroundColor='red' color='white' ml={5}>Abort Campaign</Button>
              </Box>
            </>
          )}

        </Flex>
      </Box>

      <Divider orientation='vertical'/>

      <Box p='20px'>
          <Text>Current status of campaign</Text>
          <Box backgroundColor='yellow' p={5} rounded='10px' mt={3}>
            <Text fontSize='2xl' fontWeight='semibold'>Campaign balance</Text>
            <Text>Amount stored in smart contract</Text>
            <Box>
              <Flex align="center">
                <Progress value={60} flex="1" mr={3} rounded='10px' w='500px'/>
                <Text>60%</Text>
              </Flex>
              <Text>100 ETH funded by 1200 backers.</Text>
            </Box>
          </Box>
          <Text>Withdraw</Text>
          <Box Box backgroundColor='yellow' p={5} rounded='10px' mt={3}>
            <Text fontSize='2xl'>Withdraw Raised Funds</Text>
          </Box>
      </Box>
      
    </Flex>
  )
}

export default DonatePage