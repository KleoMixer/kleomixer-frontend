import { Container, Box, Text } from '@chakra-ui/react';

export const Footer = () => {
  return (
    <Box
      height="120px"
      bgColor="KleoColor.dark.base"
      color="KleoColor.white"
      display="flex"
      alignItems="center"
      textAlign="center"
    >
      <Container
        maxW="container.xl"
        fontSize="sm"
        fontWeight="normal"
        textAlign="center"
        alignItems="center"
      >
        <Box>KleoMixer (v0.0.75)</Box>

        <Box fontSize="xs" fontWeight="bold">
          <Text
            as="a"
            color="KleoColor.color3.base"
            href="https://kleomixer.com"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            kleomixer.com
          </Text>
        </Box>
      </Container>
    </Box>
  );
};
