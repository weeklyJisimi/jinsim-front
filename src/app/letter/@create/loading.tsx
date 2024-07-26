import { Heading, VStack, Text } from '@chakra-ui/react';
import Jinsimi from '@/component/common/jinsimi';

const Loading = () => (
  <VStack>
    <Heading>진심이가 편지를 준비하고 있어요!</Heading>
    <Jinsimi h={'15rem'} />
    <Text>로딩중...</Text>
  </VStack>
);

export default Loading;
