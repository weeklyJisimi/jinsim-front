'use client';

import {
  Box,
  Grid,
  GridItem,
  Heading,
  HStack,
  Select,
  VStack,
  Text,
  Image,
} from '@chakra-ui/react';
import Header from '@/component/layout/header';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export interface Message {
  content: string;
  createdAt: string; // ISO 8601 date string
  id: number;
  isDraft: boolean;
  isPublic: boolean;
  recipient: string;
  title: string;
}

const View = () => {
  const { data: data2, isPending } = useQuery({
    queryKey: ['viewData'],
    queryFn: async () =>
      await axios(`${process.env.NEXT_PUBLIC_API_URL}/sent-letters`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }).then((res) => res.data),
  });

  const mockUpData = [
    {
      title: '내 사랑하는 남자친구에게',
      img: 'img1',
      id: 1,
    },
  ];

  const toNames = ['개발진', '권호정', '개발팀'];

  if (isPending) return <Box>Loading...</Box>;

  return (
    <VStack gap={'1rem'} w={'80%'}>
      <Header />
      <VStack justify={'center'} w={'100%'}>
        <Heading textColor={'#FF6000'}>보관함</Heading>
        <Text textColor={'#FF8B45'} fontWeight={'bold'}>
          보관 가능 편지 {mockUpData.length}/6
        </Text>
      </VStack>
      <HStack w={'100%'} alignItems={'center'} justifyContent={'flex-end'}>
        <HStack gap={1}>
          <Select
            disabled
            w={'10rem'}
            onChange={(select) => {
              console.log(select.target.value);
            }}
          >
            <option value="title">제목</option>
            <option value="createdAt">만든 날짜 순</option>
          </Select>
          <Select
            disabled
            w={'10rem'}
            onChange={(select) => {
              console.log(select.target.value);
            }}
          >
            {toNames.map((name) => (
              <option value={name} key={name}>
                {name}
              </option>
            ))}
          </Select>
        </HStack>
      </HStack>
      <Box w={'100%'} px={10} py={2}>
        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
          {data2?.map((data: Message, index: number) => (
            <GridItem
              w="100%"
              h="50vh"
              border={'1px solid #FF6000'}
              key={data?.title}
            >
              <VStack h={'100%'}>
                <Link href={`/letter/view/${data?.id}`}>
                  <Box flexGrow={1}>
                    <Image src={`/bg${(index % 4) + 1}.jpg`} />
                  </Box>
                </Link>
                <HStack align={'center'}>
                  <Box h={'2rem'} fontWeight={'bold'}>
                    제목: {data?.title}
                  </Box>
                </HStack>
                <HStack align={'center'}>
                  <Box h={'2rem'}>To. {data?.recipient}</Box>
                </HStack>
              </VStack>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </VStack>
  );
};

export default View;
