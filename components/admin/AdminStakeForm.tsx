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
import { Stake as StakeTS } from 'artifacts/ts';
import { node, web3, NodeProvider } from '@alephium/web3';
import { Stake as StakeUtils } from '@/services/utils'
import { serviceaddreward, serviceoneyear, servicenine, servicesix, servicethree, servicedestroystake, serviceclaimreward } from '@/services/token.service'
import { PatternFormat } from "react-number-format";


export const AdminStakeForm: FC<{
  config: StakeUtils
}> = ({ config }) => {
  const { signer, account } = useWallet()
  const addressGroup = config.groupIndex
  const [amount, setAmount] = useState(0);
  const [ongoingTxId, setOngoingTxId] = useState<string>()

  const handleAddReward = async () => {
    if (signer) {
      const result = await serviceaddreward(signer, ""+amount*100000000)
      setOngoingTxId(result.txId)
    }
  }

  const handleStakeOneY = async () => {
    if (signer) {
      const result = await serviceoneyear(signer, ""+amount*100000000)
      setOngoingTxId(result.txId)
    }
  }

  const handleStakeNineM = async () => {
    if (signer) {
      const result = await servicenine(signer, ""+amount*100000000)
      setOngoingTxId(result.txId)
    }
  }

  const handleStakeSixM = async () => {
    if (signer) {
      const result = await servicesix(signer, ""+amount*100000000)
      setOngoingTxId(result.txId)
    }
  }

  const handleStakeThreeM = async () => {
    if (signer) {
      const result = await servicethree(signer, ""+amount*100000000)
      setOngoingTxId(result.txId)
    }
  }

  const handleDestroy = async () => {
    if (signer) {
      const result = await servicedestroystake(signer)
      setOngoingTxId(result.txId)
    }
  }

  const handleClaimReward = async () => {
    if (signer) {
      const result = await serviceclaimreward(signer, "321f034199dcaf5b946e39a5bec069c3e6c83ec71d8c1fb1b08ef2f95e861c00")
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
          onClick={handleStakeOneY}
        >
          {'Stake 1 Year'}
        </ActionButton>
        <ActionButton
          onClick={handleStakeNineM}
        >
          {'Stake 9 Months'}
        </ActionButton>
        <ActionButton
          onClick={handleStakeSixM}
        >
          {'Stake 6 Months'}
        </ActionButton>
        <ActionButton
          onClick={handleStakeThreeM}
        >
          {'Stake 3 Months'}
        </ActionButton>
        <ActionButton
          onClick={handleAddReward}
        >
          {'Add Reward'}
        </ActionButton>
        <ActionButton
          onClick={handleDestroy}
        >
          {'Destroy'}
        </ActionButton>
        <ActionButton
          onClick={handleClaimReward}
        >
          {'Claim Rewards'}
        </ActionButton>
        </Authenticated>
        </HStack>
      </Box>
    </>
  );
};
