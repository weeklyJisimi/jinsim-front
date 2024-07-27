import { create } from 'zustand';

type charactoristics = {
  styleCharacteristics: string;
  setStyleCharacteristics: (styleCharacteristics: string) => void;
};

const defaultCharacteristics: string = '';

export const useCharacteristicsStore = create<charactoristics>((set) => ({
  styleCharacteristics: defaultCharacteristics,
  setStyleCharacteristics: (styleCharacteristics) =>
    set({ styleCharacteristics }),
}));
