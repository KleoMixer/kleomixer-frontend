import { useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import { ActionButton } from '../ActionButton';
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  useBreakpointValue,
  Box,
} from '@chakra-ui/react';
import { Authenticated } from '../core/Authenticated';
import { AlephiumConnectButton } from '@alephium/web3-react';

export const WithdrawForm = () => {
  const router = useRouter();
  const [amount, setAmount] = useState(1);

  const isContentCentered = useBreakpointValue({ base: true, md: false });

  const handleMint = useCallback(() => {
    router.push('/mixer');
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
        <NumberInput
          maxW="100px"
          min={1}
          max={100}
          value={amount}
          onChange={setAmountHandler}
        >
          <NumberInputField
            py={6}
            _focus={{ outline: 'none' }}
            placeholder="Amount of tokens to Withdraw..."
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
          onClick={handleMint}
        >
          {'Withdraw'}
        </ActionButton>
        </Authenticated>
      </Box>
    </>
  );
};
