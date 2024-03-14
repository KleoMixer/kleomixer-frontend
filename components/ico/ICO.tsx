import { Box, HStack, VStack, Text, Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer, } from '@chakra-ui/react';
import { Timer } from './Timer';
import { Chart } from "react-google-charts";
import { HomeSectionTitle } from '../HomeSectionTitle';
import { BuyForm } from './BuyForm';
import { FeesTab } from './FeesTab';
import { TokenomicsTab } from './TokenomicsTab';
import ProgressBar from "@ramonak/react-progress-bar";
import { mixicoconfig } from '@/services/utils'

export const Supplydata = [
  ["Allocation", "Percentage"],
  ["Reserve", 500000],
  ["Marketing", 500000],
  ["Staking", 1500000],
  ["Pre-Sale", 2000000],
  ["Team", 1500000],
  ["Liquidity", 1500000],
  ["Rewards", 2500000],
];

export const Supplyoptions = {
  is3D: false,
  pieHole: 0.5,
  backgroundColor:"transparent",
  legend: 'none',
  fontFamily: "Poppins, sans-serif",
};

export const Feesdata = [
  ["Allocation", "Percentage"],
  ["Burn", 6],
  ["Staking", 24],
  ["Team", 90],
];

export const Feesoptions = {
  is3D: false,
  pieHole: 0.5,
  backgroundColor:"transparent",
  legend: 'none',
  fontFamily: "Poppins, sans-serif",
};

export const ICO = () => {

  return (
    <Box width="100%">
    <VStack
  spacing={2}
  >

        <HomeSectionTitle title="Pre-Sale" />

        <Text
          as="h1"
          fontSize={{ base: '2xl', md: '3xl', lg: '5xl' }}
          textAlign={{ base: 'center', md: 'left' }}
          fontWeight="black"
          lineHeight="shorter"
          mb={5}
        >
        SOLD OUT
        </Text>
        <ProgressBar completed={100} maxCompleted={100} customLabel={"2 000 000 / 2 000 000"} animateOnRender={true} height="20px" width="500px" bgColor="#65e7a9" />

      <HomeSectionTitle title="Tokenomics" />

      <HStack>
      <Chart
      chartType="PieChart"
      data={Supplydata}
      options={Supplyoptions}
      width={"500px"}
      height={"500px"}
      />

      <TokenomicsTab/>

      </HStack>
      <HomeSectionTitle title="Fees Allocation" />

      <HStack>

        <Chart
        chartType="PieChart"
        data={Feesdata}
        options={Feesoptions}
        width={"400px"}
        height={"400px"}
        />

        <FeesTab/>

      </HStack>
    </VStack>
    </Box>
  );
};
