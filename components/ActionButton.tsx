import { Box, BoxProps } from '@chakra-ui/react';
import { FC, PropsWithChildren, useCallback } from 'react';

interface ActionButtonProps extends BoxProps {
  onClick: () => void;
  isFullWidth?: boolean;
  disabled?: boolean;
}

export const ActionButton: FC<PropsWithChildren<ActionButtonProps>> = ({
  children,
  onClick,
  isFullWidth = false,
  disabled = false,
  ...props
}) => {
  const handleClick = useCallback(() => {
    if (!disabled) {
      onClick?.();
    }
  }, [disabled, onClick]);

  return (
    <Box
      as="button"
      borderColor="KleoColor.color2.darker"
      borderWidth={3}
      bgColor="transparent"
      py={2}
      px={6}
      rounded="xl"
      fontWeight="normal"
      cursor={disabled ? 'not-allowed' : 'pointer'}
      color="KleoColor.white"
      userSelect="none"
      _hover={!disabled ? { bg: 'KleoColor.color2.darker' } : {}}
      transition="background-color .3s"
      width={isFullWidth ? '100%' : 'auto'}
      onClick={handleClick}
      opacity={!disabled ? 1 : 0.5}
      {...props}
    >
      {children}
    </Box>
  );
};
