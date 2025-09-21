import { create } from "zustand";

interface AppState {
  isAsideBarOpen: boolean;
  setIsAsideBarOpen: (isAsideBarOpen: boolean) => void;
  toggleAsideBar: VoidFunction;
  openAsideBar: VoidFunction;
}

export const useAppStore = create<AppState>()((set) => ({
  isAsideBarOpen: false,
  setIsAsideBarOpen: (isAsideBarOpen) => set(() => ({ isAsideBarOpen })),
  toggleAsideBar: () =>
    set((state) => ({ isAsideBarOpen: !state.isAsideBarOpen })),
  openAsideBar: () => set(() => ({ isAsideBarOpen: true })),
}));
