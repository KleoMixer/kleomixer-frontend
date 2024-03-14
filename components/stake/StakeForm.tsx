import { FC, useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import { ActionButton } from '../ActionButton';
import {
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  useBreakpointValue,
  Image,
  Text,
  VStack,
  HStack,
  Tooltip,
  Accordion,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  AccordionButton,
  useToast,
  Box,
} from '@chakra-ui/react';
import { InfoOutlineIcon } from '@chakra-ui/icons'
import { Authenticated } from '../core/Authenticated';
import { useWallet, AlephiumConnectButton } from '@alephium/web3-react';
import { TxStatus } from '../TxStatus'
import { Stake as StakeTS } from 'artifacts/ts';
import { binToHex, contractIdFromAddress, node, web3, NodeProvider } from '@alephium/web3';
import { stakeconfig, Stake as StakeUtils } from '@/services/utils'
import { serviceclaimreward, serviceoneyear, servicenine, servicesix, servicethree } from '@/services/token.service'
import { PatternFormat } from "react-number-format";

export const StakeForm: FC<{
  config: StakeUtils
}> = ({ config }) => {

  const { signer, account } = useWallet()
  const [value, setValue] = useState<string>()
  const [amount, setAmount] = useState(0);
  const [ongoingTxId, setOngoingTxId] = useState<string>()
  const toast = useToast()

  const handleClaimReward = async () => {
      if (signer) {
          const result = await serviceclaimreward(signer, binToHex(contractIdFromAddress(""+value)));
          setOngoingTxId(result.txId)
          toast({
          title: 'Transaction submitted',
          description: <a href={`https://explorer.alephium.org/transactions/${result.txId}`} > {result.txId} </a>,
          status: 'success',
          duration: 10000,
          isClosable: true,
        })
      }
  }

  const handleStake9 = async () => {
    if (signer) {
      const result = await servicenine(signer, ""+amount*100000000)
      setOngoingTxId(result.txId)
      toast({
      title: 'Transaction submitted',
      description: <a href={`https://explorer.alephium.org/transactions/${result.txId}`} > {result.txId} </a>,
      status: 'success',
      duration: 10000,
      isClosable: true,
    })
    }
  }

  const handleStake6 = async () => {
    if (signer) {
      const result = await servicesix(signer, ""+amount*100000000)
      setOngoingTxId(result.txId)
      toast({
      title: 'Transaction submitted',
      description: <a href={`https://explorer.alephium.org/transactions/${result.txId}`} > {result.txId} </a>,
      status: 'success',
      duration: 10000,
      isClosable: true,
    })
    }
  }

  const handleStake3 = async () => {
    if (signer) {
      const result = await servicethree(signer, ""+amount*100000000)
      setOngoingTxId(result.txId)
      toast({
      title: 'Transaction submitted',
      description: <a href={`https://explorer.alephium.org/transactions/${result.txId}`} > {result.txId} </a>,
      status: 'success',
      duration: 10000,
      isClosable: true,
    })
    }
  }

  const handleStake1 = async () => {
    if (signer) {
      const result = await serviceoneyear(signer, ""+amount*100000000)
      setOngoingTxId(result.txId)
      toast({
      title: 'Transaction submitted',
      description: <a href={`https://explorer.alephium.org/transactions/${result.txId}`} > {result.txId} </a>,
      status: 'success',
      duration: 10000,
      isClosable: true,
    })
    }
  }

  const txStatusCallback = useCallback(async (status: node.TxStatus, numberOfChecks: number): Promise<any> => {
    if (
      (status.type === 'Confirmed' && numberOfChecks > 2) ||
      (status.type === 'TxNotFound' && numberOfChecks > 3)
    ) {
      setOngoingTxId(undefined)
    }

    return Promise.resolve()
  }, [setOngoingTxId])


  const router = useRouter();

  const isContentCentered = useBreakpointValue({ base: true, md: false });

  const setRewardAddressHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const setAmountHandler = useCallback(
    (valueAsString: string, valueAsNumber: number) => setAmount(valueAsNumber),
    []
  );

  return (
    <>
    <VStack>
    <HStack>
    <Input
        value={value}
        onChange={setRewardAddressHandler}
        placeholder='Address'
        size='md'
      />
    <Authenticated
      fallback={
        <Box
          mt={6}
          display="flex"
          justifyContent={isContentCentered ? 'center' : 'flex-start'}
        >
          <AlephiumConnectButton />
        </Box>
      }
      spinnerCentered={isContentCentered}
    >
    <ActionButton
      onClick={handleClaimReward}
      disabled={!!ongoingTxId}
    >
      {'Claim Rewards'}
    </ActionButton>
    </Authenticated>
    </HStack>
    <Accordion allowMultiple>
    <AccordionItem
      border={0}
      borderRadius="2xl"
      bgColor="KleoColor.dark.lighter"
      boxShadow="0 0 25px"
      color="KleoColor.shadowColor"
      bgGradient="linear-gradient(90deg, KleoColor.dark.base 0%, KleoColor.dark.lighter 70%);"
      mb={6}
    >
      <AccordionButton
        _focus={{ outline: 'none' }}
        color="KleoColor.white"
        padding={6}
      >
      <Image
        objectFit='cover'
        boxSize='40px'
        src='/mix.png'
        alt='MIX'
      />
        <Box as="span" flex='1' textAlign='left'>
          $MIX Staking | 3 Months | 10% APR
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel color="KleoColor.white">
      <Box
        display="flex"
        gap={5}
        alignItems="center"
        justifyContent={{ base: 'center', md: 'flex-start' }}
      >
      <VStack>
      <HStack>
        <NumberInput
          maxW="100px"
          min={0}
          max={10000000}
          value={amount}
          onChange={setAmountHandler}
        >
          <NumberInputField
            py={6}
            _focus={{ outline: 'none' }}
            placeholder="Amount of tokens..."
            color="KleoColor.white"
          />
            <NumberInputStepper>
              <NumberIncrementStepper borderColor="KleoColor.base.dark" />
              <NumberDecrementStepper />
            </NumberInputStepper>
        </NumberInput>
        <Authenticated
          fallback={
            <Box
              mt={6}
              display="flex"
              justifyContent={isContentCentered ? 'center' : 'flex-start'}
            >
              <AlephiumConnectButton />
            </Box>
          }
          spinnerCentered={isContentCentered}
        >
        <ActionButton
          onClick={handleStake3}
          disabled={!!ongoingTxId}
        >
          {'Stake'}
        </ActionButton>
        </Authenticated>
        </HStack>
        <Text
          as="h2"
          fontSize="lg"
          fontWeight="thin"
          textAlign={{ base: 'center', md: 'center' }}
          color="KleoColor.white"
        >
        You will be able to claim {amount+(amount*0.1)} $MIX in 3 Months
        </Text>
        </VStack>
      </Box>
      </AccordionPanel>
    </AccordionItem>
    <AccordionItem
      border={0}
      borderRadius="2xl"
      bgColor="KleoColor.dark.lighter"
      boxShadow="0 0 25px"
      color="KleoColor.shadowColor"
      bgGradient="linear-gradient(90deg, KleoColor.dark.base 0%, KleoColor.dark.lighter 70%);"
      mb={6}
    >
      <AccordionButton
        _focus={{ outline: 'none' }}
        color="KleoColor.white"
        padding={6}
      >
      <Image
        objectFit='cover'
        boxSize='40px'
        src='/mix.png'
        alt='MIX'
      />
        <Box as="span" flex='1' textAlign='left'>
          $MIX Staking | 6 Months | 15% APR
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel color="KleoColor.white">
      <Box
        display="flex"
        gap={5}
        alignItems="center"
        justifyContent={{ base: 'center', md: 'flex-start' }}
      >
      <VStack>
      <HStack>
        <NumberInput
          maxW="100px"
          min={0}
          max={10000000}
          value={amount}
          onChange={setAmountHandler}
        >
          <NumberInputField
            py={6}
            _focus={{ outline: 'none' }}
            placeholder="Amount of tokens..."
            color="KleoColor.white"
          />
            <NumberInputStepper>
              <NumberIncrementStepper borderColor="KleoColor.base.dark" />
              <NumberDecrementStepper />
            </NumberInputStepper>
        </NumberInput>
        <Authenticated
          fallback={
            <Box
              mt={6}
              display="flex"
              justifyContent={isContentCentered ? 'center' : 'flex-start'}
            >
              <AlephiumConnectButton />
            </Box>
          }
          spinnerCentered={isContentCentered}
        >
        <ActionButton
          onClick={handleStake6}
          disabled={!!ongoingTxId}
        >
          {'Stake'}
        </ActionButton>
        </Authenticated>
        </HStack>
        <Text
          as="h2"
          fontSize="lg"
          fontWeight="thin"
          textAlign={{ base: 'center', md: 'center' }}
          color="KleoColor.white"
        >
        You will be able to claim {amount+(amount*0.15)} $MIX in 6 Months
        </Text>
        </VStack>
      </Box>
      </AccordionPanel>
    </AccordionItem>
    <AccordionItem
      border={0}
      borderRadius="2xl"
      bgColor="KleoColor.dark.lighter"
      boxShadow="0 0 25px"
      color="KleoColor.shadowColor"
      bgGradient="linear-gradient(90deg, KleoColor.dark.base 0%, KleoColor.dark.lighter 70%);"
      mb={6}
    >
      <AccordionButton
        _focus={{ outline: 'none' }}
        color="KleoColor.white"
        padding={6}
      >
      <Image
        objectFit='cover'
        boxSize='40px'
        src='/mix.png'
        alt='MIX'
      />
        <Box as="span" flex='1' textAlign='left'>
          $MIX Staking | 9 Months | 20% APR
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel color="KleoColor.white">
      <Box
        display="flex"
        gap={5}
        alignItems="center"
        justifyContent={{ base: 'center', md: 'flex-start' }}
      >
      <VStack>
      <HStack>
        <NumberInput
          maxW="100px"
          min={0}
          max={10000000}
          value={amount}
          onChange={setAmountHandler}
        >
          <NumberInputField
            py={6}
            _focus={{ outline: 'none' }}
            placeholder="Amount of tokens..."
            color="KleoColor.white"
          />
            <NumberInputStepper>
              <NumberIncrementStepper borderColor="KleoColor.base.dark" />
              <NumberDecrementStepper />
            </NumberInputStepper>
        </NumberInput>
        <Authenticated
          fallback={
            <Box
              mt={6}
              display="flex"
              justifyContent={isContentCentered ? 'center' : 'flex-start'}
            >
              <AlephiumConnectButton />
            </Box>
          }
          spinnerCentered={isContentCentered}
        >
        <ActionButton
          onClick={handleStake9}
          disabled={!!ongoingTxId}
        >
          {'Stake'}
        </ActionButton>
        </Authenticated>
        </HStack>
        <Text
          as="h2"
          fontSize="lg"
          fontWeight="thin"
          textAlign={{ base: 'center', md: 'center' }}
          color="KleoColor.white"
        >
        You will be able to claim {amount+(amount*0.2)} $MIX in 9 Months
        </Text>
        </VStack>
      </Box>
      </AccordionPanel>
    </AccordionItem>
    <AccordionItem
      border={0}
      borderRadius="2xl"
      bgColor="KleoColor.dark.lighter"
      boxShadow="0 0 25px"
      color="KleoColor.shadowColor"
      bgGradient="linear-gradient(90deg, KleoColor.dark.base 0%, KleoColor.dark.lighter 70%);"
      mb={6}
    >
      <AccordionButton
        _focus={{ outline: 'none' }}
        color="KleoColor.white"
        padding={6}
      >
      <Image
        objectFit='cover'
        boxSize='40px'
        src='/mix.png'
        alt='MIX'
      />
        <Box as="span" flex='1' textAlign='left'>
          $MIX Staking | 1 Year | 40% APR
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel color="KleoColor.white">
      <Box
        display="flex"
        gap={5}
        alignItems="center"
        justifyContent={{ base: 'center', md: 'flex-start' }}
      >
      <VStack>
      <HStack>
        <NumberInput
          maxW="100px"
          min={0}
          max={10000000}
          value={amount}
          onChange={setAmountHandler}
        >
          <NumberInputField
            py={6}
            _focus={{ outline: 'none' }}
            placeholder="Amount of tokens..."
            color="KleoColor.white"
          />
            <NumberInputStepper>
              <NumberIncrementStepper borderColor="KleoColor.base.dark" />
              <NumberDecrementStepper />
            </NumberInputStepper>
        </NumberInput>
        <Authenticated
          fallback={
            <Box
              mt={6}
              display="flex"
              justifyContent={isContentCentered ? 'center' : 'flex-start'}
            >
              <AlephiumConnectButton />
            </Box>
          }
          spinnerCentered={isContentCentered}
        >
        <ActionButton
          onClick={handleStake1}
          disabled={!!ongoingTxId}
        >
          {'Stake'}
        </ActionButton>
        </Authenticated>
        </HStack>
        <Text
          as="h2"
          fontSize="lg"
          fontWeight="thin"
          textAlign={{ base: 'center', md: 'center' }}
          color="KleoColor.white"
        >
        You will be able to claim {amount+(amount*0.4)} $MIX in 1 Year
        </Text>
        </VStack>
      </Box>
      </AccordionPanel>
    </AccordionItem>
    </Accordion>
    </VStack>
    </>
  );
};
