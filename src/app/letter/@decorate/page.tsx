'use client';

import {
  Text,
  Heading,
  VStack,
  Box,
  Button,
  HStack,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  IconButton,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Select,
  ButtonGroup,
} from '@chakra-ui/react';
import { useLetterStore } from '../letter-store';
import { useRef, useState } from 'react';
import { useToPng } from '@hugocxl/react-to-image';
import { useLetterFlowStore } from '../letter-flow-store';
import { ArrowLeftIcon } from '@chakra-ui/icons';

const Page = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const openButtonRef = useRef(null);
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

  const [fontWeight, setFontWeight] = useState('normal');

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
              <Text key={index} fontWeight={fontWeight}>
                {line}
              </Text>
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
      <IconButton
        ref={openButtonRef}
        onClick={onOpen}
        aria-label={'open-drawer'}
        icon={<ArrowLeftIcon />}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={openButtonRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>
            <VStack>
              <VStack>
                <Text>텍스트</Text>
                <Select placeholder="폰트">
                  <option value="option1">option1</option>
                  <option value="option2">option2</option>
                  <option value="option3">option3</option>
                </Select>
                <NumberInput>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
                <Select
                  placeholder="폰트 두께"
                  defaultValue={'normal'}
                  onChange={(select) => {
                    setFontWeight(select.target.value);
                  }}
                >
                  <option value="hairline">hairline</option>
                  <option value="thin">thin</option>
                  <option value="light">light</option>
                  <option value="normal">normal</option>
                  <option value="medium">medium</option>
                  <option value="semibold">semibold</option>
                  <option value="bold">bold</option>
                  <option value="extrabold">extrabold</option>
                  <option value="black">black</option>
                </Select>
              </VStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Page;
