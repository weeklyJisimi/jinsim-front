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
  Text,
  Img,
  Popover,
  PopoverTrigger,
  IconButton,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
} from '@chakra-ui/react';
import MainPageLayout from '@/component/layout/mainPageLayout';
import Jinsimi from '@/component/common/jinsimi';
import { BellIcon, ChevronDownIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import { useLetterFlowStore } from './letter/letter-flow-store';
import { useRouter } from 'next/navigation';

const alertData = [
  { type: 'alert', content: '새로운 편지가 도착했습니다' },
  { type: 'alert', content: '새로운 댓글이 달렸습니다' },
  { type: 'alert', content: '새로운 공지사항이 있습니다' },
  { type: 'alert', content: '새로운 이벤트가 있습니다' },
  { type: 'alert', content: '새로운 소식이 있습니다' },
];

export default function Home() {
  const { setState } = useLetterFlowStore();
  const router = useRouter();

  return (
    <VStack w={'100%'} h={'100vh'} bgImage={'mainBackground.png'}>
      <MainPageLayout />
      <Center w={'100%'} h={'100%'}>
        <HStack w={'100%'} justify={'center'}>
          <VStack w={'100%'}>
            <HStack
              w={'100%'}
              justify={'space-around'}
              alignItems={'flex-start'}
            >
              <VStack>
                <Link href={'/calender'}>
                  <Button
                    w={'70px'}
                    h={'70px'}
                    bgColor={'#FF6000'}
                    textColor={'white'}
                  >
                    캘린더
                  </Button>
                </Link>
                <Link href={'/letter/view'}>
                  <Button
                    w={'70px'}
                    h={'70px'}
                    bgColor={'#FF6000'}
                    textColor={'white'}
                  >
                    편지함
                  </Button>
                </Link>
              </VStack>
              <VStack>
                <Heading
                  bgColor={'#FFFFFF'}
                  rounded={'30px'}
                  py={'26px'}
                  px={'90px'}
                  fontSize={'50px'}
                >
                  편지 안 쓴지 ______ 일 째
                </Heading>
                <Text fontWeight={'black'} fontSize={'30px'}>
                  편지를 작성하여 나만의 진심이를 키워보세요!
                </Text>
              </VStack>
              <>
                <Popover>
                  <PopoverTrigger>
                    <IconButton
                      icon={<BellIcon />}
                      fontSize="70px"
                      textColor={'#FF6000'}
                      h={'70px'}
                      w={'70px'}
                      aria-label={'bell-icon'}
                      variant={'unstyled'}
                    />
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverBody>
                      {alertData?.map((alert) => (
                        <VStack key={alert.content}>
                          <Box>{alert.type}</Box>
                          <Box>{alert.content}</Box>
                        </VStack>
                      ))}
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              </>
            </HStack>
            <Img src={'/jinsimi.png'} alt={'jinsimi'} w={'30vw'} />
            <HStack>
              <Button
                onClick={() => {
                  setState('edit');
                  router.push('/letter');
                }}
                rounded={'30px'}
                bgColor={'#FF8B45'}
                textColor={'white'}
                px={'50px'}
              >
                편지 이어 쓰기
              </Button>
              <Link href={'/letter'}>
                <Button
                  rounded={'30px'}
                  bgColor={'#FF6000'}
                  textColor={'white'}
                  px={'50px'}
                >
                  편지 새로 쓰기
                </Button>
              </Link>
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
