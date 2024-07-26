'use client';

import { Text, Heading, VStack, Box, Button, HStack } from '@chakra-ui/react';
import { useLetterStore } from '../letter-store';
import { useState } from 'react';
import { useToPng } from '@hugocxl/react-to-image';
import { useLetterFlowStore } from '../letter-flow-store';

const Page = () => {
  const { setState } = useLetterFlowStore();
  const { letter, currentLetterIndex } = useLetterStore();
  const [imageSrc, setImageSrc] = useState<string | undefined>();
  const [{ status, isLoading }, convertToImage, ref] = useToPng<HTMLDivElement>(
    {
      onStart: () => {
        console.log('onStart');
      },
      onSuccess: (data) => {
        setImageSrc(data);
      },
      onError: (error) => {
        console.error(error);
      },
    }
  );
  return (
    <>
      <VStack>
        {/* 편지 이미지 컴포넌트 */}
        <VStack
          p={2}
          spacing={4}
          alignItems={'flex-start'}
          w="1024px"
          backgroundImage={
            'https://cdn.pixabay.com/photo/2023/02/01/21/40/pink-7761356_1280.png'
          }
          ref={ref}
        >
          <Heading mx={'auto'}>{letter[currentLetterIndex].title}</Heading>
          <Text
            fontWeight={'bold'}
          >{`To. ${letter[currentLetterIndex].to}`}</Text>
          <Box>
            {letter[currentLetterIndex].body.split('\n').map((line, index) => (
              <Text key={index}>{line}</Text>
            ))}
          </Box>
          <Text
            fontWeight={'bold'}
          >{`From. ${letter[currentLetterIndex].from}`}</Text>
        </VStack>
        <HStack>
          <Button onClick={() => setState('create')}>
            <Text>편지 수정</Text>
          </Button>
          <Button>
            <Text>편지 완성하기</Text>
          </Button>
        </HStack>
      </VStack>
    </>
  );
};

export default Page;
