import NextLink from 'next/link';
import { Box, Text, Image } from '@chakra-ui/react';

export const Logo = () => {
  return (
    <NextLink href="/">
      <Box
        display="flex"
        alignItems="center"
        gap={2}
        position="relative"
        userSelect="none"
      >
      <Image id="imgLogo" alt="" borderRadius={15} src={'/logo.png'} width={75} height={75} />
        <Text
          position="absolute"
          right="0"
          top="0"
          fontSize="10px"
          fontWeight="semibold"
          px={1.5}
          borderRadius="sm"
          color="KleoColor.color2.base"
        >
          mainnet
        </Text>

        <Text
          as="span"
          cursor="pointer"
          mb={0}
          fontSize="4xl"
          fontWeight="black"
          color="KleoColor.white"
        >
          KleoMixer
        </Text>
      </Box>
    </NextLink>
  );
};
