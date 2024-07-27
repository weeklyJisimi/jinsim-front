'use client';

import {
  Button,
  Heading,
  HStack,
  Img,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useLetterDbStore } from '../letter-db-store';
import { use, useEffect, useState } from 'react';
import axios from 'axios';

const Page = () => {
  const { letter } = useLetterDbStore();
  const [letterUrl, setLetterUrl] = useState('');
  useEffect(() => {
    axios
      .post(
        `${process.env.NEXT_PUBLIC_API_URL}/generate-letter`,
        {
          title: letter.title,
          body: letter.body,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      )
      .then((res) => {
        setLetterUrl(res.data.letter);
      });
  }, []);

  return (
    <>
      <VStack w={'100%'} alignItems={'flex-start'}>
        {/* <Heading
          mx={'auto'}
          fontSize={'4xl'}
          fontWeight={'bold'}
          textDecoration={'underline'}
        >
          {letter.title}
        </Heading> */}
        <Img src={letter.image} w={'100%'} />
        <HStack>
          <Link href={'/view'}>
            <Button>편지함 가기</Button>
          </Link>
          <CopyToClipboard
            text={`http://localhost:3000/letter/view${letterUrl}`}
            onCopy={() => alert('URL이 복사되었습니다.')}
          >
            <Button isDisabled={letterUrl === ''}>공유하기</Button>
          </CopyToClipboard>
        </HStack>
      </VStack>
    </>
  );
};

export default Page;
