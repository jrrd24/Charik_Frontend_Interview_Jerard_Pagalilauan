import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**For tailwind merge */
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
