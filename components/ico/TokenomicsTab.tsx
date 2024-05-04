import { Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer } from '@chakra-ui/react';
export const TokenomicsTab = () => {
  return (
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
  );
};
