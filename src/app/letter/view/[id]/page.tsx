'use client';

import { useParams } from 'next/navigation';
import Header from '@/component/layout/header';
import {
  Box,
  VStack,
  Heading,
  Img,
  Button,
  HStack,
} from '@chakra-ui/react';

const LetterDetailPage = () => {
  const params = useParams();
  //@todo letterId로 편지 정보를 가져와서 렌더링

  return (
    <VStack gap={'1rem'} w={'100%'} h={'100vh'}>
      <Header />
      <VStack>
        <Heading size={'lg'}>제목</Heading>
        <Box w={"50vw"} h={"100%"} bg={"red"}>
          <Img />
        </Box>
        <HStack>
          <Button>삭제하기</Button>
          <Button>공유하기</Button>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default LetterDetailPage;
