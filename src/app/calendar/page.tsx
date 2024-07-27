'use client';

import { Box, Button, HStack, VStack, Heading } from '@chakra-ui/react';
import Header from '@/component/layout/header';
import Calendar, { Value } from '@/component/common/calendar';
import { useState } from 'react';

const scheduleData = [
  {
    date: '2024-08-01',
    content: '김현지 입사',
  },
  {
    date: '2024-08-02',
    content: '김현지 입사',
  },
];

const SchedulePanel = () => {
  return (
    <VStack w={'350px'} gap={0}>
      <Box w={'100%'} p={2} bg={'#FF8B45'} border={'1px solid black'}>
        오늘
      </Box>
      {scheduleData.map((data, index) => (
        <HStack w={'100%'} p={1} border={'1px solid black'} key={index}>
          <VStack w={'100px'}>
            <Heading size={'md'}>D-18</Heading>
            <Box>{data.date}</Box>
          </VStack>
          <HStack flex={1} justify={'center'}>
            <Box>{data.content}</Box>
          </HStack>
        </HStack>
      ))}
      <Box w={'100%'} p={2} bg={'#FF8B45'} border={'1px solid black'}>
        다가오는 날
      </Box>
      {scheduleData.map((data, index) => (
        <HStack w={'100%'} p={1} border={'1px solid black'} key={index}>
          <VStack w={'100px'}>
            <Heading size={'md'}>D-18</Heading>
            <Box>{data.date}</Box>
          </VStack>
          <HStack flex={1} justify={'center'}>
            <Box>{data.content}</Box>
          </HStack>
        </HStack>
      ))}
    </VStack>
  );
};

const CalendarPage = () => {
  const [date, setDate] = useState<Value>(new Date());
  const onChange = (value: Value) => {
    console.log('value', value);
    setDate(value);
  };

  return (
    <VStack w={'100%'} h={'100vh'}>
      <Header />
      <HStack w={'100%'} justify={'center'}>
        <Heading textColor={'#FF6000'}>캘린더</Heading>
      </HStack>
      <VStack w={'100%'} justify={'center'} align={'center'} h={'100%'}>
        <HStack>
          <Box border={'1px solid black'}>
            <Calendar
              onChange={onChange}
              value={date}
              scheduleData={scheduleData}
            />
          </Box>
          <SchedulePanel />
        </HStack>
        <Button>일정 생성</Button>
      </VStack>
    </VStack>
  );
};

export default CalendarPage;
