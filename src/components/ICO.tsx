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
import { HomeSectionTitle } from './HomeSectionTitle';
import { BuyForm } from './BuyForm';
import ProgressBar from "@ramonak/react-progress-bar";

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

        <Box
        border={1}
        borderRadius="2xl"
        bgColor="KleoColor.dark.lighter"
        boxShadow="0 0 25px"
        color="KleoColor.shadowColor"
        textAlign={{ base: 'center', md: 'center' }}
        bgGradient="linear-gradient(90deg, KleoColor.dark.base 0%, KleoColor.dark.lighter 70%);"
        mb={6}
        >

        <VStack
      spacing={1}
      textAlign={{ base: 'center', md: 'center' }}
      >
      <Text
        as="h2"
        fontSize="lg"
        fontWeight="thin"
        textAlign={{ base: 'center', md: 'center' }}
        color="KleoColor.white"
      >
      Buy your $MIX token to support us and to be able to mix your crypto!
      </Text>
      <Text
        as="h2"
        fontSize="lg"
        fontWeight="thin"
        textAlign={{ base: 'center', md: 'center' }}
        color="KleoColor.white"
      >
      $MIX Price: 0.0125 ALPH
      </Text>
      <Text
        as="h2"
        fontSize="lg"
        fontWeight="thin"
        textAlign={{ base: 'center', md: 'center' }}
        color="KleoColor.white"
      >
      $MIX Contract:{''}
      </Text>{''}
      <VStack
    spacing={3}
    textAlign={{ base: 'center', md: 'center' }}
    >
      <Text
        as="a"
        color="KleoColor.color3.base"
        href="https://explorer.alephium.org/addresses/yweuj67dNGcVu81BEXfdSs2yTDJ2gJBQPwkDbgksCUyD"
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        yweuj67dNGcVu81BEXfdSs2yTDJ2gJBQPwkDbgksCUyD
      </Text>{''}
      <ProgressBar completed={18000} maxCompleted={25000} customLabel={"Total tokens sold: "} animateOnRender={true} height="20px" width="500px" bgColor="#65e7a9" />
      <BuyForm/>
      </VStack>

      <Text
        as="h2"
        fontSize="lg"
        fontWeight="thin"
        textAlign={{ base: 'center', md: 'center' }}
        color="KleoColor.white"
      >
        Our pre-sale end in
      </Text>

      <Timer deadline="11 Mar 2024 19:00:00 GMT" />

      </VStack>
      </Box>

      <HomeSectionTitle title="Tokenomics" />

      <HStack>
      <Chart
      chartType="PieChart"
      data={Supplydata}
      options={Supplyoptions}
      width={"500px"}
      height={"500px"}
      />

      <TableContainer fontFamily="Poppins, sans-serif">
  <Table fontFamily="Poppins, sans-serif" variant='simple'>
    <Thead>
      <Tr>
        <Th>Allocation name</Th>
        <Th>Token numbers</Th>
        <Th>Percentage</Th>
        <Th>Informations</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>Reserve</Td>
        <Td>500 000</Td>
        <Td>5%</Td>
        <Td>to maintain token stability</Td>
      </Tr>
      <Tr>
        <Td>Marketing</Td>
        <Td>500 000</Td>
        <Td>5%</Td>
        <Td>for promotional activities to enhance visibility and adoption</Td>
      </Tr>
      <Tr>
        <Td>Staking</Td>
        <Td>1 500 000</Td>
        <Td>15%</Td>
        <Td>for staking rewards, fostering active participation and network security</Td>
      </Tr>
      <Tr>
        <Td>Pre-Sale</Td>
        <Td>2 000 000</Td>
        <Td>20%</Td>
        <Td>for early supporters and contributors during the pre-sale phase</Td>
      </Tr>
      <Tr>
        <Td>Team</Td>
        <Td>1 500 000</Td>
        <Td>15%</Td>
        <Td>allocated for team members, with a structured release plan (25% unlocked each years)</Td>
      </Tr>
      <Tr>
        <Td>Liquidity</Td>
        <Td>1 500 000</Td>
        <Td>15%</Td>
        <Td>to providing liquidity, ensuring smooth trading experiences</Td>
      </Tr>
      <Tr>
        <Td>Rewards</Td>
        <Td>2 500 000</Td>
        <Td>25%</Td>
        <Td>to users of the mixer, encouraging engagement and utilization</Td>
      </Tr>
    </Tbody>
    <Tfoot>
    <Tr>
      <Th>Total</Th>
      <Th>10 000 000</Th>
      <Th>100%</Th>
      <Th></Th>
    </Tr>
    </Tfoot>
  </Table>
</TableContainer>
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

      <TableContainer fontFamily="Poppins, sans-serif">
      <Table variant='simple'>
      <Thead>
      <Tr>
        <Th>Allocation name</Th>
        <Th>Token numbers</Th>
        <Th>Percentage</Th>
        <Th>Informations</Th>
      </Tr>
      </Thead>
      <Tbody>
      <Tr>
        <Td>Burn</Td>
        <Td>6</Td>
        <Td>5%</Td>
        <Td>contributing to the overall scarcity and value appreciation of our token</Td>
      </Tr>
      <Tr>
        <Td>Staking</Td>
        <Td>24</Td>
        <Td>20%</Td>
        <Td>encouraging active participation and loyalty within our community</Td>
      </Tr>
      <Tr>
        <Td>Team</Td>
        <Td>90</Td>
        <Td>75%</Td>
        <Td>ensuring continuous improvement, innovation, and the delivery of exceptional services</Td>
      </Tr>
      </Tbody>
      <Tfoot>
      <Tr>
        <Th>Total</Th>
        <Th>120</Th>
        <Th>100%</Th>
        <Th></Th>
      </Tr>
    </Tfoot>
      </Table>
      </TableContainer>
      </HStack>
    </VStack>
    </Box>
  );
};
