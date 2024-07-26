import { create } from 'zustand';

export type LetterFlowState =
  | undefined
  | 'initial'
  | 'create'
  | 'edit'
  | 'decorate'
  | 'complete';

type LetterFlowStore = {
  state: LetterFlowState;
  setState: (state: LetterFlowState) => void;
};

const defaultState: LetterFlowState = undefined;

export const useLetterFlowStore = create<LetterFlowStore>((set) => ({
  state: defaultState,
  setState: (state) => set({ state }),
}));
