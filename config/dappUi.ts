export const dappHostname = process.env.NEXT_PUBLIC_DAPP_HOST;

export const defaultMetaTags = {
  title: 'KleoMixer',
  description:
    'KleoMixer is a fully decentralised protocol for private transactions on #Alephium',
  image: `${dappHostname}/og-image.png`,
};

export const faq = [
  {
    question: 'What is a Crypto Mixer?',
    answer: 'A Crypto Mixer allow you to send some crypto to another wallet annonymously',
  },
  {
    question: 'Wich crypto will be available?',
    answer: 'On the first phase only $ALPH will be available, others tokens will be added after',
  },
];

export const roadmap = [
  {
    title: 'Q1 2024',
    points: [
      'Formations of the core team',
      'Front and Backend website development',
      'Creation of the $MIX Token',
    ],
  },
  {
    title: 'Q1 2024',
    points: [
      'Smart Contract development',
      'Pre-sale $MIX Token',
      'Staking for the $MIX Token',
      'Dapp available on the testnet',
    ],
  },
  {
    title: 'Q2 2024',
    points: [
      'Dapp available for everyone on mainnet',
      'Marketing operations',
      'Cross Chain',
    ],
  },
];
