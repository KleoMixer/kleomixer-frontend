import { Container, Box, Text } from '@chakra-ui/react';

export const Footer = () => {
  return (
    <Box
      height="120px"
      bgColor="KleoColor.dark.base"
      color="KleoColor.white"
      display="flex"
      alignItems="center"
    >
      <Container
        maxW="container.xl"
        fontSize="sm"
        fontWeight="normal"
        textAlign="center"
      >
        <Box>KleoMixer (v0.0.71)</Box>

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
