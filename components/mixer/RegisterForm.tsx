import { useCallback } from 'react';
import { useRouter } from 'next/router';
import { ActionButton } from '../ActionButton';
import {
  Input,
  useBreakpointValue,
  VStack,
  Stack,
  Box,
} from '@chakra-ui/react';
import { Authenticated } from '../core/Authenticated';
import { AlephiumConnectButton } from '@alephium/web3-react';

export const RegisterForm = () => {
  const router = useRouter();

  const isContentCentered = useBreakpointValue({ base: true, md: false });

  const handleMint = useCallback(() => {
    router.push('/mixer');
  }, [router]);

  return (
    <>
      <Box
        display="flex"
        gap={5}
        alignItems="center"
        justifyContent={{ base: 'center', md: 'flex-start' }}
      >
      <VStack>
        <Stack spacing={8} direction='row'>
        <Authenticated
          fallback={
            <Box
              mt={6}
              display="flex"
              justifyContent={isContentCentered ? 'center' : 'flex-start'}
            >
              <AlephiumConnectButton />
            </Box>
          }
          spinnerCentered={isContentCentered}
        >
        <ActionButton
          onClick={handleMint}
        >
          {'Register'}
        </ActionButton>
        </Authenticated>
        </Stack>


                <Stack spacing={8} direction='row'>
                <Input maxW='600px' variant='flushed' placeholder='Enter the key' />

                <Authenticated
                  fallback={
                    <Box
                      mt={6}
                      display="flex"
                      justifyContent={isContentCentered ? 'center' : 'flex-start'}
                    >
                      <AlephiumConnectButton />
                    </Box>
                  }
                  spinnerCentered={isContentCentered}
                >
                <ActionButton
                  onClick={handleMint}
                >
                  {'Accept Key'}
                </ActionButton>
                </Authenticated>
                </Stack>

        </VStack>
      </Box>
    </>
  );
};
