import { Box, Image, Stack } from '@chakra-ui/react';

export const CryptoImage = () => {
  return (
    <Box
    display="flex"
    gap={5}
    ps={5}
    alignItems="center"
    justifyContent={{ base: 'center', md: 'flex-start' }}
  >
      <Stack direction='row' spacing='50px'>
      <Image
        objectFit='cover'
        boxSize='40px'
        src='/alph.png'
        alt='ALPH'
      />
      </Stack>
      </Box>
  );
};
