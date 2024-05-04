import { Box, Tooltip, AlertIcon, Alert, HStack, VStack, Text } from '@chakra-ui/react';
import { HomeSectionTitle } from '../HomeSectionTitle';
import { StakeForm } from './StakeForm';
import { InfoOutlineIcon } from '@chakra-ui/icons'
import { StakeBoard } from './StakeBoard';
import { stakeconfig } from '@/services/utils'

export const Stake = () => {

  return (
    <Box width="100%">
      <HomeSectionTitle title="Staking" />
      <VStack
      spacing={2}
      >
      <Alert width='auto' status='warning'>
           <AlertIcon />
               A new version of the staking is in preparation
      </Alert>
      <StakeBoard/>
      <HStack>
      <Text
        as="h2"
        fontSize="lg"
        fontWeight="thin"
        textAlign={{ base: 'center', md: 'center' }}
        color="KleoColor.white"
      >
      You can stake your $MIX token to earn more $MIX
      </Text>
      <Tooltip label='staked tokens will be locked for the indicated time' fontSize='md'>
        <InfoOutlineIcon />
      </Tooltip>
      </HStack>
      <Text
        as="h2"
        fontSize="lg"
        fontWeight="thin"
        textAlign={{ base: 'center', md: 'center' }}
        color="KleoColor.white"
      >
      The staking is in beta, to claim your reward
      </Text>
      <Text
        as="h2"
        fontSize="lg"
        fontWeight="thin"
        textAlign={{ base: 'center', md: 'center' }}
        color="KleoColor.white"
      >
      you need to enter the reward address here:
      </Text>

      <StakeForm config={stakeconfig} />

    </VStack>
    </Box>
  );
};
