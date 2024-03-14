import { FC, useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import { ActionButton } from '../ActionButton';
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
import { Authenticated } from '../core/Authenticated';
import { useWallet, AlephiumConnectButton } from '@alephium/web3-react';
import { TxStatus } from '../TxStatus'
import { Mixico } from 'artifacts/ts';
import { node, web3, NodeProvider } from '@alephium/web3';
import { MixIco } from '@/services/utils'
import { buy, withdraw, topupmix, destroycontract } from '@/services/token.service'
import { PatternFormat } from "react-number-format";


export const BuyForm: FC<{
  config: MixIco
}> = ({ config }) => {
  const { signer, account } = useWallet()
  const addressGroup = config.groupIndex
  const [amount, setAmount] = useState(80);
  const [ongoingTxId, setOngoingTxId] = useState<string>()

  const handleBuySubmit = async () => {
    if (signer) {
      const result = await buy(signer, ""+amount*100000000, "yweuj67dNGcVu81BEXfdSs2yTDJ2gJBQPwkDbgksCUyD")
      setOngoingTxId(result.txId)
    }
  }

  const handleWithdrawSubmit = async () => {
    if (signer) {
      const result = await withdraw(signer, ""+amount*100000000, "yweuj67dNGcVu81BEXfdSs2yTDJ2gJBQPwkDbgksCUyD")
      setOngoingTxId(result.txId)
    }
  }

  const handleDestroySubmit = async () => {
    if (signer) {
      const result = await destroycontract(signer, ""+amount*100000000, "yweuj67dNGcVu81BEXfdSs2yTDJ2gJBQPwkDbgksCUyD")
      setOngoingTxId(result.txId)
    }
  }

  const handleTopUpSubmit = async () => {
    if (signer) {
      const result = await topupmix(signer, ""+amount*100000000)
      setOngoingTxId(result.txId)
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
