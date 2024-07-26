'use client';

import {
  Editable,
  EditableInput,
  EditablePreview,
  HStack,
  VStack,
  Text,
  Input,
  Button,
  EditableTextarea,
  IconButton,
} from '@chakra-ui/react';
import { useSourceStore } from '../letter-source-store';
import { useLetterStore } from '../letter-store';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const Page = () => {
  const { source } = useSourceStore();
  const { letter } = useLetterStore();
  // TODO : 저장 개수 + 현재 불러올 수 있는 편지 개수 받아와야 함.
  const DUMMYSAVECOUNT = 2;
  const DUMMYLOADCOUNT = 3;
  return (
    <VStack w={'100%'} alignItems={'flex-start'}>
      <Editable defaultValue={`편지 ${letter.length + 1}`} mx={'auto'}>
        <EditablePreview fontSize={'3xl'} />
        <EditableInput fontSize={'3xl'} />
      </Editable>
      <HStack w={'100%'} justifyContent={'space-between'}>
        <HStack>
          <Text>To.</Text>
          <Input placeholder={'편지 받는 대상을 적어주세요'} />
        </HStack>
        <Button>{`저장 ${DUMMYSAVECOUNT}/6`}</Button>
      </HStack>
      <HStack w={'100%'} justifyContent={'space-between'}>
        <IconButton aria-label="이전 편지" icon={<ChevronLeftIcon />} />
        <Editable
          defaultValue={
            '사전 질문의 답변으로 사용자 문체를 파악하고 아키네이터가 질문지 답변을 바탕으로 내용을 구성하여 편지 1을 보여줍니다. 그리고 사용자가 후속으로 직접 수정할 수 있으며 완성된 편지는 사용자 데이터로 남아 기존의 사용자 데이터 + 아카이빙 데이터 형식으로 누적됩니다.'
          }
          w={'100%'}
          h={'15em'}
        >
          <EditablePreview />
          <EditableTextarea h={'100%'} />
        </Editable>
        <IconButton aria-label="다음 편지" icon={<ChevronRightIcon />} />
      </HStack>
      <HStack>
        <Text>From.</Text>
        <Input placeholder={'편지 쓰는 대상을 적어주세요'} />
      </HStack>
      <HStack mx={'auto'}>
        <Button>{`새로운 편지 가져오기 (${DUMMYLOADCOUNT}/3)`}</Button>
        <Button>편지 꾸미러 가기</Button>
      </HStack>
    </VStack>
  );
};

export default Page;
