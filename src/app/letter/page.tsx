'use client';

import Jinsimi from '@/component/common/jinsimi';
import { Heading, VStack, Text, Button } from '@chakra-ui/react';
import { useLetterFlowStore } from './letter-flow-store';

const Page = () => {
  const { setState } = useLetterFlowStore();
  return (
    <VStack>
      <Heading>진심이와 함께 편지를 써볼까요?</Heading>
      <Button
        h={'fit-content'}
        variant={'unstyled'}
        onClick={() => setState('initial')}
      >
        <Jinsimi h={'15rem'} />
        <Text>진심이를 클릭하여 편지 쓰러 가기!</Text>
      </Button>
    </VStack>
  );
};

export default Page;
