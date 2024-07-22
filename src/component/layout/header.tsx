import { Box, HStack } from '@chakra-ui/react';

const Header = () => {
  return (
    <HStack
      as={'header'}
      h={'4.5rem'}
      w={'100%'}
      px={'6'}
      justify="space-between"
      bgColor={'orange'}
    >
      <Box>메뉴</Box>
      <Box>로고</Box>
      <Box>알림</Box>
    </HStack>
  );
};

export default Header;
