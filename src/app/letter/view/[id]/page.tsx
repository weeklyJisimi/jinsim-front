'use client';

import { useParams, useRouter } from 'next/navigation';
import Header from '@/component/layout/header';
import { VStack, Heading, Image, Button, HStack, Box } from '@chakra-ui/react';
import ShareLetterButton from '@/component/common/shareLetter';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Message } from '@/app/letter/view/page';

const LetterDetailPage = () => {
  const params = useParams();

  const { data } = useQuery<Message>({
    queryKey: ['letterDetail', params?.id],
    queryFn: async () =>
      await axios(`${process.env.NEXT_PUBLIC_API_URL}/letter/${params?.id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }).then((res) => res.data),
  });

  return (
    <VStack gap={'1rem'} w={'100%'} h={'100vh'} justify={'center'}>
      <Header />
      <VStack spacing={4}>
        <Heading size={'lg'}>{data?.title}</Heading>
        <Box w={'30%'}>{data?.content}</Box>
        {/*<Image*/}
        {/*  objectFit={'contain'}*/}
        {/*  w={'100%'}*/}
        {/*  h={'100%'}*/}
        {/*  alt={'편지 이미지'}*/}
        {/*  src={'https://picsum.photos/200/300'}*/}
        {/*/>*/}
        <HStack>To. {data?.recipient}</HStack>
        <HStack>{data?.createdAt}</HStack>
        <HStack>
          <ShareLetterButton />
          <Link href={'/letter/view'}>
            <Button>목록으로</Button>
          </Link>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default LetterDetailPage;
