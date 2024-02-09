import { Box, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, StatGroup } from '@chakra-ui/react';

export const StatsBoard = () => {

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
      <StatLabel>Pending Transactions</StatLabel>
      <StatNumber>0</StatNumber>
      <StatHelpText>
        <StatArrow type='increase' />
        0%
      </StatHelpText>
    </Stat>

    <Stat>
      <StatLabel>Transactions Amount</StatLabel>
      <StatNumber>0</StatNumber>
      <StatHelpText>
        <StatArrow type='increase' />
        0%
      </StatHelpText>
    </Stat>

    <Stat>
      <StatLabel>Total Mixed</StatLabel>
      <StatNumber>$0</StatNumber>
      <StatHelpText>
        <StatArrow type='increase' />
        0%
      </StatHelpText>
    </Stat>
  </StatGroup>
    </Box>
  );
};
