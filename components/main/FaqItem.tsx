import { FC } from 'react';
import {
  Box,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  AccordionItem,
} from '@chakra-ui/react';

interface FaqItemProps {
  question: string;
  answer: string;
}

export const FaqItem: FC<FaqItemProps> = ({ question, answer }) => {
  return (
    <AccordionItem
      border={0}
      borderRadius="2xl"
      bgColor="KleoColor.dark.lighter"
      boxShadow="0 0 25px"
      color="KleoColor.shadowColor"
      bgGradient="linear-gradient(90deg, KleoColor.dark.base 0%, KleoColor.dark.lighter 70%);"
      mb={6}
    >
      <AccordionButton
        _focus={{ outline: 'none' }}
        color="KleoColor.white"
        padding={6}
      >
        <Box flex="1" textAlign="left">
          {question}
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel color="KleoColor.white">{answer}</AccordionPanel>
    </AccordionItem>
  );
};
