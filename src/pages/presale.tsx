import type { NextPage } from 'next';
import { Box } from '@chakra-ui/react';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { ICO } from '../components/ICO';

const Presale: NextPage = () => {
  return (
    <MainLayout>
      <HeaderMenu>
        <HeaderMenuButtons enabled={['auth', 'presale', 'mixer', 'stake', 'docs']} />
      </HeaderMenu>
      <Box
        display="flex"
        justifyContent="space-between"
        mt={{ base: 8, xl: 12, '2xl': 24 }}
      >
        <ICO />
      </Box>
    </MainLayout>
  );
};

export default Presale;
