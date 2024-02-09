/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Alert, AlertIcon, VStack, SimpleGrid, Text, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { DepositForm } from './DepositForm';
import { WithdrawForm } from './WithdrawForm';
import { RegisterForm } from './RegisterForm';
import { CryptoChooser } from './CryptoChooser';
import { StatsBoard } from './StatsBoard';

// TODO: Prepare separate components for the segments here
// TODO: use Valtio for global smart contract config state + dispatchers to be able to trigger changes from each component

export const Mix = () => {

  return (
    <Box width="100%">
    <VStack
  spacing={2}
  >
      <Text
        as="h1"
        fontSize={{ base: '2xl', md: '3xl', lg: '5xl' }}
        textAlign={{ base: 'center', md: 'center' }}
        fontWeight="black"
        lineHeight="shorter"
        mb={5}
      >
        Try our crypto mixer now!
      </Text>
      <Text
        as="h2"
        fontSize="lg"
        fontWeight="thin"
        textAlign={{ base: 'center', md: 'center' }}
        sx={{
          a: {
            color: 'KleoColor.color3.base',
          },
        }}
      >
      If you want to try the mixer you must have <a href="https://testnet.alephium.org/">ALPH</a> by requesting them on your wallet,
      </Text>
      <Text
        as="h2"
        fontSize="lg"
        fontWeight="thin"
        textAlign={{ base: 'center', md: 'center' }}
        sx={{
          a: {
            color: 'KleoColor.color3.base',
          },
        }}
      >
      all the transactions currently made are done on <a href="https://testnet.alephium.org/">testnet</a> and cost you nothing.
      </Text>

      <Alert width='auto' status='info'>
           <AlertIcon />
               3% fees will be taken when you deposit any crypto
      </Alert>

      <Alert width='auto' status='warning'>
           <AlertIcon />
               you can read our <a href="https://docs.kleomixer.com/"> Docs</a> to understand how the mixer work
      </Alert>

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
                    bgColor="transparent"
                    isFitted
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
                      >Register</Tab>
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
                        <RegisterForm/>
                    </TabPanel>
                    <TabPanel>
                      <SimpleGrid columns={{sm:2, md:2}} spacing='40px'>
                        <CryptoChooser/>
                        <DepositForm/>
                      </SimpleGrid>
                    </TabPanel>
                    <TabPanel>
                      <SimpleGrid columns={{sm:2, md:2}} spacing='40px'>
                        <CryptoChooser/>
                        <WithdrawForm/>
                      </SimpleGrid>
                    </TabPanel>
                  </TabPanels>
                  </Tabs>
                </>
          </Box>
        </Box>
        <StatsBoard/>
        </VStack>
    </Box>
  );
};
