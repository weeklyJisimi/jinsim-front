import { Box, Center, Heading, HStack, Img } from '@chakra-ui/react';
import Link from 'next/link';

const Header = () => {
  return (
    <HStack as={'header'} h={16} w={'100%'} px={'6'} mt={'6'}>
      <Center flex={1} w={'100%'}>
        <Link href={'/'}>
          <Img src={'/logo.png'} alt={'logo'} h={'100px'} />
        </Link>
      </Center>
    </HStack>
  );
};

export default Header;
