import { Box, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, StatGroup, useBreakpointValue } from '@chakra-ui/react';

export const StakeBoard = () => {

  const isContentCentered = useBreakpointValue({ base: true, md: false });

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent={{ base: 'center', md: 'center' }}
      borderColor="KleoColor.color2.darker"
      borderWidth={5}
      bgColor="transparent"
      py={2}
      px={5}
      rounded="xl"
      fontWeight="normal"
      color="KleoColor.white"
      userSelect="none"
      transition="background-color .3s"
      width="auto">
  <StatGroup>
    <Stat>
      <StatLabel>Rewards Delivered</StatLabel>
      <StatNumber>124045</StatNumber>
      <StatHelpText>
        <StatArrow type='increase' />

      </StatHelpText>
    </Stat>

    <Stat>
      <StatLabel>Total Staked</StatLabel>
      <StatNumber>523881</StatNumber>
      <StatHelpText>
        <StatArrow type='increase' />

      </StatHelpText>
    </Stat>

    <Stat>
      <StatLabel>Total Stakers</StatLabel>
      <StatNumber>33</StatNumber>
      <StatHelpText>
        <StatArrow type='increase' />

      </StatHelpText>
    </Stat>
  </StatGroup>
    </Box>
  );
};
