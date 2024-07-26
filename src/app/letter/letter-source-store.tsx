import { create } from 'zustand';

// 편지 생성에 필요한 데이터
export type SourceType = {
  to: string;
  purpose: string;
  episode: string;
  emotion: string;
  length: string;
};

type SourceStore = {
  source: undefined | SourceType;
  setSource: (source: SourceType) => void;
};

const defaultSource: undefined | SourceType = undefined;

export const useSourceStore = create<SourceStore>((set) => ({
  source: defaultSource,
  setSource: (source) => set({ source }),
}));
