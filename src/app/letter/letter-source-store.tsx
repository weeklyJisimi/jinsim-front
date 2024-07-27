import { create } from 'zustand';

// 편지 생성에 필요한 데이터
export type SourceType = {
  purpose: string;
  recipient: string;
  episode: string;
};

export type SourceKey = keyof SourceType;

type SourceStore = {
  source: undefined | SourceType;
  setSource: (source: SourceType) => void;
};

const defaultSource: undefined | SourceType = undefined;

export const useSourceStore = create<SourceStore>((set) => ({
  source: defaultSource,
  setSource: (source) => set({ source }),
}));
