import { Box, VStack, Radio, RadioGroup, HStack, FormControl, FormLabel } from '@chakra-ui/react';
import { CryptoImage } from './CryptoImage';

export const CryptoChooser = () => {

  return (
    <Box
      display="flex"
      gap={5}
      alignItems="center"
      justifyContent={{ base: 'center', md: 'flex-start' }}
    >
    <VStack
      spacing={4}
    >
      <FormControl as='fieldset'>
        <FormLabel as='legend'>Select wich crypto you want to mix:</FormLabel>
        <CryptoImage/>
        <RadioGroup defaultValue='ALPH'>
          <HStack spacing='24px'>
            <Radio value='ALPH'>ALPH</Radio>
          </HStack>
        </RadioGroup>
      </FormControl>
      </VStack>
    </Box>
  );
};
