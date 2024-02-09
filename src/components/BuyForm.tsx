import { useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import { ActionButton } from './ActionButton';
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  useBreakpointValue,
  Text,
  VStack,
  HStack,
  Tooltip,
  Box,
} from '@chakra-ui/react';
import { InfoOutlineIcon } from '@chakra-ui/icons'
import { Authenticated } from './core/Authenticated';
import { AlephiumConnectButton } from '@alephium/web3-react'

export const BuyForm = () => {
  const router = useRouter();
  const [amount, setAmount] = useState(1);

  const isContentCentered = useBreakpointValue({ base: true, md: false });

  const handleBuy = useCallback(() => {
    router.push('/presale');
  }, [router]);

  const setAmountHandler = useCallback(
    (valueAsString: string, valueAsNumber: number) => setAmount(valueAsNumber),
    []
  );

  return (
    <>
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
          min={80}
          max={80000}
          value={amount}
          onChange={setAmountHandler}
        >
          <NumberInputField
            py={6}
            _focus={{ outline: 'none' }}
            placeholder="Amount of tokens to Buy..."
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
          onClick={handleBuy}
        >
          {'Buy'}
        </ActionButton>
        </Authenticated>
        </HStack>
        <Text
          as="h2"
          fontSize="lg"
          fontWeight="thin"
          textAlign={{ base: 'center', md: 'center' }}
        >
        You will pay {amount*0.0125} $ALPH
        </Text>
        <HStack>
        <Text
          as="h2"
          fontSize="lg"
          fontWeight="thin"
          textAlign={{ base: 'center', md: 'center' }}
        >
        You will receive {amount*0.25} $MIX Unlocked and {amount*0.75} $MIX Locked
        </Text>
        <Tooltip label="25% unlocked each 4 mounths">
        <Text
          as="h2"
          fontSize="lg"
          fontWeight="thin"
          textAlign={{ base: 'center', md: 'center' }}
        >
        <InfoOutlineIcon/>
        </Text>
        </Tooltip>
        </HStack>
        </VStack>
      </Box>
    </>
  );
};
