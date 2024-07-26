'use client';

import { useParams, useRouter } from 'next/navigation';
import Header from '@/component/layout/header';
import { VStack, Heading, Image, Button, HStack } from '@chakra-ui/react';
import ShareLetterButton from '@/component/common/shareLetter';
import Link from 'next/link';

const LetterDetailPage = () => {
  const params = useParams();

  const removeLetter = () => {
    //@todo letterId로 편지 삭제
    alert(`${params?.id}가 삭제되었습니다.`);
  };

  return (
    <VStack gap={'1rem'} w={'100%'} h={'100vh'}>
      <Header />
      <VStack spacing={4}>
        <Heading size={'lg'}>제목</Heading>
        <Image
          objectFit={'contain'}
          w={'100%'}
          h={'100%'}
          alt={'편지 이미지'}
          src={'https://picsum.photos/200/300'}
        />
        <HStack>
          <Button onClick={removeLetter}>삭제하기</Button>
          <ShareLetterButton />
        </HStack>
        <HStack>
          <Link href={'/letter/view'}>
            <Button>목록으로</Button>
          </Link>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default LetterDetailPage;
