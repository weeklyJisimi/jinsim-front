'use client';

import Jinsimi from '@/component/common/jinsimi';
import { Heading, VStack, Text, Button } from '@chakra-ui/react';
import { useLetterFlowStore } from './letter-flow-store';
import FairyJinsimi from '@/component/common/FairyJinsimi';

const Page = () => {
  const { setState } = useLetterFlowStore();
  return (
    <VStack>
      <Heading
        bg={'#FF6000'}
        p={'26px'}
        rounded={'30px'}
        fontWeight={'black'}
        textColor={'white'}
      >
        진심이와 함께 편지를 써볼까요?
      </Heading>
      <Button
        h={'fit-content'}
        variant={'unstyled'}
        onClick={() => setState('initial')}
      >
        <FairyJinsimi />
      </Button>
    </VStack>
  );
};

export default Page;
