import { Box, Heading, VStack } from '@chakra-ui/react';
import KakaologinButton from './kakaoLoginButton';

const Login = () => {
  return (
    // NOTE : center에 위치하는 컨텐츠의 최대 너비는 모바일 화면을 기준으로 600px으로 설정함 (논의 필요...)
    <VStack w={'100%'} maxW={'600px'} spacing={'4'} alignItems={'stretch'}>
      <Heading as={'span'} fontSize={'2xl'}>
        로그인 페이지
      </Heading>
      <Box h={'20'} w={'20'} mx={'auto'} bgColor={'orange'}>
        로고
      </Box>
      <KakaologinButton />
    </VStack>
  );
};

export default Login;
