import { create } from 'zustand';

type LetterDb = {
  title: string;
  body: string;
  to: string;
  from: string;
  image: string;
};

const defaultState: LetterDb = {
  title: '',
  body: '',
  to: '',
  from: '',
  image: '',
};

type LetterDbStore = {
  letter: LetterDb;
  setLetter: (letter: LetterDb) => void;
};

export const useLetterDbStore = create<LetterDbStore>((set) => ({
  letter: defaultState,
  setLetter: (letter) => set({ letter }),
}));
