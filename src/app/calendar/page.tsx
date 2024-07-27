'use client';

import {
  Box,
  Button,
  HStack,
  VStack,
  Heading,
  useDisclosure,
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  ModalBody,
  ModalOverlay,
  Checkbox,
  Input,
  Switch,
} from '@chakra-ui/react';
import Header from '@/component/layout/header';
import Calendar, { Value } from '@/component/common/calendar';
import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import dayjs, { Dayjs } from 'dayjs';

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

const SchedulePanel = ({
  scheduleData,
}: {
  scheduleData: { date: string; content: string }[];
}) => {
  const todaySchedule = useMemo(
    () =>
      scheduleData?.filter((data) => dayjs(data.date).isSame(dayjs(), 'date')),
    [scheduleData]
  );
  const upcomingSchedule = useMemo(
    () =>
      scheduleData?.filter((data) => !dayjs(data.date).isSame(dayjs(), 'date')),
    [scheduleData]
  );
  return (
    <VStack w={'350px'} gap={0}>
      <Box w={'100%'} p={2} bg={'orange'} border={'1px solid black'}>
        오늘
      </Box>
      {todaySchedule?.map((data, index) => (
        <HStack w={'100%'} p={1} border={'1px solid black'} key={index}>
          <VStack w={'100px'}>
            <Heading size={'md'}>
              D-{dayjs(data.date).diff(dayjs(), 'days')}
            </Heading>
            <Box>{data.date}</Box>
          </VStack>
          <HStack flex={1} justify={'center'}>
            <Box>{data.content}</Box>
          </HStack>
        </HStack>
      )) ?? <Box>오늘 일정이 없습니다.</Box>}
      <Box w={'100%'} p={2} bg={'orange'} border={'1px solid black'}>
        다가오는 날
      </Box>
      {upcomingSchedule?.map((data, index) => (
        <HStack w={'100%'} p={1} border={'1px solid black'} key={index}>
          <VStack w={'100px'}>
            <Heading size={'md'}>
              D-{dayjs(data.date).diff(dayjs(), 'days')}
            </Heading>
            <Box>{data.date}</Box>
          </VStack>
          <HStack flex={1} justify={'center'}>
            <Box>{data.content}</Box>
          </HStack>
        </HStack>
      )) ?? <Box>다가오는 일정이 없습니다.</Box>}
    </VStack>
  );
};

const SchduleCreateModal = ({
  isOpen,
  onClose,
  date,
  setScheduleData,
}: {
  isOpen: boolean;
  onClose: () => {};
  date: Dayjs;
  setScheduleData: (data: (prev) => any[]) => void;
}) => {
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      date: dayjs(date).format('YYYY-MM-DD'),
      title: '일정1',
      notification: false,
      reminder: ['sameDay'],
    },
  });
  const onSubmit = (data) => {
    setScheduleData((prev) => [
      ...prev,
      {
        date: data.date,
        content: data.title,
      },
    ]);
    onClose();
  };

  const handleDateChange = (e) => {
    setValue('date', e.target.value);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>일정 생성</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalBody>
            <VStack spacing={4}>
              <Input
                type="date"
                {...register('date')}
                onChange={handleDateChange}
              />
              <Input placeholder="제목 입력" {...register('title')} />
              <Box>
                알림설정 <Switch size="md" {...register('notification')} />
              </Box>
              <HStack>
                <Checkbox {...register('reminder')} value="oneMonthBefore">
                  한달 전
                </Checkbox>
                <Checkbox {...register('reminder')} value="oneWeekBefore">
                  일주일 전
                </Checkbox>
                <Checkbox {...register('reminder')} value="oneDayBefore">
                  하루 전
                </Checkbox>
                <Checkbox
                  {...register('reminder')}
                  value="sameDay"
                  defaultChecked
                >
                  당일
                </Checkbox>
              </HStack>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button type="submit">일정 생성</Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};
const CalendarPage = () => {
  const [date, setDate] = useState<Value>(new Date());
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onChange = (value: Value) => {
    setDate(value);
  };

  const [scheduleData, setScheduleData] = useState<
    { date: string; content: string }[]
  >([
    {
      date: '2024-07-27',
      content: '오늘 일정',
    },
    {
      date: '2024-08-01',
      content: '다가오는 일정',
    },
  ]);

  return (
    <VStack w={'100%'} h={'100vh'}>
      <Header title={'캘린더'} />
      <VStack w={'100%'} justify={'center'} align={'center'} h={'100%'}>
        <HStack>
          <Box border={'1px solid black'}>
            <Calendar
              onChange={onChange}
              value={date}
              scheduleData={scheduleData}
            />
          </Box>
          <SchedulePanel scheduleData={scheduleData} />
        </HStack>
        <Button onClick={onOpen}>일정 생성</Button>
        <SchduleCreateModal
          isOpen={isOpen}
          onClose={onClose}
          date={date}
          setScheduleData={setScheduleData}
        />
      </VStack>
    </VStack>
  );
};

export default CalendarPage;
