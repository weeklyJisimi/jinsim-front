import { Box, Center, Heading, HStack } from '@chakra-ui/react';

const Header = ({ title }: { title?: string }) => {
  return (
    <HStack as={'header'} h={16} w={'100%'} px={'6'} bgColor={'orange'}>
      <Box flex={1}>
        <Heading as="h5" size="sm">
          {title ?? ''}
        </Heading>
      </Box>
      <Center flex={1} w={'100%'}>
        로고
      </Center>
      <Box flex={1} />
    </HStack>
  );
};

export default Header;
