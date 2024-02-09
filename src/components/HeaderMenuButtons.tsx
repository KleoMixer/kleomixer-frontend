import { useRouter } from 'next/router';
import { Box, Button } from '@chakra-ui/react';
import { useCallback, FC } from 'react';
import { ActionButton } from './ActionButton';
import { SocialMediaIcons } from './SocialMediaIcons';
import { AlephiumConnectButton } from '@alephium/web3-react'

interface HeaderMenuButtonsProps {
  enabled: string[];
}

export const HeaderMenuButtons: FC<HeaderMenuButtonsProps> = ({ enabled }) => {
  const router = useRouter();

  const handleMixerClick = useCallback(() => {
    router.push('/mixer');
  }, [router]);


    const handlePresaleClick = useCallback(() => {
      router.push('/presale');
    }, [router]);

  const handleDocsClick = useCallback(() => {
    window.open(
      'https://docs.kleomixer.com/',
      '_blank'
    );
  }, [router]);

  return (
    <Box
      display="flex"
      gap={5}
      alignItems="center"
      sx={{
        '@media screen and (max-width: 515px)': {
          flexDirection: 'column',
        },
      }}
    >

      <SocialMediaIcons />

      {enabled.includes('presale') && (
        <ActionButton onClick={handlePresaleClick}>Pre-Sale</ActionButton>
      )}
      {enabled.includes('docs') && (
        <ActionButton onClick={handleDocsClick}>Docs</ActionButton>
      )}
      {enabled.includes('auth') && <AlephiumConnectButton />}
    </Box>
  );
};