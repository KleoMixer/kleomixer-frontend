import { FC, useCallback, useState } from 'react';
import { ActionButton } from '../ActionButton';
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  useBreakpointValue,
  VStack,
  Text,
  HStack,
  Box,
} from '@chakra-ui/react';
import { Authenticated } from '../core/Authenticated';
import { useWallet, AlephiumConnectButton } from '@alephium/web3-react';
import { TxStatus } from '../TxStatus'
import { node } from '@alephium/web3';
import { MixIco } from '@/services/utils'
import { buy } from '@/services/token.service'
import { PatternFormat } from "react-number-format";


export const BuyForm: FC<{
  config: MixIco
}> = ({ config }) => {
  const { signer } = useWallet()
  const [amount, setAmount] = useState(80);
  const [ongoingTxId, setOngoingTxId] = useState<string>()

  const handleBuySubmit = async () => {
    if (signer) {
      const result = await buy(signer, ""+amount*100000000, "yweuj67dNGcVu81BEXfdSs2yTDJ2gJBQPwkDbgksCUyD")
      setOngoingTxId(result.txId)
    }
  }

  const isContentCentered = useBreakpointValue({ base: true, md: false });

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
          min={1}
          max={5440}
          value={amount}
          onChange={setAmountHandler}
        >
          <NumberInputField
            py={6}
            _focus={{ outline: 'none' }}
            placeholder="Amount of tokens to Buy..."
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
          onClick={handleBuySubmit}
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
          color="KleoColor.white"
        >
        You will pay {amount*0.0125} $ALPH and receive {amount} $MIX
        </Text>
        </VStack>
      </Box>
    </>
  );
};
