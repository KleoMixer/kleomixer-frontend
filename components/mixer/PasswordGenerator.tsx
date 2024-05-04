import { Box, HStack, NumberInput, Input, VStack, Text, useToast, Image, Stack, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper } from '@chakra-ui/react';
import { useState } from 'react';
import { ActionButton } from '../ActionButton';

export const PasswordGenerator = () => {

  const [password, setPassword] = useState("");
  const toast = useToast();
  const [passwordLength, setPasswordLength] = useState(32);

  const generatePassword = () => {
      let charset = "";
      let newPassword = "";

      charset += "!@#$%^&*()";
      charset += "0123456789";
      charset += "abcdefghijklmnopqrstuvwxyz";
      charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

      for (let i = 0; i < passwordLength; i++) {
          newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
      }

      setPassword(newPassword);
  };


    const setPasswordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
    };

  const copyToClipboard = () => {
      const el = document.createElement("textarea");
      el.value = password;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      toast({
      title: 'Coppied to clipboard',
      status: 'info',
      duration: 2000,
      isClosable: true,
    })
  };

  return (
    <Box
      display="flex"
      gap={5}
      alignItems="center"
      justifyContent={{ base: 'center', md: 'center' }}
      borderColor="KleoColor.color2.darker"
      borderWidth={5}
      bgColor="transparent"
      py={2}
      px={6}
      rounded="xl"
      fontWeight="normal"
      color="KleoColor.white"
      userSelect="none"
      transition="background-color .3s"
      width="auto">
    <VStack>
    <Text
    as="a"
    color="KleoColor.color3.base">Generate your Key</Text>
    <HStack>
    <Text>Key Length:</Text>
    <NumberInput
      onChange={(newPasswordLength) => setPasswordLength(Number(newPasswordLength))}
      value={passwordLength}
      variant='flushed'
      color='white'
      size='md'
      min={32}
      max={256}
    >
    <NumberInputField />
  <NumberInputStepper>
    <NumberIncrementStepper />
    <NumberDecrementStepper />
  </NumberInputStepper>
  </NumberInput>
  </HStack>
  <HStack>
    <Input
        value={password}
        onChange={setPasswordHandler}
        variant='flushed'
        color='white'
        placeholder='Generated Key'
        size='md'/>
        <ActionButton onClick={copyToClipboard}>Copy</ActionButton>
    </HStack>
<ActionButton onClick={generatePassword}>Generate</ActionButton>
    </VStack>
    </Box>
  );
};
