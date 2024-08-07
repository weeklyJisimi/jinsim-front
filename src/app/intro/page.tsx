'use client';

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import Jinsimi from '@/component/common/jinsimi';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import { axiosInstance } from '@/utils/axiosInstance';
import FairyJinsimi from '@/component/common/FairyJinsimi';
import { useCharacteristicsStore } from '../letter/style_characteristics';

const CharacterPanel = ({ headText }: { headText: string }) => {
  return (
    <>
      <Heading>{headText}</Heading>
      <Box w={'30vh'}>
        <FairyJinsimi />
      </Box>
    </>
  );
};

const LiteraryPanel = ({ setIndex }: { setIndex: any }) => {
  const QUESTIONS = [
    'Q. (진심이가 되어) 3년 지기 친구에게 생일 축하 메시지를 건네보세요.',
    'Q2. (진심이가 되어) 어머니께 설날 새해 복을 기원하는 메시지를 건네보세요',
    'Q3. (진심이가 되어) 층간소음 문제를 겪은 아랫집 주민에게 사과하는 메시지를 건네보세요.',
  ];

  const [answers, setAnswers] = useState(['', '', '']);
  const { setStyleCharacteristics } = useCharacteristicsStore();
  const onSubmit = async () => {
    if (answers.some((answer) => answer.length < 30)) {
      alert('모든 문항을 30자 이상 작성해주세요');
      return;
    }
    const res = await axiosInstance.post(
      `${process.env.NEXT_PUBLIC_API_URL}/analyze-style`,
      {
        text1: answers[0],
        text2: answers[1],
        text3: answers[2],
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
    );
    setStyleCharacteristics(res.data.style_characteristics);
    setIndex((prev: number) => prev + 1);
  };

  return (
    <VStack my={2}>
      <Heading>진심이가 되어 자유롭게 편지를 써주세요!</Heading>
      <Box w={'30vh'}>
        <FairyJinsimi />
      </Box>
      <Accordion w={'100%'} allowMultiple>
        {QUESTIONS.map((question, index) => (
          <AccordionItem key={index}>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  {question}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Textarea
                maxLength={300}
                placeholder="최소 30자 이상 300자 이하 작성"
                value={answers[index]}
                onChange={(e) => {
                  const newAnswers = [...answers];
                  newAnswers[index] = e.target.value;
                  setAnswers(newAnswers);
                }}
              />
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
      <HStack justify={'center'} mt={2}>
        <Button onClick={onSubmit}>다음</Button>
      </HStack>
    </VStack>
  );
};

export default function IntroPage() {
  const [pageIndex, setPageIndex] = useState(0);
  const searchParams = useSearchParams();
  const code = searchParams.get('code');

  const getAuth = async () => {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/kakao/callback`,
      {
        code,
      }
    );
    console.log('res', res);
  };
  // useEffect(() => {
  //   getAuth();
  // }, []);

  const Panel = useMemo(() => {
    switch (pageIndex) {
      case 0:
        return (
          <>
            <CharacterPanel
              headText={'진심이가 되어 자유롭게 편지를 써주세요!'}
            />
            <Button
              onClick={() => {
                setPageIndex((prev) => prev + 1);
              }}
            >
              다음
            </Button>
          </>
        );
      case 1:
        return <LiteraryPanel setIndex={setPageIndex} />;
      default:
        return (
          <>
            <CharacterPanel headText={'와! 이제 다 됐어요!'} />
            <Link href={'/'}>
              <Button>다음</Button>
            </Link>
          </>
        );
    }
  }, [pageIndex]);

  return (
    <Center flexDirection={'column'} gap={'1rem'}>
      {Panel}
    </Center>
  );
}
