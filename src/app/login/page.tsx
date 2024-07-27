'use client';

import { Box, Button, Heading, HStack, Input, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const Login = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const router = useRouter();

  return (
    // NOTE : center에 위치하는 컨텐츠의 최대 너비는 모바일 화면을 기준으로 600px으로 설정함 (논의 필요...)
    <VStack w={'100%'} maxW={'600px'} spacing={'4'} alignItems={'stretch'}>
      <HStack justify={'center'}>
        <Heading as={'span'} fontSize={'2xl'}>
          로그인 페이지
        </Heading>
      </HStack>
      <Box h={'20'} w={'20'} mx={'auto'} bgColor={'orange'}>
        로고
      </Box>
      <Box>아이디</Box>
      <Input value={id} onChange={(e) => setId(e.target.value)} />
      <Box>비밀번호</Box>
      <Input value={pw} onChange={(e) => setPw(e.target.value)} />
      <Button
        onClick={async () => {
          if (id === '' || pw === '') {
            alert('아이디와 비밀번호를 입력해주세요');
            return;
          }
          try {
            const res = await axios.post(
              `${process.env.NEXT_PUBLIC_API_URL}/login`,
              {
                username: id,
                password: pw,
              }
            );
            localStorage.setItem('token', res?.data.token);
            alert('로그인에 성공했습니다');
            router.push('/');
          } catch (e) {
            alert('로그인에 실패했습니다');
          }
        }}
      >
        로그인
      </Button>
    </VStack>
  );
};

export default Login;
