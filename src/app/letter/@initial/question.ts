import { SourceKey } from '../letter-source-store';

export const questions: {
  id: SourceKey;
  question: string;
  placeholder: string;
}[] = [
  {
    id: 'purpose',
    question: '편지를 쓰는 이유는 무엇인가요?',
    placeholder: '예: 감사, 위로, 사랑, 용기 등',
  },
  {
    id: 'recipient',
    question: '편지 수신인과의 관계는 무엇인가요?',
    placeholder: '예: 친구, 가족, 동료 등',
  },
  {
    id: 'episode',
    question: '그 사람과 함께한 기억에 남는 경험이나 추억이 있나요?',
    placeholder:
      '편지에서 언급하고 싶은 구체적인 사건이나 에피소드를 알려주세요.',
  },
];
