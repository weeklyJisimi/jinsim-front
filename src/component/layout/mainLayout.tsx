import { Box, Center, VStack } from '@chakra-ui/react';
import Header from './header';

const MainLayout = ({ children }: { children: React.ReactNode }) => (
  <VStack
    spacing={'0'}
    h={'fit-content'}
    w={'100vw'}
    minH={'100vh'}
    // maxW={'1280px'} // Note : 왜 1280px로 설정했는지?
  >
    {/*<Header />*/}
    <Center as={'main'} flexGrow={'1'} w={'100%'} px={'6'}>
      {children}
    </Center>
    {/*<Box*/}
    {/*  as={'footer'}*/}
    {/*  h={'32'}*/}
    {/*  w={'100%'}*/}
    {/*  mb={'20'}*/}
    {/*  mt={'12'}*/}
    {/*  bgColor={'orange'}*/}
    {/*>*/}
    {/*  footer*/}
    {/*</Box>*/}
  </VStack>
);

export default MainLayout;
