'use client';

import Jinsimi from '@/component/common/jinsimi';
import {
  Button,
  Card,
  CardBody,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  VStack,
} from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';

type InitialLetterFormType = {
  to: string;
  purpose: string;
  episode: string;
  emotion: string;
  length: string;
};

const Page = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<InitialLetterFormType>();

  const onSubmit: SubmitHandler<InitialLetterFormType> = (data) => {
    console.log(data);
  };

  return (
    <VStack>
      <Heading>편지를 쓰는 이유가 무엇인가요?</Heading>
      <HStack spacing={'16'}>
        <Jinsimi h={'15rem'} />
        <Card minW={'35rem'}>
          <CardBody>
            <form onSubmit={handleSubmit(onSubmit)}>
              <VStack divider={<Divider />}>
                <FormControl isInvalid={errors.to ? true : false}>
                  <FormLabel htmlFor={'to'}>
                    이 편지는 누구에게 쓰는 것인가요?
                  </FormLabel>
                  <Input
                    id={'to'}
                    placeholder={'예: 친구, 가족, 동료 등'}
                    {...register('to', {
                      required: true,
                    })}
                  />
                </FormControl>
                <FormControl isInvalid={errors.purpose ? true : false}>
                  <FormLabel htmlFor={'purpose'}>
                    편지를 쓰는 이유는 무엇인가요?
                  </FormLabel>
                  <Input
                    id={'purpose'}
                    placeholder={'예: 감사, 위로, 사랑, 용기 등'}
                    {...register('purpose', {
                      required: true,
                    })}
                  />
                </FormControl>
                <FormControl isInvalid={errors.episode ? true : false}>
                  <FormLabel htmlFor={'episode'}>
                    그 사람과 함께한 기억에 남는 경험이나 추억이 있나요?
                  </FormLabel>
                  <Input
                    id={'episode'}
                    placeholder={
                      '편지에서 언급하고 싶은 구체적인 사건이나 에피소드를 알려주세요.'
                    }
                    {...register('episode', {
                      required: true,
                    })}
                  />
                </FormControl>
                <FormControl isInvalid={errors.emotion ? true : false}>
                  <FormLabel htmlFor={'emotion'}>
                    전달하고 싶은 감정이나 분위기가 있나요?
                  </FormLabel>
                  <Input
                    id={'emotion'}
                    placeholder={'예: 공식적, 감성적, 유머러스함, 따뜻함'}
                    {...register('emotion', {
                      required: true,
                    })}
                  />
                </FormControl>
                <FormControl isInvalid={errors.length ? true : false}>
                  <FormLabel htmlFor={'length'}>
                    편지의 길이는 어느 정도가 적당한가요?
                  </FormLabel>
                  <Input
                    id={'length'}
                    placeholder={'예: 짧게, 중간 정도, 길게'}
                    {...register('length', {
                      required: true,
                    })}
                  />
                </FormControl>
              </VStack>
              <Button mt={8} w={'full'} type="submit">
                편지 생성하기
              </Button>
            </form>
          </CardBody>
        </Card>
      </HStack>
    </VStack>
  );
};

export default Page;
