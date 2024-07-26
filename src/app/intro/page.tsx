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
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  HStack,
  Input,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import { useMemo, useState } from 'react';
import Link from 'next/link';
import Jinsimi from '@/component/common/jinsimi';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

const CharacterPanel = ({ headText }: { headText: string }) => {
  return (
    <>
      <Heading>{headText}</Heading>
      <Box w={'30vh'}>
        <Jinsimi />
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

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    setIndex((prev) => prev + 1);
  };

  function onSubmit2(values) {
    console.log('values', values);
  }

  return (
    <VStack my={2}>
      <Heading>(상황에 맞춰) 자유롭게 편지를 써주세요!</Heading>
      <Box w={'30vh'}>
        <Jinsimi />
      </Box>
      <form onSubmit={handleSubmit(onSubmit2)}>
        <FormControl isInvalid={errors.name}>
          <FormLabel htmlFor="name">First name</FormLabel>
          <Input id="name" placeholder="name" {...register('name')} />
          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>
        <Button
          mt={4}
          colorScheme="teal"
          isLoading={isSubmitting}
          type="submit"
        >
          Submit
        </Button>
      </form>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
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
                    placeholder="최소 30자 이상 300자 이하 작성"
                    id={`answer-${index}`}
                    {...register(`answer-${index}`, {
                      required: 'This is required',
                      minLength: {
                        value: 30,
                        message: 'Minimum length should be 4',
                      },
                      maxLength: {
                        value: 300,
                        message: 'Maximum length should be 300',
                      },
                    })}
                  />
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </FormControl>
        <HStack justify={'center'} mt={2}>
          <Button type="submit">다음</Button>
        </HStack>
      </form>
    </VStack>
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
