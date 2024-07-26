import { create } from 'zustand';

export type LetterData = {
  title: string;
  to: string;
  from: string;
  body: string;
};

type LetterStore = {
  letter: LetterData[];
  addNewLetter: (letter: LetterData) => void;
};

const defaultState: LetterData[] = [];

export const useLetterStore = create<LetterStore>((set) => ({
  letter: defaultState,
  addNewLetter: (letter) =>
    set((state) => ({ letter: [...state.letter, letter] })),
}));
