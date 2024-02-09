import { FC, ReactElement, PropsWithChildren } from 'react';
import { Spinner, Flex } from '@chakra-ui/react';
import { useWallet } from '@alephium/web3-react'

interface AuthenticatedProps {
  fallback?: ReactElement;
  noSpinner?: boolean;
  spinnerCentered?: boolean;
}

export const Authenticated: FC<PropsWithChildren<AuthenticatedProps>> = ({
  children,
  fallback = null,
  noSpinner = false,
  spinnerCentered = false,
}) => {
  const { connectionStatus } = useWallet()

  if (connectionStatus === 'connecting')
    return noSpinner ? null : (
      <Flex justify={spinnerCentered ? 'center' : 'flex-start'}>
        <Spinner
          thickness="3px"
          speed="0.4s"
          color="KleoColor.color2.base"
          size="md"
          mt={3}
        />
      </Flex>
    );

  if (connectionStatus === 'disconnected') return fallback;

  return <>{children}</>;
};
