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
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { useSourceStore } from '../letter-source-store';
import { useLetterStore } from '../letter-store';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { useState, useRef } from 'react';
import { useLetterFlowStore } from '../letter-flow-store';

const Page = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef(null);
  const { source } = useSourceStore();
  const {
    letter,
    currentLetterIndex,
    increaseCurrentLetterIndex,
    decreaseCurrentLetterIndex,
  } = useLetterStore();
  const { setState } = useLetterFlowStore();
  // TODO : 저장 개수 + 현재 불러올 수 있는 편지 개수 받아와야 함.
  const DUMMYSAVECOUNT = 2;
  const DUMMYLOADCOUNT = 3;
  // TODO : 초기 편지를 불러오는 함수를 만들어야 함.
  return (
    <>
      <VStack w={'100%'} alignItems={'flex-start'}>
        <Editable defaultValue={`편지 ${letter.length}`} mx={'auto'}>
          <EditablePreview fontSize={'3xl'} />
          <EditableInput fontSize={'3xl'} />
        </Editable>
        <HStack w={'100%'} justifyContent={'space-between'}>
          <HStack>
            <Text>To.</Text>
            <Input placeholder={'편지 받는 대상을 적어주세요'} />
          </HStack>
          {/* TODO : 저장 버튼을 누르면 DB에 임시저장하고, 전역 상태에도 업데이트한다. */}
          <Button>{`저장 ${DUMMYSAVECOUNT}/6`}</Button>
        </HStack>
        <HStack w={'100%'} justifyContent={'space-between'}>
          <IconButton
            onClick={decreaseCurrentLetterIndex}
            aria-label="이전 편지"
            icon={<ChevronLeftIcon />}
          />
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
          <IconButton
            onClick={increaseCurrentLetterIndex}
            aria-label="다음 편지"
            icon={<ChevronRightIcon />}
          />
        </HStack>
        <HStack>
          <Text>From.</Text>
          <Input placeholder={'편지 쓰는 대상을 적어주세요'} />
        </HStack>
        <HStack mx={'auto'}>
          <Button
            onClick={onOpen}
          >{`새로운 편지 가져오기 (${DUMMYLOADCOUNT}/3)`}</Button>
          <Button onClick={() => setState('decorate')}>편지 꾸미러 가기</Button>
        </HStack>
      </VStack>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogBody>
              <Text textAlign={'center'}>
                {"'새로운 편지 가져오기'는 하루 3번만 가능해요"}
              </Text>
              <Text textAlign={'center'}>
                1회 차감하여 새로운 편지를 가져올까요?
              </Text>
              <Text textAlign={'center'}>
                (요금제를 업그레이드하면 더 많은 편지를 가져올 수 있어요!)
              </Text>
            </AlertDialogBody>
            <AlertDialogFooter gap={3}>
              <Button onClick={onClose}>예</Button>
              <Button ref={cancelRef} onClick={onClose}>
                아니요
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default Page;
