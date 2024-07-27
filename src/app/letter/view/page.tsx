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

const View = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ['viewData'],
    queryFn: async () =>
      await axios(`${process.env.NEXT_PUBLIC_API_URL}/letter/view`),
  });

  const mockUpData = [
    {
      title: '편지1',
      img: 'img1',
      id: 1,
    },
    {
      title: '편지2',
      img: 'img2',
      id: 2,
    },
    {
      title: '편지3',
      img: 'img3',
      id: 3,
    },
    {
      title: '편지4',
      img: 'img4',
      id: 4,
    },
  ];

  const toNames = ['개발진', '권호정', '개발팀'];

  return (
    <VStack gap={'1rem'} w={'80%'}>
      <Header />
      <HStack justify={'flex-start'} w={'100%'}>
        <Heading textColor={'#FF6000'}>보관함</Heading>
      </HStack>
      <HStack w={'100%'} alignItems={'center'} justifyContent={'space-between'}>
        <Text textColor={'#FF8B45'} fontWeight={'bold'}>
          보관 가능 편지 {mockUpData.length}/6
        </Text>
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
          {mockUpData.map((data, index) => (
            <GridItem
              w="100%"
              h="50vh"
              border={'1px solid #FF6000'}
              key={data?.title}
            >
              <VStack h={'100%'}>
                <Link href={`/letter/view/${data?.id}`}>
                  <Box flexGrow={1}>
                    <Image src={`/bg${index + 1}.jpg`} />
                  </Box>
                </Link>
                <HStack align={'center'}>
                  <Box h={'2rem'}>{data?.title}</Box>
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
