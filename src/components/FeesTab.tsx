import { Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer, } from '@chakra-ui/react';

export const FeesTab = () => {
  return (
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
  );
};
