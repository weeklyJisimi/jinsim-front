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
  VStack,
} from '@chakra-ui/react';
import { useLetterFlowStore } from '../letter-flow-store';
import { SourceType, useSourceStore } from '../letter-source-store';
import { questions } from './question';
import { useRef, useState } from 'react';

const Page = () => {
  const { setState } = useLetterFlowStore();
  const { setSource } = useSourceStore();
  const [questionIndex, setQuestionIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
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
    <VStack>
      <Heading>{questions[questionIndex].question}</Heading>
      <HStack spacing={'16'}>
        <Jinsimi h={'15rem'} />
        <Card minW={'35rem'}>
          <CardBody>
            <VStack divider={<Divider />}>
              <FormControl isInvalid={!!inputRef.current?.value}>
                <Input
                  ref={inputRef}
                  id={questions[questionIndex].id}
                  placeholder={questions[questionIndex].placeholder}
                />
              </FormControl>
            </VStack>
            <Button
              mt={8}
              w={'full'}
              onClick={
                questionIndex === questions.length - 1
                  ? handleSubmit
                  : handleNext
              }
            >
              {questionIndex === questions.length - 1
                ? '편지 생성하기'
                : '다음 질문으로 넘어가기'}
            </Button>
          </CardBody>
        </Card>
      </HStack>
    </VStack>
  );
};

export default Page;
