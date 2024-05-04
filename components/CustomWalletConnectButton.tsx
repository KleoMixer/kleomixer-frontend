import { AlephiumConnectButton, useBalance, useWallet } from '@alephium/web3-react';
import { ActionButton } from './ActionButton';
import { shortenHash } from '../utils/shortenHash';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  Button
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

export const CustomWalletConnectButton = () => {
  const { balance } = useBalance();
  const bal = balance?.balance ?? "0";

  return (
    <AlephiumConnectButton.Custom>
      {({ isConnected, disconnect, show, account }) => {
        return isConnected ? (
            <Menu>
              <MenuButton
              as={Button}
              borderColor="KleoColor.color2.darker"
              borderWidth={3}
              py={2}
              px={4}
              _hover={{ bg: 'KleoColor.color2.darker' }}
              _expanded={{ bg: 'KleoColor.color2.darker' }}
              bgColor="transparent"
              rounded="xl"
              >
              Profile <ChevronDownIcon />
              </MenuButton>
                <MenuList bgColor="KleoColor.dark.base" _hover={{ bg: 'KleoColor.dark.lighter' }}>
                  <MenuGroup title={String(shortenHash(account?.address ?? '???'))} _hover={{ bg: 'KleoColor.dark.lighter' }}>
                    <MenuItem _hover={{ bg: 'KleoColor.dark.lighter' }}>{(parseFloat(bal) / 1000000000000000000).toFixed(2)} $ALPH</MenuItem>
                  </MenuGroup>
                <MenuDivider />
                <MenuItem _hover={{ bg: 'KleoColor.dark.lighter' }} onClick={disconnect}>Disconnect</MenuItem>
                </MenuList>
              </Menu>
        ) : (
            <ActionButton onClick={show ? show : () => {console.log('Connect Error');}}>Connect</ActionButton>
        )
      }}
    </AlephiumConnectButton.Custom>
  );
};
