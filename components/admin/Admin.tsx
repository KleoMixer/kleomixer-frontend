import { Box, VStack, Text } from '@chakra-ui/react';
import { HomeSectionTitle } from '../HomeSectionTitle';
import { AdminIcoForm } from './AdminIcoForm';
import { AdminStakeForm } from './AdminStakeForm';
import { mixicoconfig, stakeconfig } from '@/services/utils'

export const Admin = () => {

  return (
    <Box width="100%">
    <VStack
  spacing={2}
  >

        <HomeSectionTitle title="Admin Section" />

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
      You can manage the ICO smart contract with theses buttons under
      </Text>

      <AdminIcoForm config={mixicoconfig} />
      <AdminStakeForm config={stakeconfig} />

      </VStack>
      </Box>
    </VStack>
    </Box>
  );
};
