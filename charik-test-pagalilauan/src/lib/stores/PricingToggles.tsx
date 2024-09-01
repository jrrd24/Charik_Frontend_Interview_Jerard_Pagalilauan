import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface PricingToggleState {
  isChecked: boolean;
  setIsChecked: (isChecked: boolean) => void;
}

export const usePricingToggle = create<PricingToggleState>()((set) => ({
  isChecked: true,
  setIsChecked: (value: boolean) => set({ isChecked: value }),
}));
