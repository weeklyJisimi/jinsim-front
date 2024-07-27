import { Heading, VStack, Text } from '@chakra-ui/react';
import Jinsimi from '@/component/common/jinsimi';
import FairyJinsimi from '@/component/common/FairyJinsimi';

const Loading = () => (
  <VStack>
    <Heading
      bg={'#FF6000'}
      p={'26px'}
      rounded={'30px'}
      fontWeight={'black'}
      textColor={'white'}
    >
      진심이가 편지를 준비하고 있어요!
    </Heading>
    <FairyJinsimi />
    <Text textColor={'#FF6000'}>로딩중...</Text>
  </VStack>
);

export default Loading;
