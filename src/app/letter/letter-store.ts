import { create } from 'zustand';

export type LetterData = {
  title: string;
  to: string;
  from: string;
  body: string;
};

type LetterStore = {
  letter: LetterData[];
  currentLetterIndex: number;
  addNewLetter: (letter: LetterData) => void;
  decreaseCurrentLetterIndex: () => void;
  increaseCurrentLetterIndex: () => void;
};

const defaultState: LetterData[] = [
  {
    title: '임시 저장',
    to: '개발팀',
    from: '기획팀',
    body: '사전 질문의 답변으로 사용자 문체를 파악하고 아키네이터가 질문지 답변을 바탕으로 내용을 구성하여 편지 1을 보여줍니다. 그리고 사용자가 후속으로 직접 수정할 수 있으며 완성된 편지는 사용자 데이터로 남아 기존의 사용자 데이터 + 아카이빙 데이터 형식으로 누적됩니다.',
  },
];
const defaultIndex = 0;

export const useLetterStore = create<LetterStore>((set) => ({
  letter: defaultState,
  currentLetterIndex: defaultIndex,
  addNewLetter: (letter) =>
    set((state) => ({ letter: [...state.letter, letter] })),
  decreaseCurrentLetterIndex: () =>
    set((state) => ({
      currentLetterIndex:
        state.currentLetterIndex - 1 > 0 ? state.currentLetterIndex - 1 : 0,
    })),
  increaseCurrentLetterIndex: () =>
    set((state) => ({
      currentLetterIndex:
        state.currentLetterIndex + 1 < state.letter.length
          ? state.currentLetterIndex + 1
          : state.letter.length - 1,
    })),
}));
