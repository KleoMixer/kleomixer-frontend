import { Box, Text, VStack, StackDivider } from '@chakra-ui/react';

export const Title = () => {

  return (
    <Box width="100%">
    <VStack
    divider={<StackDivider borderColor='gray.200' />}
    >
    <Text
        as="h1"
        fontSize={{ base: '2xl', md: '3xl', lg: '5xl' }}
        fontWeight="black"
        lineHeight="shorter"
        mb={5}
        textAlign={{ base: 'center', md: 'center' }}
      >
      Crypto Mixer available NOW{' '}
      </Text>
      <Text
        as="h1"
        fontSize={{ base: '2xl', md: '3xl', lg: '5xl' }}
        textAlign={{ base: 'center', md: 'center' }}
        fontWeight="black"
        lineHeight="shorter"
        mb={5}
      >
        Welcome to the{' '}
        <Text
          as="a"
          color="KleoColor.color3.base"
          href="https://kleomixer.com"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          First Mixer
        </Text>{' '}
        on the{' '}
        <Text
          as="a"
          color="KleoColor.color2.base"
          href="https://alephium.org"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          Alephium
        </Text>{' '}
        blockchain.
      </Text>
      <Text
        as="h2"
        fontSize="lg"
        fontWeight="thin"
        textAlign={{ base: 'center', md: 'left' }}
      >
      KleoMixer is a solution to mix Crypto. We believe that financial privacy is possible and necessary.{' '}
      </Text>
      </VStack>
      <Text
        as="h2"
        fontSize="lg"
        fontWeight="thin"
        textAlign={{ base: 'center', md: 'center' }}
      >
      The KleoMixer system allows anyone to send Crypto and receive new Crypto in return at another address.{' '}
      </Text>
    </Box>
  );
};
