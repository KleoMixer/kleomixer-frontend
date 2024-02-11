import { useRouter } from 'next/router';
import { Box, Button, useBreakpointValue } from '@chakra-ui/react';
import { useCallback, FC } from 'react';
import { ActionButton } from './ActionButton';
import { Authenticated } from './core/Authenticated';
import { AlephiumConnectButton } from '@alephium/web3-react';
import { SocialMediaIcons } from './SocialMediaIcons';

interface HeaderMenuButtonsProps {
  enabled: string[];
}

export const HeaderMenuButtons: FC<HeaderMenuButtonsProps> = ({ enabled }) => {
  const router = useRouter();

  const isContentCentered = useBreakpointValue({ base: true, md: false });

  const handleMixerClick = useCallback(() => {
    router.push('/mixer');
  }, [router]);


    const handleStakeClick = useCallback(() => {
      router.push('/stake');
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
      {enabled.includes('mixer') && (
        <ActionButton onClick={handleMixerClick}>Mixer</ActionButton>
      )}
      {enabled.includes('stake') && (
        <ActionButton disabled={true} onClick={handleStakeClick}>Stake</ActionButton>
      )}
      {enabled.includes('docs') && (
        <ActionButton onClick={handleDocsClick}>Docs</ActionButton>
      )}

      <Authenticated
        fallback={<AlephiumConnectButton />}
        spinnerCentered={isContentCentered}
      >
      <AlephiumConnectButton />
      </Authenticated>
    </Box>
  );
};
