'use client';

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Avatar,
  Box,
  Button,
  Center,
  Heading,
  Input,
  Textarea,
} from '@chakra-ui/react';
import { useMemo, useState } from 'react';
import Link from 'next/link';

const CharacterPanel = ({ headText }: { headText: string }) => {
  return (
    <>
      <Heading>{headText}</Heading>
      <Box w={'30vh'}>
        <Avatar
          size="full"
          name="character"
          src="https://bit.ly/prosper-baba"
        />
      </Box>
    </>
  );
};

const LiteraryPanel = ({ setIndex }: { setIndex: any }) => {
  const QUESTIONS = [
    'Q1. (진심이가 되어)3년 지기 친구에게 생일 축하 메시지를 건네보세요.',
    'Q2. (진심이가 되어)어머니께 설날 새해 복을 기원하는 메시지를 건네보세요',
    'Q3. (진심이가 되어)층간소음 문제를 겪은 아랫집 주민에게 사과하는 메시지를 건네보세요.',
  ];
  const [answers, setAnswers] = useState(['', '', '']);

  const onFinish = () => {
    console.log(answers);
  };

  return (
    <>
      <Heading>(상황에 맞춰) 자유롭게 편지를 써주세요!</Heading>
      <Avatar size="2xl" name="character" src="https://bit.ly/prosper-baba" />
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
              <Textarea placeholder="최소 30자 이상 작성" />
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default function IntroPage() {
  const [pageIndex, setPageIndex] = useState(0);

  const Panel = useMemo(() => {
    switch (pageIndex) {
      case 0:
        return (
          <>
            <CharacterPanel
              headText={'(상황에 맞춰) 자유롭게 편지를 써주세요!'}
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
        return (
          <>
            <LiteraryPanel />
            <Button
              onClick={() => {
                setPageIndex((prev) => prev + 1);
              }}
            >
              다음
            </Button>
          </>
        );
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
