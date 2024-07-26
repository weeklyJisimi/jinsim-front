import {
  Box,
  HStack,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  VStack,
} from '@chakra-ui/react';
import { BellIcon } from '@chakra-ui/icons';

const MainPageLayout = () => {
  const alertData = [
    { type: 'alert', content: '새로운 편지가 도착했습니다' },
    { type: 'alert', content: '새로운 댓글이 달렸습니다' },
    { type: 'alert', content: '새로운 공지사항이 있습니다' },
    { type: 'alert', content: '새로운 이벤트가 있습니다' },
    { type: 'alert', content: '새로운 소식이 있습니다' },
  ];

  return (
    <VStack>
      <HStack
        as={'header'}
        h={16}
        w={'100%'}
        px={'6'}
        justify="space-between"
        bgColor={'orange'}
      >
        <Box>편지함</Box>
        <Box>로고</Box>
        <Popover>
          <PopoverTrigger>
            <IconButton icon={<BellIcon />} fontSize="1.5rem" />
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
      </HStack>
      <HStack>
        <Box>캘린더</Box>
        <VStack>
          <Box>편지 안 쓴지 ______ 일 째</Box>
          <Box>편지를 작성하여 나만의 진심이를 키워보세요!</Box>
        </VStack>
        <Box />
      </HStack>
    </VStack>
  );
};

export default MainPageLayout;
