import { useRouter } from 'next/router';
import { Box, Badge, useBreakpointValue } from '@chakra-ui/react';
import { useCallback, FC } from 'react';
import { ActionButton } from './ActionButton';
import { CustomWalletConnectButton } from './CustomWalletConnectButton';
import { Authenticated } from './core/Authenticated';
import { SocialMediaIcons } from './main/SocialMediaIcons';

interface HeaderMenuButtonsProps {
  enabled: string[];
}

export const HeaderMenuButtons: FC<HeaderMenuButtonsProps> = ({ enabled }) => {
  const router = useRouter();

  const isContentCentered = useBreakpointValue({ base: true, md: false });

    const handleStakeClick = useCallback(() => {
      router.push('/stake');
    }, [router]);

    const handleMixerClick = useCallback(() => {
      router.push('/mixer');
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
      {enabled.includes('mixer') && (
        <ActionButton onClick={handleMixerClick}><Badge ml='1' colorScheme='purple'>Updated</Badge> Mixer</ActionButton>
      )}
      {enabled.includes('stake') && (
        <ActionButton onClick={handleStakeClick}>Stake</ActionButton>
      )}
      {enabled.includes('docs') && (
        <ActionButton onClick={handleDocsClick}>Docs</ActionButton>
      )}

      <Authenticated
        fallback={<CustomWalletConnectButton />}
        spinnerCentered={isContentCentered}
      >
      <CustomWalletConnectButton />
      </Authenticated>
    </Box>
  );
};
