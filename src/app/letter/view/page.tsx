'use client';

import { Box, Grid, GridItem, HStack, Select, VStack } from '@chakra-ui/react';
import Header from '@/component/layout/header';
import Link from 'next/link';

const View = () => {
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
    {
      title: '편지5',
      img: 'img5',
      id: 5,
    },
    {
      title: '편지6',
      img: 'img6',
      id: 6,
    },
  ];

  const toNames = ['김현지', '권호정', '개발팀'];

  return (
    <VStack gap={'1rem'} w={'100%'}>
      <Header title={'편지함'} />
      <HStack w={'100%'} alignItems={'center'} justifyContent={'space-between'}>
        <Box>보관 가능 편지 1/10</Box>
        <HStack gap={1}>
          <Select
            w={'10rem'}
            onChange={(select) => {
              console.log(select.target.value);
            }}
          >
            <option value="title">제목</option>
            <option value="createdAt">만든 날짜 순</option>
          </Select>
          <Select
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
      <Box w={'100%'}>
        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
          {mockUpData.map((data) => (
            <GridItem w="100%" h="35vh" border={'1px solid'} key={data?.title}>
              <VStack h={'100%'}>
                <Link href={`/letter/view/${data?.id}`} w={'100%'} h={'100%'}>
                  <Box bg={'white'} flexGrow={1}>
                    {data?.img}
                  </Box>
                </Link>
                <Box h={'2rem'}>{data?.title}</Box>
              </VStack>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </VStack>
  );
};

export default View;
