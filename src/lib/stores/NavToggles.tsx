import { create } from "zustand";

interface MenuToggleState {
  isChecked: boolean;
  setIsChecked: (isChecked: boolean) => void;
}

export const useMenuToggle = create<MenuToggleState>()((set) => ({
  isChecked: false,
  setIsChecked: (value: boolean) => set({ isChecked: value }),
}));
