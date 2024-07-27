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
  SimpleGrid,
  Checkbox,
  Input,
} from '@chakra-ui/react';
import { useLetterStore } from '../letter-store';
import { useRef, useState } from 'react';
import { useToPng } from '@hugocxl/react-to-image';
import { useLetterFlowStore } from '../letter-flow-store';
import { ArrowLeftIcon } from '@chakra-ui/icons';
import { bgImageData, bgImageType } from './bgImage';
import { useLetterDbStore } from '../letter-db-store';

const Page = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const openButtonRef = useRef(null);
  const { setState } = useLetterFlowStore();
  const { letter, currentLetterIndex } = useLetterStore();
  const { setLetter } = useLetterDbStore();
  const [{ status, isLoading }, convertToImage, ref] = useToPng<HTMLDivElement>(
    {
      onStart: () => {
        console.log('onStart');
      },
      onSuccess: (data) => {
        setLetter({
          title: letter[currentLetterIndex].title,
          body: letter[currentLetterIndex].body,
          to: letter[currentLetterIndex].to,
          from: letter[currentLetterIndex].from,
          image: data,
        });
        setState('complete');
      },
      onError: (error) => {
        console.error(error);
      },
    }
  );

  const [fontWeight, setFontWeight] = useState('normal');
  const [fontSize, setFontSize] = useState(16);
  const [date, setDate] = useState(
    new Date().toISOString().split('T')[0].split('-').join('-')
  );
  const [showDate, setShowDate] = useState(false);
  const [bgImage, setBgImage] = useState<bgImageType>('bg1');

  return (
    <>
      <VStack>
        {/* 편지 이미지 컴포넌트 */}
        <VStack
          p={6}
          spacing={4}
          alignItems={'flex-start'}
          w="1024px"
          backgroundImage={bgImageData[bgImage]}
          ref={ref}
        >
          <Heading mx={'auto'}>{letter[currentLetterIndex].title}</Heading>
          <Text
            fontWeight={'bold'}
          >{`To. ${letter[currentLetterIndex].to}`}</Text>
          <Box>
            {letter[currentLetterIndex].body.split('\n').map((line, index) => (
              <Text
                key={index}
                fontWeight={fontWeight}
                fontSize={`${fontSize}px`}
              >
                {line}
              </Text>
            ))}
          </Box>
          <HStack w={'100%'} justifyContent={'space-between'}>
            <Text
              fontWeight={'bold'}
            >{`From. ${letter[currentLetterIndex].from}`}</Text>
            {showDate && <Text fontWeight={'bold'}>{`Date. ${date}`}</Text>}
          </HStack>
        </VStack>
        <HStack>
          <Button onClick={() => setState('create')}>
            <Text>편지 수정</Text>
          </Button>
          <Button onClick={convertToImage}>
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
                <NumberInput
                  defaultValue={16}
                  min={10}
                  max={20}
                  onChange={(_valueAsString, valueAsNumber) => {
                    setFontSize(valueAsNumber);
                  }}
                >
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
              <VStack>
                <Text>텍스트</Text>
                <Checkbox
                  isChecked={showDate}
                  onChange={() => {
                    setShowDate(!showDate);
                  }}
                >
                  날짜 표시하기
                </Checkbox>
                <Input
                  placeholder="날짜"
                  type="date"
                  value={date}
                  onChange={(event) => {
                    setDate(event.target.value);
                  }}
                />
              </VStack>
              <VStack>
                <Text>편지지</Text>
                <SimpleGrid columns={3} spacing={5}>
                  <Button
                    onClick={() => setBgImage('bg1')}
                    colorScheme={bgImage === 'bg1' ? 'orange' : 'gray'}
                  >
                    편지지1
                  </Button>
                  <Button
                    onClick={() => setBgImage('bg2')}
                    colorScheme={bgImage === 'bg2' ? 'orange' : 'gray'}
                  >
                    편지지2
                  </Button>
                  <Button
                    onClick={() => setBgImage('bg3')}
                    colorScheme={bgImage === 'bg3' ? 'orange' : 'gray'}
                  >
                    편지지3
                  </Button>
                  <Button
                    onClick={() => setBgImage('bg4')}
                    colorScheme={bgImage === 'bg4' ? 'orange' : 'gray'}
                  >
                    편지지4
                  </Button>
                  <Button isDisabled>편지지5</Button>
                  <Button isDisabled>편지지6</Button>
                  <Button isDisabled>편지지7</Button>
                  <Button isDisabled>편지지8</Button>
                  <Button isDisabled>편지지9</Button>
                </SimpleGrid>
              </VStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Page;
