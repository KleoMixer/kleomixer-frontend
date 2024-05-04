/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react';
import { Box, Image, Alert, HStack, Input, NumberInput, AlertIcon, VStack, SimpleGrid, Text, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { DepositForm } from './DepositForm';
import { WithdrawForm } from './WithdrawForm';
import { PasswordGenerator } from './PasswordGenerator';
import { HomeSectionTitle } from '../HomeSectionTitle';
import { StatsBoard } from './StatsBoard';

// TODO: Prepare separate components for the segments here
// TODO: use Valtio for global smart contract config state + dispatchers to be able to trigger changes from each component

export const Mix = () => {

  return (
    <Box width="100%">
    <VStack
  spacing={2}
  >
    <HomeSectionTitle title="Mixer" />

      <Alert width='auto' status='info'>
           <AlertIcon />
               Only $ALPH is available for now
      </Alert>
      <Alert width='auto' status='info'>
           <AlertIcon />
               10 $MIX will be taken as fees when you deposit
      </Alert>
      <Alert width='auto' status='warning'>
           <AlertIcon />
               you can read our documentations to understand how the mixer work
      </Alert>

      <StatsBoard/>
    </VStack>
    <VStack spacing={8}>
        <Box mt={6}>
          <Box
          display="flex"
          gap={5}
          alignItems="center"
          justifyContent={{ base: 'center', md: 'center' }}
          borderColor="KleoColor.color2.darker"
          borderWidth={5}
          bgColor="transparent"
          py={2}
          px={6}
          rounded="xl"
          fontWeight="normal"
          color="KleoColor.white"
          userSelect="none"
          transition="background-color .3s"
          width="auto">
          <>
                  <Tabs
                    isFitted
                    bgColor="transparent"
                    rounded="xl"
                    fontWeight="normal"
                    color="KleoColor.white"
                    transition="background-color .3s"
                    variant="soft-rounded"
                    align="center"
                    justifyContent={{ base: 'center', md: 'center' }}
                    width="auto">
                    <TabList mb="1em">
                      <Tab
                      color="KleoColor.white"
                      _hover={{ bg: 'KleoColor.color4.base' }}
                      _selected={{ bg: 'KleoColor.color4.darker' }}
                      >Deposit</Tab>
                      <Tab
                      color="KleoColor.white"
                      _hover={{ bg: 'KleoColor.color4.base' }}
                      _selected={{ bg: 'KleoColor.color4.darker' }}
                      >Withdraw</Tab>
                    </TabList>
                  <TabPanels>
                    <TabPanel>
                        <DepositForm/>
                    </TabPanel>
                    <TabPanel>
                        <WithdrawForm/>
                    </TabPanel>
                  </TabPanels>
                  </Tabs>
                </>
          </Box>
        </Box>
            <PasswordGenerator/>
            </VStack>
    </Box>
  );
};
