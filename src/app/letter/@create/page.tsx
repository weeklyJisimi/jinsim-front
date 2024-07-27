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
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
  Select,
  Center,
} from '@chakra-ui/react';
import { useSourceStore } from '../letter-source-store';
import { LetterData, useLetterStore } from '../letter-store';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { useState, useRef, useEffect } from 'react';
import { useLetterFlowStore } from '../letter-flow-store';
import axios from 'axios';
import { useCharacteristicsStore } from '../style_characteristics';
import Loading from './loading';

// // TODO 임시 저장 데이터가 있으면 불러오도록 해야 함.
// const { data: draftLetter }: { data: LetterData[] } = {
//   data: [
//     {
//       title: '임시 저장 편지~~',
//       body: '임시 저장 편지 내용~~',
//       to: '임시 저장 받는 대상~~',
//       from: '임시 저장 보내는 대상~~',
//     },
//   ],
// };

const Page = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef(null);
  const { source } = useSourceStore();
  const { state } = useLetterFlowStore();
  const [currentLetterIdx, setCurrentLetterIdx] = useState(0);
  const {
    letter,
    currentLetterIndex,
    increaseCurrentLetterIndex,
    decreaseCurrentLetterIndex,
    addNewLetters,
    addNewLetter,
  } = useLetterStore();
  const { setState } = useLetterFlowStore();
  const { styleCharacteristics } = useCharacteristicsStore();
  // TODO : 저장 개수 + 현재 불러올 수 있는 편지 개수 받아와야 함.
  const DUMMYSAVECOUNT = 2;
  const DUMMYLOADCOUNT = 3;
  // TODO : 초기 편지를 불러오는 함수를 만들어야 함.

  useEffect(() => {
    const generateLetter = async () => {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/generate-letter-from-style`,
        {
          ...source,
          style_characteristics: styleCharacteristics,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      console.log(response.data.generated_letter);
      addNewLetter({
        title: `새로운 편지`,
        to: '',
        from: '',
        body: response.data.generated_letter,
      });
    };
    if (source) {
      generateLetter();
    }
  }, []);

  console.log(letter);

  // useEffect(() => {
  //   if (draftLetter) {
  //     addNewLetters(draftLetter);
  //   }
  // }, [addNewLetters]);

  if (letter.length === 0) return <Loading />;

  return (
    <>
      <VStack w={'100%'} alignItems={'flex-start'}>
        <Editable
          defaultValue={letter[currentLetterIndex].title}
          mx={'auto'}
          fontSize={'4xl'}
          fontWeight={'bold'}
          textDecoration={'underline'}
        >
          <EditablePreview />
          <EditableInput />
        </Editable>
        <HStack w={'100%'} justifyContent={'space-between'}>
          <HStack>
            <Center
              textColor={'white'}
              fontWeight={'bold'}
              bgColor={'#FF6000'}
              w={'143px'}
              h={'40px'}
              rounded={'10px'}
            >
              To.
            </Center>
            <Input
              placeholder={'편지 받는 대상을 적어주세요'}
              border={'2px'}
              borderColor={'#FF6000'}
              defaultValue={letter[currentLetterIndex].to}
            />
          </HStack>
          {/* TODO : 저장 버튼을 누르면 DB에 임시저장하고, 전역 상태에도 업데이트한다. */}
          <HStack>
            {/* <Button
              w={'158px'}
              bgColor={'#8B8B8B'}
              textColor={'white'}
            >{`저장 ${DUMMYSAVECOUNT}/6`}</Button> */}
            {/* <Select
              placeholder={'임시 저장 편지 불러오기'}
              border={'2px'}
              borderColor={'#FF6000'}
            >
              {draftLetter.map((letter, idx) => (
                <option key={idx}>{letter.title}</option>
              ))}
            </Select> */}
          </HStack>
        </HStack>
        <HStack w={'100%'} justifyContent={'space-between'}>
          {/* <IconButton
            onClick={decreaseCurrentLetterIndex}
            aria-label="이전 편지"
            icon={<ArrowBackIcon />}
            rounded={'full'}
            border={'2px'}
            borderColor={'#FF6000'}
            bgColor={'#FFE0CD'}
            textColor={'#FF6000'}
          /> */}
          <Editable
            defaultValue={letter[currentLetterIndex].body}
            w={'100%'}
            h={'20em'}
            border={'2px'}
            borderColor={'#FF6000'}
            p={'10px'}
            rounded={'10px'}
          >
            <EditablePreview />
            <EditableTextarea h={'100%'} />
          </Editable>
          {/* <IconButton
            onClick={increaseCurrentLetterIndex}
            aria-label="다음 편지"
            icon={<ArrowForwardIcon />}
            rounded={'full'}
            border={'2px'}
            borderColor={'#FF6000'}
            bgColor={'#FFE0CD'}
            textColor={'#FF6000'}
          /> */}
        </HStack>
        <HStack>
          <Center
            textColor={'white'}
            fontWeight={'bold'}
            bgColor={'#FF6000'}
            w={'143px'}
            h={'40px'}
            rounded={'10px'}
          >
            From.
          </Center>
          <Input
            placeholder={'편지 쓰는 대상을 적어주세요'}
            border={'2px'}
            borderColor={'#FF6000'}
            defaultValue={letter[currentLetterIndex].from}
          />
        </HStack>
        <HStack mx={'auto'}>
          {/* {state === 'create' ? (
            <Button
              onClick={onOpen}
              rounded={'30px'}
              bgColor={'#FF8B45'}
              textColor={'white'}
            >
              <VStack spacing={1}>
                <Text>새로운 편지 가져오기</Text>
                <Text fontSize={'xs'}>{`(${DUMMYLOADCOUNT}/3)`}</Text>
              </VStack>
            </Button>
          ) : null} */}
          <Button
            onClick={() => setState('decorate')}
            rounded={'30px'}
            bgColor={'#FF6000'}
            textColor={'white'}
          >
            편지 꾸미러 가기
          </Button>
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
