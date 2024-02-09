import '@fontsource/poppins/100.css';
import '@fontsource/poppins/200.css';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';
import '@fontsource/poppins/900.css';

import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../config/chakraTheme';
import { SWRConfig } from 'swr';
import { useToast } from '@chakra-ui/react';
import { AlephiumWalletProvider } from '@alephium/web3-react';
import { tokenFaucetConfig } from '@/services/utils';
import { useCallback } from 'react';

const toastId = 'kleomixer-error-toast';

const KleoMixerDapp = ({ Component, pageProps }: AppProps) => {
  const toast = useToast();

  const handleErrorToast = useCallback(() => {
    if (!toast.isActive(toastId)) {
      toast({
        id: toastId,
        variant: 'subtle',
        title: 'API error!',
        description:
          'The API is not responding at the moment. Please try later.',
        status: 'error',
        duration: 10000,
        isClosable: true,
      });
    }
  }, [toast]);

  return (
    <SWRConfig value={{ onError: handleErrorToast }}>
      <ChakraProvider theme={theme}>
      <AlephiumWalletProvider theme="midnight" network={tokenFaucetConfig.network} addressGroup={tokenFaucetConfig.groupIndex}>
        <Component {...pageProps} />
      </AlephiumWalletProvider>
      </ChakraProvider>
    </SWRConfig>
  );
};

export default KleoMixerDapp;
