'use client';

import {
  Box,
  Button,
  Center,
  HStack,
  IconButton,
  Img,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  VStack,
} from '@chakra-ui/react';
import { BellIcon } from '@chakra-ui/icons';
import Link from 'next/link';

const MainPageLayout = () => {
  const alertData = [
    { type: 'alert', content: '새로운 편지가 도착했습니다' },
    { type: 'alert', content: '새로운 댓글이 달렸습니다' },
    { type: 'alert', content: '새로운 공지사항이 있습니다' },
    { type: 'alert', content: '새로운 이벤트가 있습니다' },
    { type: 'alert', content: '새로운 소식이 있습니다' },
  ];

  return (
    <HStack as={'header'} h={'100px'} w={'100%'} justify={'center'}>
      {/* <HStack flex={1}>
        <Link href={'/calender'}>
          <Button>캘린더</Button>
        </Link>
        <Link href={'/letter/view'}>
          <Button>편지함</Button>
        </Link>
      </HStack> */}
      <Img src={'/logo.png'} alt={'logo'} h={'100px'} />
      {/* <HStack justify="flex-end" flex={1}>
        <Popover>
          <PopoverTrigger>
            <IconButton
              icon={<BellIcon />}
              fontSize="1.5rem"
              aria-label={'bell-icon'}
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
      </HStack> */}
    </HStack>
  );
};

export default MainPageLayout;
