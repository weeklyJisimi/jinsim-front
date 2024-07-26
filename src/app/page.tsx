'use client';

import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  VStack,
} from '@chakra-ui/react';
import MainPageLayout from '@/component/layout/mainPageLayout';
import Jinsimi from '@/component/common/jinsimi';
import { ChevronDownIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import { useLetterFlowStore } from './letter/letter-flow-store';
import { useRouter } from 'next/navigation';

export default function Home() {
  const { setState } = useLetterFlowStore();
  const router = useRouter();
  return (
    <VStack w={'100%'} h={'100vh'}>
      <MainPageLayout />
      <Center w={'100%'} h={'100%'}>
        <HStack>
          <VStack>
            <Heading>편지 안 쓴지 ______ 일 째</Heading>
            <Box>편지를 작성하여 나만의 진심이를 키워보세요!</Box>
            <Jinsimi w={'20vw'} />
            <HStack>
              <Link href={'/letter'}>
                <Button>편지 작성하기</Button>
              </Link>
              <Button
                onClick={() => {
                  setState('edit');
                  router.push('/letter');
                }}
              >
                편지 불러오기
              </Button>
            </HStack>
          </VStack>
          <Box />
        </HStack>
      </Center>
      <HStack justify="flex-end" w={'100%'} p={2}>
        <Menu placement={'top'}>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            설정
          </MenuButton>
          <MenuList>
            <Link href={'/setting/subscribe'}>
              <MenuItem>구독 요금제</MenuItem>
            </Link>
            <Link href={'/setting/notice'}>
              <MenuItem>공지</MenuItem>
            </Link>
            <Link href={'/setting/inquiry'}>
              <MenuItem>문의/제휴</MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </HStack>
    </VStack>
  );
}
