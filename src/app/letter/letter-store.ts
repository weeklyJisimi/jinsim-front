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

const defaultState: LetterData[] = [];
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
