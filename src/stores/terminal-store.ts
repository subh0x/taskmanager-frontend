import { create } from 'zustand';

interface TerminalState {
  input: string;
  updateInput: (input: string) => void;
  clearInput: () => void;

  output: string;
  updateOutput: (output: string) => void;
  clearOutput: () => void;

  cmdHistory: string[];
  updateCmdHistory: (newCmd: string) => void;

  cmdHistIdx: number;
  updateCmdHistIdx: (value: number) => void;
  incCmdHistIdx: () => void;
  decCmdHistIdx: () => void;
}

export const useTerminalStore = create<TerminalState>((set) => ({
  input: '',
  updateInput: (newInput) => set({ input: newInput }),
  clearInput: () => set({ input: '' }),

  output: '',
  updateOutput: (newOutput) => set({ output: newOutput }),
  clearOutput: () => set({ output: '' }),

  cmdHistory: [''],
  updateCmdHistory: (newCmd) => set((state) => ({ cmdHistory: [...state.cmdHistory, newCmd] })),

  cmdHistIdx: 0,
  updateCmdHistIdx: (value) => set({ cmdHistIdx: value }),
  incCmdHistIdx: () => set((state) => ({ cmdHistIdx: state.cmdHistIdx + 1 })),
  decCmdHistIdx: () => set((state) => ({ cmdHistIdx: state.cmdHistIdx - 1 })),
}));
