'use client';

import Jinsimi from '@/component/common/jinsimi';
import {
  Button,
  Card,
  CardBody,
  Divider,
  FormControl,
  Heading,
  HStack,
  Input,
  Textarea,
  VStack,
  Text,
} from '@chakra-ui/react';
import { useLetterFlowStore } from '../letter-flow-store';
import { SourceType, useSourceStore } from '../letter-source-store';
import { questions } from './question';
import { useRef, useState } from 'react';
import FairyJinsimi from '@/component/common/FairyJinsimi';

const Page = () => {
  const { setState } = useLetterFlowStore();
  const { setSource } = useSourceStore();
  const [questionIndex, setQuestionIndex] = useState(0);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [formData, setFormData] = useState<Array<string>>([]);

  const handleNext = () => {
    if (inputRef.current?.value) {
      setFormData([...formData, inputRef.current.value]);
      inputRef.current.value = '';
      setQuestionIndex(questionIndex + 1);
    }
  };

  const handleSubmit = () => {
    if (inputRef.current?.value) {
      setSource({
        relation: formData[0],
        purpose: formData[1],
        episode: formData[2],
        emotion: formData[3],
        length: inputRef.current?.value || '',
      });
      setState('create');
    }
  };

  return (
    <VStack spacing={'16'}>
      <Heading
        bg={'#FF6000'}
        p={'26px'}
        rounded={'30px'}
        fontWeight={'black'}
        textColor={'white'}
      >
        진심이와 함께 편지를 써볼까요?
      </Heading>
      <HStack spacing={'16'}>
        <FairyJinsimi />
        <Card
          variant={'outlined'}
          minW={'30rem'}
          h={'30rem'}
          border="1px"
          rounded={'30px'}
          borderColor={'#FF6000'}
        >
          <CardBody>
            <VStack h={'100%'} alignItems={'flex-end'}>
              <VStack spacing={'8'} w={'100%'}>
                <Heading fontSize={'xl'}>
                  {questions[questionIndex].question}
                </Heading>
                <FormControl isInvalid={!!inputRef.current?.value}>
                  <Textarea
                    h={'10rem'}
                    ref={inputRef}
                    id={questions[questionIndex].id}
                    placeholder={questions[questionIndex].placeholder}
                  />
                </FormControl>
              </VStack>
              <Button
                mt={'auto'}
                w={'fit-content'}
                onClick={
                  questionIndex === questions.length - 1
                    ? handleSubmit
                    : handleNext
                }
                variant={'unstyled'}
              >
                <Text textColor={'#FF6000'}>
                  {questionIndex === questions.length - 1
                    ? '편지 생성하기 ▶'
                    : '다음 질문으로 넘어가기 ▶'}
                </Text>
              </Button>
            </VStack>
          </CardBody>
        </Card>
      </HStack>
    </VStack>
  );
};

export default Page;
