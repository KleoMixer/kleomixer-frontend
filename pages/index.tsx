import type { NextPage } from 'next';
import { Box } from '@chakra-ui/react';
import { MainLayout } from '../components/main/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { Title } from '../components/Title';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { Faq } from '../components/main/Faq';
import { Roadmap } from '../components/main/Roadmap';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <HeaderMenu>
        <HeaderMenuButtons enabled={['mixer', 'stake', 'docs']} />
      </HeaderMenu>
      <Box
        display="flex"
        justifyContent="space-between"
        mt={{ base: 8, xl: 12, '2xl': 24 }}
      >
        <Title />

      </Box>
      <Faq />
      <Roadmap />
    </MainLayout>
  );
};

export default Home;
