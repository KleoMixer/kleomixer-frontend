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
  Text,
  VStack,
  HStack,
  useToast,
  Tooltip,
  Box,
} from '@chakra-ui/react';
import { InfoOutlineIcon } from '@chakra-ui/icons'
import { Authenticated } from '../core/Authenticated';
import { useWallet, AlephiumConnectButton } from '@alephium/web3-react';
import { TxStatus } from '../TxStatus'
import { node, web3, NodeProvider } from '@alephium/web3';
import { Stake as StakeUtils } from '@/services/utils'
import { servicecreatemixdata, servicegetassets, servicegetallassets, servicecollectfees, servicedepositalphspeedmixer, servicechangefee } from '@/services/token.service'
import { PatternFormat } from "react-number-format";
import { sha256 } from 'js-sha256';

export const AdminMixForm = () => {
  const { signer, account } = useWallet()
  const toast = useToast()
  const [amount, setAmount] = useState(0);
  const [ongoingTxId, setOngoingTxId] = useState<string>()
  const [key, setKey] = useState<string>("")

  const setKeyHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKey(event.target.value);
  };

  const [tokenID, setTokenID] = useState<string>("")

  const setTokenIDHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTokenID(event.target.value);
  };

  const handleChangeFees = async () => {
    if (signer) {
      const result = await servicechangefee(signer, ""+amount*1000000000000000000)
      setOngoingTxId(result.txId)
      toast({
      title: 'Transaction submitted',
      description: <a href={`https://explorer.alephium.org/transactions/${result.txId}`} target="_blank" rel="noopener noreferrer" > {result.txId} </a>,
      status: 'success',
      duration: 10000,
      isClosable: true,
    })
    }
  }

  const handleCreateMixData = async () => {
    if (signer) {
      const result = await servicecreatemixdata(signer, sha256(key), ""+amount*1000000000000000000)
      setOngoingTxId(result.txId)
      toast({
      title: 'Transaction submitted',
      description: <a href={`https://explorer.alephium.org/transactions/${result.txId}`} target="_blank" rel="noopener noreferrer" > {result.txId} </a>,
      status: 'success',
      duration: 10000,
      isClosable: true,
    })
    }
  }

  const handleGetAssets = async () => {
    if (signer) {
      const result = await servicegetassets(signer, ""+amount*1000000000000000000, key)
      setOngoingTxId(result.txId)
      toast({
      title: 'Transaction submitted',
      description: <a href={`https://explorer.alephium.org/transactions/${result.txId}`} target="_blank" rel="noopener noreferrer" > {result.txId} </a>,
      status: 'success',
      duration: 10000,
      isClosable: true,
    })
    }
  }

  const handleGetAllAssets = async () => {
    if (signer) {
      const result = await servicegetallassets(signer, key)
      setOngoingTxId(result.txId)
      toast({
      title: 'Transaction submitted',
      description: <a href={`https://explorer.alephium.org/transactions/${result.txId}`} target="_blank" rel="noopener noreferrer" > {result.txId} </a>,
      status: 'success',
      duration: 10000,
      isClosable: true,
    })
    }
  }

  const handleCollectFees = async () => {
    if (signer) {
      const result = await servicecollectfees(signer)
      setOngoingTxId(result.txId)
      toast({
      title: 'Transaction submitted',
      description: <a href={`https://explorer.alephium.org/transactions/${result.txId}`} target="_blank" rel="noopener noreferrer" > {result.txId} </a>,
      status: 'success',
      duration: 10000,
      isClosable: true,
    })
    }
  }

  const handleDepositAlphSpeedMixer = async () => {
    if (signer) {
      const result = await servicedepositalphspeedmixer(signer)
      setOngoingTxId(result.txId)
      toast({
      title: 'Transaction submitted',
      description: <a href={`https://explorer.alephium.org/transactions/${result.txId}`} target="_blank" rel="noopener noreferrer" > {result.txId} </a>,
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
      <Input
          value={tokenID}
          onChange={setTokenIDHandler}
          placeholder='Token ID'
          size='md'
        />
      <Input
          value={key}
          onChange={setKeyHandler}
          placeholder='Key'
          size='md'
        />
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
        </HStack>
        <HStack>
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
          onClick={handleCollectFees}
        >
          {'Collect Fees'}
        </ActionButton>
        <ActionButton
          onClick={handleChangeFees}
        >
          {'Change Fees'}
        </ActionButton>
        <ActionButton
          onClick={handleDepositAlphSpeedMixer}
        >
          {'Deposit Alph Speed Mixer'}
        </ActionButton>
        <ActionButton
          onClick={handleCreateMixData}
        >
          {'Create Mix Data'}
        </ActionButton>
        <ActionButton
          onClick={handleGetAssets}
        >
          {'Get Assets'}
        </ActionButton>
        <ActionButton
          onClick={handleGetAllAssets}
        >
          {'Get All Assets'}
        </ActionButton>
        </Authenticated>
        </HStack>
        </VStack>
      </Box>
    </>
  );
};
